import { ApiError } from './httpClient';

const getSessionBaseUrl = () => {
  if (typeof window !== 'undefined') return '';
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  return siteUrl.replace(/\/+$/, '');
};

const buildSessionUrl = (path: string) => {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${getSessionBaseUrl()}${normalized}`;
};

const parseResponse = async <T>(res: Response): Promise<T> => {
  if (res.status === 204) return undefined as T;
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

export const sessionFetch = async <T>(
  path: string,
  options: RequestInit = {}
) => {
  const { headers, ...rest } = options;
  const res = await fetch(buildSessionUrl(path), {
    ...rest,
    cache: options.cache ?? 'no-store',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      ...(options.body ? { 'Content-Type': 'application/json' } : {}),
      ...(headers || {}),
    },
  });

  const payload = await parseResponse<unknown>(res);

  if (!res.ok) {
    const message = buildErrorMessage(
      payload,
      res.statusText || 'Request failed'
    );
    throw new ApiError(res.status, message, payload);
  }

  return payload as T;
};
