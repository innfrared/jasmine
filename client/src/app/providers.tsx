'use client';

import type { ReactNode } from 'react';
import { AuthProvider } from '@/context/AuthContext';
import { CookieBanner, CookieConsentProvider } from '@/shared/consent';
import StyledRegistry from './styled-registry';
import '@/i18n';

type ProvidersProps = {
  children: ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  return (
    <StyledRegistry>
      <CookieConsentProvider>
        <AuthProvider>
          {children}
          <CookieBanner />
        </AuthProvider>
      </CookieConsentProvider>
    </StyledRegistry>
  );
};

export default Providers;
