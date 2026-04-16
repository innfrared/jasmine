'use client';

import { CatalogBootstrapProvider } from '@/context/CatalogBootstrapContext';
import type { CatalogBootstrapPayload } from '@/shared/catalog/bootstrap';
import CatalogProductsPage from '@/features/catalog/pages/CatalogProductsPage';

type CatalogProductsRouteClientProps = {
  bootstrapPayload: CatalogBootstrapPayload | null;
};

const CatalogProductsRouteClient = ({
  bootstrapPayload,
}: CatalogProductsRouteClientProps) => {
  return (
    <CatalogBootstrapProvider value={bootstrapPayload}>
      <CatalogProductsPage />
    </CatalogBootstrapProvider>
  );
};

export default CatalogProductsRouteClient;
