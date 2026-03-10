'use client';

import React, { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';
import { normalizeLocale, type Locale } from '../utils/locale';

type I18nProviderProps = {
  children: React.ReactNode;
  locale: Locale | string;
};

export default function I18nProvider({ children, locale }: I18nProviderProps) {
  const normalizedLocale = normalizeLocale(locale);

  useEffect(() => {
    if (i18n.language !== normalizedLocale) {
      i18n.changeLanguage(normalizedLocale);
    }
  }, [normalizedLocale]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
