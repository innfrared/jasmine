export const CONSENT_COOKIE_KEY = 'cookie_consent';

/** Schema version; bump when payload shape changes. */
export const CONSENT_SCHEMA_VERSION = 1;

/** ~10 months — within plan range 6–12 months. */
export const CONSENT_MAX_AGE_SECONDS = Math.floor((300 * 24 * 60 * 60) / 1);

export type ConsentCategories = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

export type ConsentState = ConsentCategories & {
  version: number;
  updatedAt: number;
};

type StoredConsentShape = {
  v: number;
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  updatedAt: number;
};

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

const isValidStoredShape = (raw: unknown): raw is StoredConsentShape => {
  if (!isRecord(raw)) return false;
  return (
    typeof raw.v === 'number' &&
    raw.necessary === true &&
    typeof raw.analytics === 'boolean' &&
    typeof raw.marketing === 'boolean' &&
    typeof raw.updatedAt === 'number'
  );
};

export const parseConsentPayload = (
  raw: string | null
): ConsentState | null => {
  if (!raw || !raw.trim()) return null;
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!isValidStoredShape(parsed)) return null;
    if (parsed.v !== CONSENT_SCHEMA_VERSION) return null;
    return {
      version: parsed.v,
      necessary: true,
      analytics: parsed.analytics,
      marketing: parsed.marketing,
      updatedAt: parsed.updatedAt,
    };
  } catch {
    return null;
  }
};

export const serializeConsentPayload = (state: ConsentState): string => {
  const payload: StoredConsentShape = {
    v: state.version,
    necessary: true,
    analytics: state.analytics,
    marketing: state.marketing,
    updatedAt: state.updatedAt,
  };
  return JSON.stringify(payload);
};

const shouldUseSecureCookie = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.location.protocol === 'https:';
};

const buildConsentCookieString = (value: string) => {
  const parts = [
    `${CONSENT_COOKIE_KEY}=${encodeURIComponent(value)}`,
    'Path=/',
    'SameSite=Lax',
    `Max-Age=${CONSENT_MAX_AGE_SECONDS}`,
  ];
  if (shouldUseSecureCookie()) {
    parts.push('Secure');
  }
  return parts.join('; ');
};

export const readConsentCookie = (): ConsentState | null => {
  if (typeof document === 'undefined') return null;
  const prefix = `${CONSENT_COOKIE_KEY}=`;
  const match = document.cookie
    .split('; ')
    .find(cookie => cookie.startsWith(prefix));
  if (!match) return null;
  const raw = decodeURIComponent(match.slice(prefix.length));
  return parseConsentPayload(raw);
};

export const writeConsentCookie = (state: ConsentState): void => {
  if (typeof document === 'undefined') return;
  document.cookie = buildConsentCookieString(serializeConsentPayload(state));
};

/**
 * Extract a single cookie value from a raw `Cookie` header (server / middleware).
 */
export const getRawCookieValueFromHeader = (
  cookieHeader: string | null | undefined,
  name: string
): string | null => {
  if (!cookieHeader) return null;
  const parts = cookieHeader.split(';').map(p => p.trim());
  const prefix = `${name}=`;
  const found = parts.find(p => p.startsWith(prefix));
  if (!found) return null;
  return decodeURIComponent(found.slice(prefix.length));
};

export const parseConsentFromCookieHeader = (
  cookieHeader: string | null | undefined
): ConsentState | null => {
  const raw = getRawCookieValueFromHeader(cookieHeader, CONSENT_COOKIE_KEY);
  return parseConsentPayload(raw);
};

export const createConsentState = (prefs: {
  analytics: boolean;
  marketing: boolean;
}): ConsentState => ({
  version: CONSENT_SCHEMA_VERSION,
  necessary: true,
  analytics: prefs.analytics,
  marketing: prefs.marketing,
  updatedAt: Date.now(),
});
