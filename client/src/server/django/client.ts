function resolveServerApiBaseUrl(): string {
  const raw =
    process.env.API_URL ||
    process.env.API_BASE_URL ||
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    process.env.NEXT_PUBLIC_API_URL ||
    (process.env.NODE_ENV !== 'production' ? 'http://localhost:8000/api' : '');

  const url = raw.replace(/\/+$/, '');
  if (!url) {
    throw new Error(
      'Server API URL is not configured. Set API_URL or API_BASE_URL in the environment (e.g. Vercel → Environment Variables).'
    );
  }
  return url;
}

export const getServerApiBaseUrl = () => resolveServerApiBaseUrl();

export const buildServerApiUrl = (
  path: string,
  query?: Record<string, string | number | boolean | undefined>
) => {
  const normalizedPath = `/${path}`.replace(/\/+/, '/').replace(/\/{2,}/g, '/');
  const params = new URLSearchParams();

  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      if (value === undefined) {
        return;
      }

      params.append(key, String(value));
    });
  }

  const queryString = params.toString();
  const baseUrl = getServerApiBaseUrl();

  return queryString
    ? `${baseUrl}${normalizedPath}?${queryString}`
    : `${baseUrl}${normalizedPath}`;
};

export const fetchServerJson = async <T>(
  path: string,
  query?: Record<string, string | number | boolean | undefined>,
  options?: {
    revalidate?: number;
    tags?: string[];
  }
) => {
  const response = await fetch(buildServerApiUrl(path, query), {
    headers: {
      Accept: 'application/json',
    },
    next: options
      ? {
          revalidate: options.revalidate,
          tags: options.tags,
        }
      : undefined,
    cache: options ? 'force-cache' : 'no-store',
  });

  if (!response.ok) {
    throw new Error(`Failed to load ${path}`);
  }

  return (await response.json()) as T;
};
