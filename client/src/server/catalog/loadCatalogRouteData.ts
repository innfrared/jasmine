import { mapCategoryDtoToNavItem } from '@/entities/catalog/category';
import type { CategoryNavItem } from '@/entities/catalog/category';
import { mapProductDtoToListingProduct } from '@/entities/catalog/listingProduct';
import type { ListingProduct } from '@/entities/catalog/listingProduct';
import {
  findTaxonomyByIds,
  resolveCatalogTaxonomy,
} from '@/shared/catalog/resolver';
import { buildLiveCatalogQuery } from '@/shared/catalog/productQuery';
import {
  getCatalogNavKeyFromPath,
  isLiveCatalogNavKey,
  type CatalogNavKey,
} from '@/shared/config/navigation';
import type { PaginatedResponse, ProductDto } from '@/shared/contracts/api';
import {
  getServerCatalogProducts,
  getServerCategoriesWithSubcategories,
} from '@/server/django/catalog';
import {
  parseColorParam,
  parseOptionalPositiveInt,
  parsePage,
  type RouteSearchParams,
} from '@/app/[locale]/_route-utils/locale';

export const CATALOG_PRODUCTS_PAGE_SIZE = 18;

const SUBCATEGORY_SLUG_NAV_KEYS = new Set<CatalogNavKey>([
  'crossbody',
  'shoulder',
  'top-handle',
  'evening',
]);

export type CatalogRoutePayload = {
  categories: CategoryNavItem[];
  productsResponse: PaginatedResponse<ProductDto>;
  page: number;
  navKey: CatalogNavKey | null;
  colorFilters: string[];
};

function emptyProducts(
  page: number,
  pageSize: number
): PaginatedResponse<ProductDto> {
  return {
    items: [],
    total: 0,
    page,
    page_size: pageSize,
    total_pages: 0,
    has_next: false,
    has_previous: false,
  };
}

export type LoadCatalogRouteDataInput = {
  pathname: string;
  page: number;
  colorFilters: string[];
  legacyCategoryId?: number | null;
  legacySubcategoryId?: number | null;
};

export async function loadCatalogRouteData(
  input: LoadCatalogRouteDataInput
): Promise<CatalogRoutePayload> {
  const {
    pathname,
    page,
    colorFilters,
    legacyCategoryId,
    legacySubcategoryId,
  } = input;

  const categoryDtos = await getServerCategoriesWithSubcategories(undefined, {
    revalidate: 600,
    tags: ['catalog', 'catalog:categories'],
  });
  const categories = categoryDtos.map(mapCategoryDtoToNavItem);

  const navKey = getCatalogNavKeyFromPath(pathname);

  let categoryId: number | null | undefined;
  let subcategoryId: number | null | undefined;
  let subcategorySlug: string | null = null;

  if (navKey && isLiveCatalogNavKey(navKey)) {
    const taxonomy = resolveCatalogTaxonomy(categories, navKey);

    if (taxonomy.status === 'resolved') {
      categoryId = taxonomy.categoryId;
      subcategoryId = taxonomy.subcategoryId;
    } else if (
      taxonomy.categoryId !== undefined &&
      SUBCATEGORY_SLUG_NAV_KEYS.has(navKey)
    ) {
      categoryId = taxonomy.categoryId;
      subcategorySlug = navKey;
    } else {
      return {
        categories,
        productsResponse: emptyProducts(page, CATALOG_PRODUCTS_PAGE_SIZE),
        page,
        navKey,
        colorFilters,
      };
    }
  } else if (legacyCategoryId || legacySubcategoryId) {
    const fallback = findTaxonomyByIds(categories, {
      categoryId: legacyCategoryId ?? null,
      subcategoryId: legacySubcategoryId ?? null,
    });
    categoryId = fallback.category?.id;
    subcategoryId = fallback.subcategory?.id;
  } else if (!navKey) {
    const query = buildLiveCatalogQuery({
      page,
      pageSize: CATALOG_PRODUCTS_PAGE_SIZE,
      categoryId: null,
      subcategoryId: null,
      subcategorySlug: null,
      colorFilters,
      sortByNewest: false,
    });
    const productsResponse = await getServerCatalogProducts(query, {
      revalidate: 180,
      tags: ['catalog', 'catalog:products'],
    });
    return {
      categories,
      productsResponse,
      page,
      navKey: null,
      colorFilters,
    };
  } else {
    return {
      categories,
      productsResponse: emptyProducts(page, CATALOG_PRODUCTS_PAGE_SIZE),
      page,
      navKey,
      colorFilters,
    };
  }

  const applyNewestSort = navKey === 'new';

  const query = buildLiveCatalogQuery({
    page,
    pageSize: CATALOG_PRODUCTS_PAGE_SIZE,
    categoryId: categoryId ?? null,
    subcategoryId: subcategoryId ?? null,
    subcategorySlug,
    colorFilters,
    sortByNewest: applyNewestSort,
  });

  const productsResponse = await getServerCatalogProducts(query, {
    revalidate: 180,
    tags: [
      'catalog',
      'catalog:products',
      navKey ? `catalog:${navKey}` : 'catalog:legacy',
    ],
  });

  return {
    categories,
    productsResponse,
    page,
    navKey,
    colorFilters,
  };
}

export type CatalogRouteClientProps = {
  categories: CategoryNavItem[];
  initialProducts: ListingProduct[];
  page: number;
  totalPages: number;
  colorFiltersFromUrl: string[];
};

export async function getCatalogRouteClientProps(
  pathname: string,
  searchParams: RouteSearchParams
): Promise<CatalogRouteClientProps> {
  const page = parsePage(searchParams.page);
  const colorFilters = parseColorParam(searchParams.color);
  const legacyCategoryId = parseOptionalPositiveInt(searchParams.category_id);
  const legacySubcategoryId = parseOptionalPositiveInt(
    searchParams.subcategory_id
  );

  const data = await loadCatalogRouteData({
    pathname,
    page,
    colorFilters,
    legacyCategoryId,
    legacySubcategoryId,
  });

  const initialProducts = data.productsResponse.items.map(
    mapProductDtoToListingProduct
  );

  const totalPages =
    data.productsResponse.total_pages ||
    Math.max(
      1,
      Math.ceil(
        (data.productsResponse.total || initialProducts.length) /
          CATALOG_PRODUCTS_PAGE_SIZE
      )
    );

  return {
    categories: data.categories,
    initialProducts,
    page: data.page,
    totalPages,
    colorFiltersFromUrl: data.colorFilters,
  };
}
