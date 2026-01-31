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

const ENV_BASE_URL =
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_API_URL) ||
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_API_BASE_URL) ||
  (typeof process !== 'undefined' && process.env?.API_BASE_URL) ||
  (typeof process !== 'undefined' && process.env?.REACT_APP_API_BASE_URL) ||
  (typeof process !== 'undefined' && process.env?.EXPO_PUBLIC_API_BASE_URL) ||
  'http://localhost:8000/api';

const baseUrl = ENV_BASE_URL.replace(/\/+$/, '');

type RequestOptions = {
  body?: unknown;
  token?: string;
  query?: Record<string, string | number | boolean | undefined | null>;
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

const request = async <T>(
  method: HttpMethod,
  path: string,
  options: RequestOptions = {}
): Promise<T> => {
  const { body, token, query } = options;
  const headers: Record<string, string> = {
    Accept: 'application/json',
  };
  if (body) headers['Content-Type'] = 'application/json';
  
  let accessToken = token;
  if (!accessToken && typeof window !== 'undefined') {
    const { tokenManager } = await import('../utils/tokenManager');
    const storedToken = tokenManager.getAccessToken();
    if (storedToken) accessToken = storedToken;
  }
  if (accessToken) headers.Authorization = `Bearer ${accessToken}`;

  const response = await fetch(buildUrl(path, query), {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  const payload = await parseResponse<unknown>(response);

  if (response.status === 401 && typeof window !== 'undefined') {
    const { tokenManager } = await import('../utils/tokenManager');
    const newAccessToken = await tokenManager.refreshAccessToken();
    
    if (newAccessToken) {
      headers.Authorization = `Bearer ${newAccessToken}`;
      const retryResponse = await fetch(buildUrl(path, query), {
        method,
        headers,
        body: body ? JSON.stringify(body) : undefined,
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
    } else {
      tokenManager.clearTokens();
      window.dispatchEvent(new Event('auth:logout'));
    }
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
