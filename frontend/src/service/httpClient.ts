export type HttpMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE';

export class ApiError extends Error {
  status: number;
  payload: unknown;

  constructor(status: number, message: string, payload?: unknown) {
    super(message);
    this.status = status;
    this.payload = payload;
  }
}

const resolveBaseUrl = () => {
  const isServer = typeof window === 'undefined';

  const resolved = isServer
    ? process.env.API_URL || process.env.NEXT_PUBLIC_API_URL
    : process.env.NEXT_PUBLIC_API_URL;

  return (resolved || 'http://localhost:8000/api').replace(/\/+$/, '');
};

const baseUrl = resolveBaseUrl();

export const getApiBaseUrl = () => resolveBaseUrl();

export type RequestOptions = {
  body?: unknown;
  token?: string;
  query?: Record<string, string | number | boolean | undefined | null>;
  timeoutMs?: number;
  next?: { revalidate?: number; tags?: string[] };
  cache?: RequestCache;
  headers?: Record<string, string>;
};

const buildUrl = (path: string, query?: RequestOptions['query']) => {
  const urlPath = `/${path}`.replace(/\/+/, '/').replace(/\/{2,}/g, '/');
  const params = new URLSearchParams();
  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      if (value === undefined || value === null) return;
      params.append(key, String(value));
    });
  }
  const qs = params.toString();
  return qs ? `${baseUrl}${urlPath}?${qs}` : `${baseUrl}${urlPath}`;
};

const parseResponse = async <T>(res: Response): Promise<T> => {
  if (res.status === 204) {
    return undefined as T;
  }
  const text = await res.text();
  if (!text) return undefined as T;
  try {
    return JSON.parse(text) as T;
  } catch {
    return text as unknown as T;
  }
};

const buildErrorMessage = (payload: unknown, fallback: string) => {
  if (!payload) return fallback;
  if (typeof payload === 'string') return payload;
  const maybe = payload as { error?: string; message?: string };
  return maybe.error || maybe.message || fallback;
};

const request = async <T>(
  method: HttpMethod,
  path: string,
  options: RequestOptions = {}
): Promise<T> => {
  const {
    body,
    token,
    query,
    timeoutMs = 12000,
    next,
    cache,
    headers,
  } = options;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  const requestHeaders: Record<string, string> = {
    Accept: 'application/json',
    ...headers,
  };
  if (body) requestHeaders['Content-Type'] = 'application/json';
  if (token) requestHeaders.Authorization = `Bearer ${token}`;

  try {
    const requestInit: RequestInit & { next?: RequestOptions['next'] } = {
      method,
      headers: requestHeaders,
      body: body ? JSON.stringify(body) : undefined,
      signal: controller.signal,
      cache,
      next,
    };

    const url = buildUrl(path, query);
console.log('HTTP', method, url);

const response = await fetch(url, requestInit);
console.log('STATUS', response.status, url);

    const payload = await parseResponse<unknown>(response);

    if (!response.ok) {
      const message = buildErrorMessage(
        payload,
        response.statusText || 'Request failed'
      );
      throw new ApiError(response.status, message, payload);
    }

    return payload as T;
  } catch (error) {
    if (error instanceof ApiError) throw error;
    if (error instanceof DOMException && error.name === 'AbortError') {
      throw new ApiError(408, 'Request timed out');
    }
    throw error as Error;
  } finally {
    clearTimeout(timeout);
  }
};

export const httpClient = {
  get: <T>(path: string, options?: RequestOptions) =>
    request<T>('GET', path, options),
  post: <T>(path: string, options?: RequestOptions) =>
    request<T>('POST', path, options),
  patch: <T>(path: string, options?: RequestOptions) =>
    request<T>('PATCH', path, options),
  delete: <T>(path: string, options?: RequestOptions) =>
    request<T>('DELETE', path, options),
};
