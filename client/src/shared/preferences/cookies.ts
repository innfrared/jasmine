type CookieAttributes = {
  maxAge?: number;
  path?: string;
  sameSite?: 'lax' | 'strict' | 'none';
};

const DEFAULT_COOKIE_PATH = '/';
const DEFAULT_SAME_SITE = 'lax';

const buildCookieString = (
  name: string,
  value: string,
  attributes: CookieAttributes = {}
) => {
  const parts = [`${name}=${encodeURIComponent(value)}`];

  parts.push(`Path=${attributes.path || DEFAULT_COOKIE_PATH}`);
  parts.push(`SameSite=${attributes.sameSite || DEFAULT_SAME_SITE}`);

  if (attributes.maxAge !== undefined) {
    parts.push(`Max-Age=${attributes.maxAge}`);
  }

  return parts.join('; ');
};

export const getCookieValue = (cookieName: string) => {
  if (typeof document === 'undefined') {
    return null;
  }

  const prefix = `${cookieName}=`;
  const match = document.cookie
    .split('; ')
    .find(cookie => cookie.startsWith(prefix));

  if (!match) {
    return null;
  }

  return decodeURIComponent(match.slice(prefix.length));
};

export const setCookieValue = (
  cookieName: string,
  value: string,
  attributes?: CookieAttributes
) => {
  if (typeof document === 'undefined') {
    return;
  }

  document.cookie = buildCookieString(cookieName, value, attributes);
};

export const clearCookieValue = (cookieName: string) => {
  setCookieValue(cookieName, '', { maxAge: 0 });
};
