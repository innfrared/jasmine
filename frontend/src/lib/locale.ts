export const SUPPORTED_LOCALES = ['en', 'am', 'ru'] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

export const isSupportedLocale = (value: string | undefined): value is Locale =>
  !!value && SUPPORTED_LOCALES.includes(value as Locale);

export const normalizeLocale = (
  value: string | string[] | undefined
): Locale => {
  const normalized = Array.isArray(value) ? value[0] : value;
  return isSupportedLocale(normalized)
    ? (normalized as Locale)
    : DEFAULT_LOCALE;
};

export const withLocale = (locale: string, path: string) => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  if (normalizedPath === '/' || normalizedPath === `/${locale}`) {
    return `/${locale}`;
  }
  return `/${locale}${normalizedPath}`;
};
