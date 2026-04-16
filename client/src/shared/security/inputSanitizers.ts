const HEX_COLOR_PATTERN =
  /^#(?:[0-9a-f]{3}|[0-9a-f]{4}|[0-9a-f]{6}|[0-9a-f]{8})$/i;
const RGB_COLOR_PATTERN =
  /^rgba?\(\s*(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\s*,\s*(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\s*,\s*(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])(?:\s*,\s*(?:0|1|0?\.\d+))?\s*\)$/i;
const HSL_COLOR_PATTERN =
  /^hsla?\(\s*(?:\d|[1-2]\d{1,2}|3[0-5]\d|360)\s*,\s*(?:\d|[1-9]\d|100)%\s*,\s*(?:\d|[1-9]\d|100)%(?:\s*,\s*(?:0|1|0?\.\d+))?\s*\)$/i;
const DISALLOWED_CSS_COLOR_TOKENS = /url\(|var\(|expression\(|;|\/\*/i;

const ABSOLUTE_HTTP_PATTERN = /^https?:\/\//i;
// eslint-disable-next-line no-control-regex -- strip ASCII controls from URL strings
const DISALLOWED_URL_CHARS = /[\u0000-\u001f\u007f]/;

export const sanitizeCssColor = (
  value: string | null | undefined,
  fallback = '#d8d2c8'
) => {
  if (!value) {
    return fallback;
  }

  const normalized = value.trim();

  if (!normalized || DISALLOWED_CSS_COLOR_TOKENS.test(normalized)) {
    return fallback;
  }

  if (
    HEX_COLOR_PATTERN.test(normalized) ||
    RGB_COLOR_PATTERN.test(normalized) ||
    HSL_COLOR_PATTERN.test(normalized)
  ) {
    return normalized;
  }

  return fallback;
};

const normalizeAllowedHosts = (value: string | undefined) =>
  (value ?? '')
    .split(',')
    .map(host => host.trim().toLowerCase())
    .filter(Boolean);

const DEFAULT_TRUSTED_MEDIA_HOST_SUFFIXES = ['supabase.co'] as const;

const readAllowedMediaHosts = () => {
  const runtimeEnv =
    (globalThis as { process?: { env?: Record<string, string | undefined> } })
      .process?.env ?? {};

  const fromEnv = normalizeAllowedHosts(
    runtimeEnv.NEXT_PUBLIC_MEDIA_ALLOWED_HOSTS
  );
  const defaults = DEFAULT_TRUSTED_MEDIA_HOST_SUFFIXES.map(h =>
    h.toLowerCase()
  );
  return Array.from(new Set([...fromEnv, ...defaults]));
};

export const isAllowedMediaUrl = (
  value: string,
  trustedBaseUrl?: string
): boolean => {
  if (!value || DISALLOWED_URL_CHARS.test(value)) {
    return false;
  }

  if (!ABSOLUTE_HTTP_PATTERN.test(value)) {
    return true;
  }

  try {
    const parsed = new URL(value);
    const allowedHosts = readAllowedMediaHosts();

    if (trustedBaseUrl) {
      const trustedHost = new URL(trustedBaseUrl).host.toLowerCase();
      allowedHosts.push(trustedHost);
    }

    const host = parsed.host.toLowerCase();
    return (
      allowedHosts.length === 0 ||
      allowedHosts.some(
        allowedHost => host === allowedHost || host.endsWith(`.${allowedHost}`)
      )
    );
  } catch {
    return false;
  }
};
