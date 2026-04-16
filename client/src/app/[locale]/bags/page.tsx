import CatalogProductsRouteClient from '@/app/[locale]/_catalog/CatalogProductsRouteClient';
import { renderCatalogPage } from '@/app/[locale]/_catalog/renderCatalogPage';
import {
  parsePage,
  validateLocale,
  type LocaleRouteParams,
  type RouteSearchParams,
} from '@/app/[locale]/_route-utils/locale';

type CatalogRoutePageProps = {
  params: Promise<LocaleRouteParams>;
  searchParams: Promise<RouteSearchParams>;
};

const CatalogRoutePage = async ({ params, searchParams }: CatalogRoutePageProps) => {
  await validateLocale(params);
  const resolvedSearchParams = await searchParams;
  const bootstrapPayload = await renderCatalogPage({
    path: '/bags',
    page: parsePage(resolvedSearchParams.page),
  });

  return <CatalogProductsRouteClient bootstrapPayload={bootstrapPayload} />;
};

export default CatalogRoutePage;
