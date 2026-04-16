import { mapCategoryDtoToNavItem } from '@/entities/catalog/category';
import { resolveCatalogTaxonomy } from '@/shared/catalog/resolver';
import {
  getCatalogNavKeyFromPath,
  isLiveCatalogNavKey,
  type CatalogNavKey,
} from '@/shared/config/navigation';
import type { CatalogBootstrapPayload } from '@/shared/catalog/bootstrap';
import {
  getServerCatalogProducts,
  getServerCategoriesWithSubcategories,
} from '@/server/django/catalog';
import { buildLiveCatalogQuery } from '@/service/productService';

const runtimeEnv =
  (globalThis as { process?: { env?: Record<string, string | undefined> } })
    .process?.env ?? {};

const CATALOG_PREFETCH_ENABLED =
  runtimeEnv.NEXT_PUBLIC_ENABLE_CATALOG_BOOTSTRAP !== '0';
const BOOTSTRAP_ROUTE_SCOPE =
  runtimeEnv.NEXT_PUBLIC_CATALOG_BOOTSTRAP_SCOPE ?? 'crossbody';

type RenderCatalogPageOptions = {
  path: string;
  page: number;
};

async function resolveCatalogBootstrap(
  navKey: CatalogNavKey,
  page: number
): Promise<CatalogBootstrapPayload | null> {
  try {
    const categoryDtos = await getServerCategoriesWithSubcategories(undefined, {
      revalidate: 600,
      tags: ['catalog', 'catalog:categories'],
    });
    const categories = categoryDtos.map(mapCategoryDtoToNavItem);
    const taxonomy = resolveCatalogTaxonomy(categories, navKey);

    if (taxonomy.status !== 'resolved') {
      return null;
    }

    const productsResponse = await getServerCatalogProducts(
      buildLiveCatalogQuery({
        page,
        pageSize: 18,
        categoryId: taxonomy.categoryId ?? null,
        subcategoryId: taxonomy.subcategoryId ?? null,
      }),
      {
        revalidate: 180,
        tags: ['catalog', `catalog:${navKey}`],
      }
    );

    return {
      navKey,
      page,
      categoryId: taxonomy.categoryId,
      subcategoryId: taxonomy.subcategoryId,
      categories,
      productsResponse,
      generatedAt: new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

export async function renderCatalogPage({
  path,
  page,
}: RenderCatalogPageOptions) {
  const navKey = getCatalogNavKeyFromPath(path);
  const isRouteEnabled =
    BOOTSTRAP_ROUTE_SCOPE === 'all' ||
    (BOOTSTRAP_ROUTE_SCOPE === 'crossbody' && navKey === 'crossbody');
  const catalogBootstrap =
    CATALOG_PREFETCH_ENABLED && isRouteEnabled && isLiveCatalogNavKey(navKey)
      ? await resolveCatalogBootstrap(navKey, page)
      : null;

  return catalogBootstrap;
}
