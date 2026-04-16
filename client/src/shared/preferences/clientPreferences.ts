import {
  type AppCurrency,
  type AppLanguage,
  CURRENCY_COOKIE_KEY,
  CURRENCY_STORAGE_KEY,
  DEFAULT_CURRENCY,
  DEFAULT_LANGUAGE,
  LANGUAGE_COOKIE_KEY,
  LANGUAGE_STORAGE_KEY,
  isSupportedCurrency,
  isSupportedLanguage,
} from './constants';
import { getCookieValue, setCookieValue } from './cookies';

export const resolveStoredLanguage = (): AppLanguage => {
  if (typeof window === 'undefined') {
    return DEFAULT_LANGUAGE;
  }

  const storedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (isSupportedLanguage(storedLanguage)) {
    return storedLanguage;
  }

  const cookieLanguage = getCookieValue(LANGUAGE_COOKIE_KEY);
  if (isSupportedLanguage(cookieLanguage)) {
    return cookieLanguage;
  }

  const browserLanguage = window.navigator.language.split('-')[0];
  if (isSupportedLanguage(browserLanguage)) {
    return browserLanguage;
  }

  return DEFAULT_LANGUAGE;
};

export const persistLanguagePreference = (language: AppLanguage) => {
  localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  setCookieValue(LANGUAGE_COOKIE_KEY, language);
};

export const resolveStoredCurrency = (): AppCurrency => {
  if (typeof window === 'undefined') {
    return DEFAULT_CURRENCY;
  }

  const storedCurrency = localStorage.getItem(CURRENCY_STORAGE_KEY);
  if (isSupportedCurrency(storedCurrency)) {
    return storedCurrency;
  }

  const cookieCurrency = getCookieValue(CURRENCY_COOKIE_KEY);
  if (isSupportedCurrency(cookieCurrency)) {
    return cookieCurrency;
  }

  return DEFAULT_CURRENCY;
};

export const persistCurrencyPreference = (currency: AppCurrency) => {
  localStorage.setItem(CURRENCY_STORAGE_KEY, currency);
  setCookieValue(CURRENCY_COOKIE_KEY, currency);
  window.dispatchEvent(new Event('currencyUpdated'));
};
