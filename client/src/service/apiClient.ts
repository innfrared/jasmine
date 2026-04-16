import { API_ENDPOINTS } from '@/shared/api/endpoints';

type HttpMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE';

export class ApiError extends Error {
  status: number;
  payload: unknown;

  constructor(status: number, message: string, payload?: unknown) {
    super(message);
    this.status = status;
    this.payload = payload;
  }
}

const runtimeEnv =
  (globalThis as { process?: { env?: Record<string, string | undefined> } })
    .process?.env ?? {};

const LOCAL_DEV_API_FALLBACK = 'http://localhost:8000/api';

const resolveApiBaseUrl = (): string => {
  const fromEnv =
    runtimeEnv.NEXT_PUBLIC_API_URL ||
    runtimeEnv.NEXT_PUBLIC_API_BASE_URL ||
    runtimeEnv.API_BASE_URL ||
    runtimeEnv.REACT_APP_API_BASE_URL ||
    runtimeEnv.EXPO_PUBLIC_API_BASE_URL;

  if (fromEnv) {
    return fromEnv.replace(/\/+$/, '');
  }

  if (typeof window !== 'undefined') {
    const host = window.location.hostname;
    const isLocalHost =
      host === 'localhost' ||
      host === '127.0.0.1' ||
      host === '[::1]';
    if (!isLocalHost) {
      return '';
    }
  }

  return LOCAL_DEV_API_FALLBACK.replace(/\/+$/, '');
};

const baseUrl = resolveApiBaseUrl();

type RequestOptions = {
  body?: unknown;
  query?: Record<string, string | number | boolean | undefined | null>;
  skipAuthRetry?: boolean;
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

const parseResponse = async <T>(res: globalThis.Response): Promise<T> => {
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

const isBrowser = () => typeof window !== 'undefined';

let refreshInFlight: Promise<boolean> | null = null;
let hasBroadcastSessionExpiry = false;

const emitSessionExpired = async () => {
  if (!isBrowser()) {
    return;
  }

  if (hasBroadcastSessionExpiry) {
    return;
  }

  hasBroadcastSessionExpiry = true;
  const { tokenManager } = await import('@/shared/auth/tokenManager');
  tokenManager.clearSession();
  window.dispatchEvent(new Event('auth:logout'));
};

const runRefreshRequest = async () => {
  const response = await fetch(buildUrl(API_ENDPOINTS.auth.refresh), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
    },
    credentials: 'include',
  });

  return response.ok;
};

const refreshSessionSingleFlight = async () => {
  if (!isBrowser()) {
    return false;
  }

  if (!refreshInFlight) {
    refreshInFlight = runRefreshRequest().finally(() => {
      refreshInFlight = null;
    });
  }

  return refreshInFlight;
};

const request = async <T>(
  method: HttpMethod,
  path: string,
  options: RequestOptions = {}
): Promise<T> => {
  const { body, query, skipAuthRetry = false } = options;
  const headers: Record<string, string> = {
    Accept: 'application/json',
  };
  if (body) headers['Content-Type'] = 'application/json';

  const response = await fetch(buildUrl(path, query), {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
    credentials: 'include',
  });

  if (response.ok) {
    hasBroadcastSessionExpiry = false;
  }

  const payload = await parseResponse<unknown>(response);
  const normalizedPath = path.replace(/^\/+/, '');
  const isRefreshRequest = normalizedPath === API_ENDPOINTS.auth.refresh;

  if (
    response.status === 401 &&
    isBrowser() &&
    !skipAuthRetry &&
    !isRefreshRequest
  ) {
    const hasRefreshed = await refreshSessionSingleFlight();

    if (hasRefreshed) {
      const retryResponse = await fetch(buildUrl(path, query), {
        method,
        headers,
        body: body ? JSON.stringify(body) : undefined,
        credentials: 'include',
      });

      const retryPayload = await parseResponse<unknown>(retryResponse);

      if (!retryResponse.ok) {
        const message =
          (retryPayload as { error?: string })?.error ||
          retryResponse.statusText ||
          'Request failed';
        throw new ApiError(retryResponse.status, message, retryPayload);
      }

      return retryPayload as T;
    }

    await emitSessionExpired();
  }

  if (!response.ok) {
    const message =
      (payload as { error?: string })?.error ||
      response.statusText ||
      'Request failed';
    throw new ApiError(response.status, message, payload);
  }

  return payload as T;
};

export const apiClient = {
  get: <T>(path: string, options?: RequestOptions) =>
    request<T>('GET', path, options),
  post: <T>(path: string, options?: RequestOptions) =>
    request<T>('POST', path, options),
  patch: <T>(path: string, options?: RequestOptions) =>
    request<T>('PATCH', path, options),
  delete: <T>(path: string, options?: RequestOptions) =>
    request<T>('DELETE', path, options),
};

export const getApiBaseUrl = () => baseUrl;
