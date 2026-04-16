import CatalogProductsPage from '@/features/catalog/pages/CatalogProductsPage';
import { getCatalogRouteClientProps } from '@/server/catalog/loadCatalogRouteData';
import {
  validateLocale,
  type LocaleRouteParams,
  type RouteSearchParams,
} from '@/app/[locale]/_route-utils/locale';

type CatalogRoutePageProps = {
  params: Promise<LocaleRouteParams>;
  searchParams: Promise<RouteSearchParams>;
};

const CatalogRoutePage = async ({
  params,
  searchParams,
}: CatalogRoutePageProps) => {
  await validateLocale(params);
  const resolvedSearchParams = await searchParams;
  const props = await getCatalogRouteClientProps(
    '/bags/top-handle',
    resolvedSearchParams
  );

  return <CatalogProductsPage {...props} />;
};

export default CatalogRoutePage;
