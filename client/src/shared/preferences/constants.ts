export const DEFAULT_LANGUAGE = 'en';
export const DEFAULT_CURRENCY = 'USD';

export const LANGUAGE_STORAGE_KEY = 'language';
export const LANGUAGE_COOKIE_KEY = 'language';
export const CURRENCY_STORAGE_KEY = 'currency';
export const CURRENCY_COOKIE_KEY = 'currency';
export const ACCESS_TOKEN_COOKIE_KEY = 'access_token';
export const REFRESH_TOKEN_COOKIE_KEY = 'refresh_token';

export const SUPPORTED_LANGUAGES = ['en', 'ru', 'am'] as const;
export const SUPPORTED_CURRENCIES = ['USD', 'EUR', 'RUB', 'AMD'] as const;

export type AppLanguage = (typeof SUPPORTED_LANGUAGES)[number];
export type AppCurrency = (typeof SUPPORTED_CURRENCIES)[number];

export const isSupportedLanguage = (
  language: string | null | undefined
): language is AppLanguage =>
  Boolean(language && SUPPORTED_LANGUAGES.includes(language as AppLanguage));

export const isSupportedCurrency = (
  currency: string | null | undefined
): currency is AppCurrency =>
  Boolean(currency && SUPPORTED_CURRENCIES.includes(currency as AppCurrency));
