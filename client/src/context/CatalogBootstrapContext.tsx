'use client';

import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import type { CatalogBootstrapPayload } from '@/shared/catalog/bootstrap';

const CatalogBootstrapContext = createContext<CatalogBootstrapPayload | null>(
  null
);

type CatalogBootstrapProviderProps = {
  value: CatalogBootstrapPayload | null;
  children: ReactNode;
};

export function CatalogBootstrapProvider({
  value,
  children,
}: CatalogBootstrapProviderProps) {
  return (
    <CatalogBootstrapContext.Provider value={value}>
      {children}
    </CatalogBootstrapContext.Provider>
  );
}

export function useCatalogBootstrap() {
  return useContext(CatalogBootstrapContext);
}
