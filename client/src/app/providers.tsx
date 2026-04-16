'use client';

import type { ReactNode } from 'react';
import { AuthProvider } from '@/context/AuthContext';
import StyledRegistry from './styled-registry';
import '@/i18n';

type ProvidersProps = {
  children: ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  return (
    <StyledRegistry>
      <AuthProvider>{children}</AuthProvider>
    </StyledRegistry>
  );
};

export default Providers;
