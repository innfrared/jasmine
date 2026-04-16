'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import Header from '@/shared/layout/header/Header';
import ProductListingGrid from '@/features/catalog/components/productListingGrid';
import {
  CatalogFilterDrawer,
  CatalogFilterToolbar,
} from '@/features/catalog/components/catalogFilters';
import type { CatalogFilterKey } from '@/features/catalog/components/catalogFilters';
import { useCategories } from '@/features/catalog/hooks/useCategories';
import { useCatalogProductsScreenModel } from '../hooks/useCatalogProductsScreenModel';
import type { CategoryNavItem } from '../../../entities/catalog/category';
import {
  findTaxonomyByIds,
  resolveCatalogNavKeyFromIds,
  resolveCatalogTaxonomy,
} from '@/shared/catalog/resolver';
import {
  getCatalogNavKeyFromLocation,
  getCatalogPathForNavKey,
  getCatalogSectionNavKey,
  getHeaderNavItemByKey,
  getLegacyCatalogRedirectPath,
  isLiveCatalogNavKey,
  resolveCatalogPathFromTaxonomy,
} from '@/shared/config/navigation';
import {
  stripLocaleFromPath,
  useLocalizedRouting,
} from '@/shared/routing/localeRouting';
import {
  ControlsContainer,
  EmptyMessage,
  ErrorMessage,
  LoadingMessage,
  MainContent,
  PageButton,
  PaginationButton,
  PaginationContainer,
  ProductsContent,
  ProductsHeader,
  ProductsPageContainer,
  ProductsSubtitle,
  ProductsToolbarSentinel,
  ProductsTitle,
  SubcategoriesContainer,
  SubcategoriesGrid,
  SubcategoriesTitle,
  SubcategoryCard,
} from './CatalogProductsPage.styles';

const PRODUCTS_PAGE_SIZE = 18;
const FILTER_DRAWER_CLOSE_DELAY_MS = 300;
const SUBCATEGORY_ROUTE_SLUGS: ReadonlySet<string> = new Set([
  'crossbody',
  'shoulder',
  'top-handle',
  'evening',
]);

function createEmptyFilters(): Record<string, string[]> {
  return {
    color: [],
    size: [],
  };
}

function cloneFilters(filters: Record<string, string[]>) {
  return Object.fromEntries(
    Object.entries(filters).map(([key, values]) => [key, [...values]])
  );
}

function countActiveFilters(filters: Record<string, string[]>) {
  return Object.values(filters).reduce(
    (count, values) => count + values.length,
    0
  );
}

function parseNumericQueryParam(value: string | null) {
  if (!value) {
    return null;
  }

  const parsedValue = Number(value);

  return Number.isFinite(parsedValue) && parsedValue > 0 ? parsedValue : null;
}

function buildFallbackSubcategoryPath(
  categoryId: number | null,
  subcategoryId: number,
  parentCategoryId?: number | null
) {
  const resolvedCategoryId = categoryId ?? parentCategoryId ?? null;

  if (!resolvedCategoryId) {
    return '/products';
  }

  return `/products?category_id=${resolvedCategoryId}&subcategory_id=${subcategoryId}`;
}

function CatalogProductsPage() {
  const { t } = useTranslation<'translation'>();
  const router = useRouter();
  const {
    categories,
    loading: categoriesLoading,
    error: categoriesError,
  } = useCategories();
  const { pathname, search, getLocalizedPath, navigateLocalized } =
    useLocalizedRouting();
  const searchParams = useMemo(() => new URLSearchParams(search), [search]);
  const strippedPathname = stripLocaleFromPath(pathname);
  const legacyRedirectPath = getLegacyCatalogRedirectPath(
    strippedPathname,
    search
  );
  const activeNavKey = getCatalogNavKeyFromLocation(
    strippedPathname,
    search
  );
  const liveActiveNavKey = isLiveCatalogNavKey(activeNavKey)
    ? activeNavKey
    : null;

  const [filters, setFilters] = useState<Record<string, string[]>>({
    color: [],
    size: [],
  });
  const [draftFilters, setDraftFilters] =
    useState<Record<string, string[]>>(createEmptyFilters);
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const [isFilterDrawerClosing, setIsFilterDrawerClosing] = useState(false);
  const [isToolbarStuck, setIsToolbarStuck] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const filterToolbarSentinelRef = useRef<HTMLDivElement>(null);
  const filterDrawerCloseTimeoutRef = useRef<number | null>(null);

  const fallbackCategoryId = parseNumericQueryParam(
    searchParams.get('category_id')
  );
  const fallbackSubcategoryId = parseNumericQueryParam(
    searchParams.get('subcategory_id')
  );
  const hasLegacyTaxonomyQuery =
    fallbackCategoryId !== null || fallbackSubcategoryId !== null;

  const resolvedNavigation = useMemo(
    () => resolveCatalogTaxonomy(categories, liveActiveNavKey),
    [categories, liveActiveNavKey]
  );

  const fallbackTaxonomy = useMemo(
    () =>
      findTaxonomyByIds(categories, {
        categoryId: fallbackCategoryId,
        subcategoryId: fallbackSubcategoryId,
      }),
    [categories, fallbackCategoryId, fallbackSubcategoryId]
  );

  const reverseMappedLegacyNavKey = useMemo(() => {
    if (!hasLegacyTaxonomyQuery || categoriesLoading || categoriesError) {
      return null;
    }

    return resolveCatalogNavKeyFromIds(categories, {
      categoryId: fallbackCategoryId,
      subcategoryId: fallbackSubcategoryId,
    });
  }, [
    categories,
    categoriesError,
    categoriesLoading,
    fallbackCategoryId,
    fallbackSubcategoryId,
    hasLegacyTaxonomyQuery,
  ]);

  const legacyCanonicalPath =
    reverseMappedLegacyNavKey && isLiveCatalogNavKey(reverseMappedLegacyNavKey)
      ? getCatalogPathForNavKey(reverseMappedLegacyNavKey)
      : null;
  const hasSubtypeSlugFallback = Boolean(
    liveActiveNavKey && SUBCATEGORY_ROUTE_SLUGS.has(liveActiveNavKey)
  );

  const shouldWaitForTaxonomy =
    categoriesLoading &&
    (hasLegacyTaxonomyQuery || (Boolean(liveActiveNavKey) && !hasSubtypeSlugFallback));
  const shouldFetchProducts =
    !shouldWaitForTaxonomy &&
    (!liveActiveNavKey ||
      resolvedNavigation.status === 'resolved' ||
      hasSubtypeSlugFallback) &&
    !(Boolean(liveActiveNavKey) && categoriesError);

  const categoryData =
    resolvedNavigation.category ?? fallbackTaxonomy.category ?? undefined;
  const subcategoryData =
    resolvedNavigation.subcategory ?? fallbackTaxonomy.subcategory ?? undefined;
  const categoryId = liveActiveNavKey
    ? resolvedNavigation.categoryId
    : (categoryData?.id ?? fallbackCategoryId ?? undefined);
  const subcategoryId = liveActiveNavKey
    ? resolvedNavigation.subcategoryId
    : (subcategoryData?.id ?? fallbackSubcategoryId ?? undefined);
  const subcategorySlug =
    liveActiveNavKey && hasSubtypeSlugFallback && resolvedNavigation.status !== 'resolved'
      ? liveActiveNavKey
      : null;

  const catalogSectionNavKey = getCatalogSectionNavKey(liveActiveNavKey);
  const catalogSectionItem = catalogSectionNavKey
    ? getHeaderNavItemByKey(catalogSectionNavKey)
    : undefined;
  const activeCatalogItem = liveActiveNavKey
    ? getHeaderNavItemByKey(liveActiveNavKey)
    : undefined;

  const {
    products,
    loading,
    error,
    totalPages,
    availableColors,
    availableSizes,
    colorPaletteMap,
  } = useCatalogProductsScreenModel({
    filters,
    page: currentPage,
    limit: PRODUCTS_PAGE_SIZE,
    categoryId,
    subcategoryId,
    subcategorySlug,
    enabled: shouldFetchProducts,
    applyNewestSort: liveActiveNavKey === 'new',
    navKey: liveActiveNavKey,
  });

  const categoryLabel = catalogSectionItem
    ? t(catalogSectionItem.labelKey)
    : categoryData?.name;
  const subcategoryLabel =
    activeCatalogItem &&
    catalogSectionNavKey &&
    liveActiveNavKey !== catalogSectionNavKey
      ? t(activeCatalogItem.labelKey)
      : subcategoryData?.name;

  const subcategories = useMemo(() => {
    if (liveActiveNavKey === 'all-bags') {
      return resolvedNavigation.category?.subcategories ?? [];
    }

    if (!liveActiveNavKey && categoryData && !subcategoryId) {
      return categoryData.subcategories || [];
    }

    return [];
  }, [
    categoryData,
    liveActiveNavKey,
    resolvedNavigation.category,
    subcategoryId,
  ]);

  const productsTitle = activeCatalogItem?.labelKey
    ? t(activeCatalogItem.labelKey)
    : subcategoryLabel || categoryLabel || t('productsPage.allProducts');
  const productsSubtitle = subcategoryData?.description?.trim() || null;
  const activeFilterCount = useMemo(
    () => countActiveFilters(filters),
    [filters]
  );

  const displayError =
    !shouldWaitForTaxonomy &&
    liveActiveNavKey &&
    resolvedNavigation.status !== 'resolved' &&
    !hasSubtypeSlugFallback
      ? t('productsPage.empty')
      : error;

  useEffect(() => {
    if (typeof window === 'undefined' || !window.PerformanceObserver) {
      return undefined;
    }

    const observer = new window.PerformanceObserver(entryList => {
      const entries = entryList.getEntries();
      const latestEntry = entries[entries.length - 1];

      if (!latestEntry) {
        return;
      }

      window.dispatchEvent(
        new window.CustomEvent('catalog:lcp-metric', {
          detail: { value: latestEntry.startTime, route: 'products' },
        })
      );
    });

    observer.observe({ type: 'largest-contentful-paint', buffered: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [categoryId, liveActiveNavKey, subcategoryId]);

  useEffect(() => {
    const sentinel = filterToolbarSentinelRef.current;

    if (!sentinel || !window.IntersectionObserver) {
      return undefined;
    }

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setIsToolbarStuck(!entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '-112px 0px 0px 0px',
        threshold: 0,
      }
    );

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(
    () => () => {
      if (filterDrawerCloseTimeoutRef.current !== null) {
        window.clearTimeout(filterDrawerCloseTimeoutRef.current);
      }
    },
    []
  );

  function openFilterDrawer() {
    if (filterDrawerCloseTimeoutRef.current !== null) {
      window.clearTimeout(filterDrawerCloseTimeoutRef.current);
      filterDrawerCloseTimeoutRef.current = null;
    }

    setDraftFilters(cloneFilters(filters));
    setIsFilterDrawerClosing(false);
    setIsFilterDrawerOpen(true);
  }

  function closeFilterDrawer() {
    if (!isFilterDrawerOpen || isFilterDrawerClosing) {
      return;
    }

    setIsFilterDrawerClosing(true);
    filterDrawerCloseTimeoutRef.current = window.setTimeout(() => {
      setIsFilterDrawerOpen(false);
      setIsFilterDrawerClosing(false);
      filterDrawerCloseTimeoutRef.current = null;
    }, FILTER_DRAWER_CLOSE_DELAY_MS);
  }

  function handleDraftFilterChange(
    filterType: CatalogFilterKey,
    value: string
  ) {
    setDraftFilters(previousFilters => {
      const currentValues = previousFilters[filterType] || [];
      const nextValues = currentValues.includes(value)
        ? currentValues.filter(currentValue => currentValue !== value)
        : [...currentValues, value];

      return {
        ...previousFilters,
        [filterType]: nextValues,
      };
    });
  }

  function handleApplyFilters() {
    setFilters(cloneFilters(draftFilters));
    setCurrentPage(1);
    closeFilterDrawer();
  }

  function handleClearFilters() {
    const emptyFilters = createEmptyFilters();
    setDraftFilters(emptyFilters);
    setFilters(emptyFilters);
    setCurrentPage(1);
  }

  function getSubcategoryPath(subcategory: CategoryNavItem) {
    return (
      resolveCatalogPathFromTaxonomy({
        categoryName: categoryData?.name,
        categorySlug: categoryData?.url,
        subcategoryName: subcategory.name,
        subcategorySlug: subcategory.url,
      }) ??
      buildFallbackSubcategoryPath(
        categoryId ?? null,
        subcategory.id,
        subcategory.parent_id
      )
    );
  }

  function handleSubcategoryClick(path: string) {
    navigateLocalized(path);
  }

  function handlePageClick(page: number) {
    if (page < 1 || page > totalPages) {
      return;
    }

    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function renderPagination() {
    if (totalPages <= 1) {
      return null;
    }

    const pages: Array<number | 'ellipsis'> = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let page = 1; page <= totalPages; page += 1) {
        pages.push(page);
      }
    } else if (currentPage <= 3) {
      pages.push(1, 2, 3, 4, 'ellipsis', totalPages);
    } else if (currentPage >= totalPages - 2) {
      pages.push(
        1,
        'ellipsis',
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages
      );
    } else {
      pages.push(
        1,
        'ellipsis',
        currentPage - 1,
        currentPage,
        currentPage + 1,
        'ellipsis',
        totalPages
      );
    }

    return (
      <PaginationContainer>
        <PaginationButton
          onClick={() => handlePageClick(1)}
          disabled={currentPage === 1}
          aria-label="First page"
        >
          ⏮
        </PaginationButton>
        <PaginationButton
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Previous page"
        >
          ◀
        </PaginationButton>

        {pages.map((page, index) =>
          page === 'ellipsis' ? (
            <PageButton key={`ellipsis-${index}`} disabled>
              ...
            </PageButton>
          ) : (
            <PageButton
              key={page}
              onClick={() => handlePageClick(page)}
              $isActive={currentPage === page}
            >
              {page}
            </PageButton>
          )
        )}

        <PaginationButton
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Next page"
        >
          ▶
        </PaginationButton>
        <PaginationButton
          onClick={() => handlePageClick(totalPages)}
          disabled={currentPage === totalPages}
          aria-label="Last page"
        >
          ⏭
        </PaginationButton>
      </PaginationContainer>
    );
  }

  useEffect(() => {
    if (legacyRedirectPath) {
      router.replace(getLocalizedPath(legacyRedirectPath), { scroll: false });
    }
  }, [getLocalizedPath, legacyRedirectPath, router]);

  useEffect(() => {
    if (legacyCanonicalPath) {
      router.replace(getLocalizedPath(legacyCanonicalPath), { scroll: false });
    }
  }, [getLocalizedPath, legacyCanonicalPath, router]);

  if (legacyRedirectPath || legacyCanonicalPath) {
    return null;
  }

  return (
    <ProductsPageContainer>
      <Header primaryColor="#CC0C5C" secondaryColor="#F2A800" />
      <ProductsContent>
        <ProductsHeader>
          <ProductsTitle>{productsTitle}</ProductsTitle>
          {productsSubtitle ? (
            <ProductsSubtitle>{productsSubtitle}</ProductsSubtitle>
          ) : null}
        </ProductsHeader>

        <ProductsToolbarSentinel ref={filterToolbarSentinelRef} />
        <CatalogFilterToolbar
          label={t('productsPage.filters')}
          onOpenFilters={openFilterDrawer}
          isStickyActive={isToolbarStuck}
          currentTitle={productsTitle}
          activeFilterCount={activeFilterCount}
        />

        {subcategories.length > 0 && !subcategoryId ? (
          <SubcategoriesContainer>
            <SubcategoriesTitle>
              {t('productsPage.shopBySubcategory')}
            </SubcategoriesTitle>
            <SubcategoriesGrid>
              {subcategories.map(subcategory => {
                const subcategoryPathValue = getSubcategoryPath(subcategory);

                return (
                  <SubcategoryCard
                    key={subcategory.id}
                    onClick={event => {
                      event.preventDefault();
                      handleSubcategoryClick(subcategoryPathValue);
                    }}
                    href={getLocalizedPath(subcategoryPathValue)}
                  >
                    {subcategory.name}
                  </SubcategoryCard>
                );
              })}
            </SubcategoriesGrid>
          </SubcategoriesContainer>
        ) : null}

        <ControlsContainer>
          <MainContent>
            {shouldWaitForTaxonomy || loading ? (
              <LoadingMessage>{t('productsPage.loading')}</LoadingMessage>
            ) : displayError ? (
              <ErrorMessage>{displayError}</ErrorMessage>
            ) : products.length === 0 ? (
              <EmptyMessage>{t('productsPage.empty')}</EmptyMessage>
            ) : (
              <>
                <ProductListingGrid products={products} />
                {renderPagination()}
              </>
            )}
          </MainContent>
        </ControlsContainer>
      </ProductsContent>
      <CatalogFilterDrawer
        isOpen={isFilterDrawerOpen}
        isClosing={isFilterDrawerClosing}
        filters={draftFilters}
        availableColors={availableColors}
        availableSizes={availableSizes}
        colorPaletteMap={colorPaletteMap}
        onChangeDraftFilter={handleDraftFilterChange}
        onApply={handleApplyFilters}
        onClear={handleClearFilters}
        onClose={closeFilterDrawer}
      />
    </ProductsPageContainer>
  );
}

export default CatalogProductsPage;
