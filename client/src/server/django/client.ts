const SERVER_FETCH_TIMEOUT_MS = 25_000;

type QueryValue = string | number | boolean | undefined;

type ServerFetchOptions = {
  revalidate?: number;
  tags?: string[];
};

function getServerApiBaseUrl(): string {
  const raw =
    process.env.API_URL ||
    process.env.API_BASE_URL ||
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    process.env.NEXT_PUBLIC_API_URL ||
    (process.env.NODE_ENV !== 'production' ? 'http://localhost:8000/api' : '');

  const baseUrl = raw.replace(/\/+$/, '');

  if (!baseUrl) {
    throw new Error(
      'Server API URL is not configured. Set API_URL or API_BASE_URL.'
    );
  }

  return baseUrl;
}

function buildApiPath(
  path: string,
  query?: Record<string, QueryValue>
): string {
  const normalizedPath = `/${path}`.replace(/\/{2,}/g, '/');
  const params = new URLSearchParams();

  Object.entries(query ?? {}).forEach(([key, value]) => {
    if (value !== undefined) {
      params.append(key, String(value));
    }
  });

  const queryString = params.toString();

  return queryString ? `${normalizedPath}?${queryString}` : normalizedPath;
}

function logServerFetchDev(payload: {
  url: string;
  durationMs: number;
  status?: number;
  aborted?: boolean;
  timedOut?: boolean;
}) {
  if (process.env.NODE_ENV === 'development') {
    console.info('[server-api-fetch]', payload);
  }
}

export async function fetchServerJson<T>(
  path: string,
  query?: Record<string, QueryValue>,
  options?: ServerFetchOptions
): Promise<T> {
  const relativePath = buildApiPath(path, query);
  const url = `${getServerApiBaseUrl()}${relativePath}`;

  const controller = new AbortController();
  let timedOut = false;

  const timeoutId = setTimeout(() => {
    timedOut = true;
    controller.abort();
  }, SERVER_FETCH_TIMEOUT_MS);

  const startedAt = performance.now();

  try {
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
      },
      signal: controller.signal,
      ...(options
        ? {
            next: {
              revalidate: options.revalidate,
              tags: options.tags,
            },
          }
        : {
            cache: 'no-store' as const,
          }),
    });

    const durationMs = Math.round(performance.now() - startedAt);

    logServerFetchDev({
      url: relativePath,
      durationMs,
      status: response.status,
      aborted: false,
      timedOut: false,
    });

    if (!response.ok) {
      throw new Error(`Failed to load ${path}`);
    }

    return (await response.json()) as T;
  } catch (error) {
    const durationMs = Math.round(performance.now() - startedAt);
    const aborted = error instanceof Error && error.name === 'AbortError';

    logServerFetchDev({
      url: relativePath,
      durationMs,
      aborted,
      timedOut: aborted && timedOut,
    });

    throw new Error(`Failed to load ${path}`);
  } finally {
    clearTimeout(timeoutId);
  }
}