import { useEffect, useMemo, useState } from 'react';
import type { Product } from '../../../entities/catalog/product';
import { mapProductDtoToCatalogProduct } from '../../../entities/catalog/product';
import {
  buildLiveCatalogQuery,
  listProducts,
} from '../../../service/productService';
import type { PaginatedResponse, ProductDto } from '../../../service/types';
import { useCatalogBootstrap } from '../../../context/CatalogBootstrapContext';

type ProductFilters = Record<string, string[]>;

type UseProductsScreenModelParams = {
  filters?: ProductFilters;
  page?: number;
  limit?: number;
  categoryId?: number | null;
  subcategoryId?: number | null;
  subcategorySlug?: string | null;
  enabled?: boolean;
  applyNewestSort?: boolean;
  navKey?: string | null;
};

type CatalogFetchMetric = {
  query: Record<string, number | string | undefined>;
  durationMs: number;
  payloadBytes: number;
  source: 'bootstrap' | 'network';
};

const PERFORMANCE_METRIC_EVENT = 'catalog:products-metric';

function emitCatalogMetric(metric: CatalogFetchMetric) {
  if (typeof window === 'undefined') {
    return;
  }

  window.dispatchEvent(
    new window.CustomEvent<CatalogFetchMetric>(PERFORMANCE_METRIC_EVENT, {
      detail: metric,
    })
  );
}

function sortNewestFirst(products: Product[], applyNewestSort: boolean) {
  if (!applyNewestSort) {
    return products;
  }

  return [...products].sort((leftProduct, rightProduct) => {
    if (!leftProduct.created_at || !rightProduct.created_at) {
      return 0;
    }

    return (
      new Date(rightProduct.created_at).getTime() -
      new Date(leftProduct.created_at).getTime()
    );
  });
}

function filterProducts(products: Product[], filters?: ProductFilters) {
  if (!filters?.color || filters.color.length === 0) {
    return products;
  }

  return products.filter(product => {
    if (
      product.variant_color_palette &&
      filters.color.includes(product.variant_color_palette)
    ) {
      return true;
    }

    return (
      product.variants?.some(
        variant =>
          Boolean(variant.color_palette) &&
          filters.color.includes(variant.color_palette)
      ) ?? false
    );
  });
}

export function useCatalogProductsScreenModel({
  filters,
  page = 1,
  limit = 20,
  categoryId,
  subcategoryId,
  subcategorySlug,
  enabled = true,
  applyNewestSort = false,
  navKey = null,
}: UseProductsScreenModelParams) {
  const bootstrapPayload = useCatalogBootstrap();
  const hasMatchingBootstrap =
    bootstrapPayload &&
    bootstrapPayload.navKey === navKey &&
    bootstrapPayload.page === page &&
    (bootstrapPayload.categoryId ?? null) === (categoryId ?? null) &&
    (bootstrapPayload.subcategoryId ?? null) === (subcategoryId ?? null);

  const bootstrapProducts = hasMatchingBootstrap
    ? bootstrapPayload.productsResponse.items.map(mapProductDtoToCatalogProduct)
    : [];
  const [rawProducts, setRawProducts] = useState<Product[]>(bootstrapProducts);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState<number>(
    hasMatchingBootstrap
      ? bootstrapPayload.productsResponse.total_pages ||
          Math.ceil(
            (bootstrapPayload.productsResponse.total ||
              bootstrapProducts.length) / limit
          )
      : 1
  );

  useEffect(() => {
    if (!hasMatchingBootstrap || !bootstrapPayload) {
      return;
    }

    emitCatalogMetric({
      query: {
        page,
        page_size: limit,
        category_id: categoryId ?? undefined,
        subcategory_id: subcategoryId ?? undefined,
      },
      durationMs: 0,
      payloadBytes: new window.Blob([
        JSON.stringify(bootstrapPayload.productsResponse),
      ]).size,
      source: 'bootstrap',
    });
  }, [
    bootstrapPayload,
    categoryId,
    hasMatchingBootstrap,
    limit,
    page,
    subcategoryId,
  ]);

  useEffect(() => {
    if (!enabled) {
      setRawProducts([]);
      setTotalPages(1);
      setLoading(false);
      setError(null);
      return;
    }

    let isMounted = true;
    const startedAt = window.performance.now();

    async function fetchProducts() {
      setLoading(true);
      setError(null);

      try {
        const response: PaginatedResponse<ProductDto> = await listProducts(
          buildLiveCatalogQuery({
            page,
            pageSize: limit,
            categoryId,
            subcategoryId,
            subcategorySlug,
            colorFilters: filters?.color,
            sortByNewest: applyNewestSort,
          })
        );

        if (!isMounted) {
          return;
        }

        const mappedProducts = response.items.map(
          mapProductDtoToCatalogProduct
        );
        setRawProducts(mappedProducts);
        setTotalPages(
          response.total_pages ||
            Math.ceil((response.total || mappedProducts.length) / limit)
        );
        emitCatalogMetric({
          query: {
            page,
            page_size: limit,
            category_id: categoryId ?? undefined,
            subcategory_id: subcategoryId ?? undefined,
          },
          durationMs: window.performance.now() - startedAt,
          payloadBytes: new window.Blob([JSON.stringify(response)]).size,
          source: 'network',
        });
      } catch {
        if (!isMounted) {
          return;
        }

        setError('Failed to load products.');
        setRawProducts([]);
        setTotalPages(1);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    void fetchProducts();

    return () => {
      isMounted = false;
    };
  }, [
    applyNewestSort,
    categoryId,
    enabled,
    filters?.color,
    limit,
    page,
    subcategoryId,
    subcategorySlug,
  ]);

  const products = useMemo(() => {
    const filteredProducts = filterProducts(rawProducts, filters);
    return sortNewestFirst(filteredProducts, applyNewestSort);
  }, [applyNewestSort, filters, rawProducts]);

  const availableColors = useMemo(
    () =>
      Array.from(
        new Set(
          rawProducts
            .flatMap(product => {
              const colors: string[] = [];

              if (product.variant_color_palette) {
                colors.push(product.variant_color_palette);
              }

              product.variants?.forEach(variant => {
                if (variant.color_palette) {
                  colors.push(variant.color_palette);
                }
              });

              return colors;
            })
            .filter(Boolean)
        )
      ).sort(),
    [rawProducts]
  );

  const availableSizes: string[] = [];

  const colorPaletteMap = useMemo(() => {
    const nextColorPaletteMap = new Map<string, string>();

    rawProducts.forEach(product => {
      if (product.variant_color_palette && product.variant_color_name) {
        nextColorPaletteMap.set(
          product.variant_color_palette,
          product.variant_color_name
        );
      }

      product.variants?.forEach(variant => {
        if (
          variant.color_palette &&
          variant.color_name &&
          !nextColorPaletteMap.has(variant.color_palette)
        ) {
          nextColorPaletteMap.set(variant.color_palette, variant.color_name);
        }
      });
    });

    return nextColorPaletteMap;
  }, [rawProducts]);

  return {
    products,
    loading,
    error,
    totalPages,
    availableColors,
    availableSizes,
    colorPaletteMap,
  };
}
