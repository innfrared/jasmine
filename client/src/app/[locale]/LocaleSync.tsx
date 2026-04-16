'use client';

import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import i18n from '@/i18n';
import { LANGUAGE_STORAGE_KEY, isSupportedLanguage } from '@/i18n';

const LocaleSync = () => {
  const { locale } = useParams<{ locale?: string }>();

  useEffect(() => {
    if (!isSupportedLanguage(locale)) {
      return;
    }

    localStorage.setItem(LANGUAGE_STORAGE_KEY, locale);
    document.documentElement.lang = locale;

    if (i18n.resolvedLanguage !== locale) {
      void i18n.changeLanguage(locale);
    }
  }, [locale]);

  return null;
};

export default LocaleSync;
