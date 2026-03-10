'use client';

import React from 'react';
import I18nProvider from './I18nProvider';

type AppProvidersProps = {
  children: React.ReactNode;
  locale: string;
};

export default function AppProviders({ children, locale }: AppProvidersProps) {
  return (
    <I18nProvider locale={locale}>
      {children}
    </I18nProvider>
  );
}
