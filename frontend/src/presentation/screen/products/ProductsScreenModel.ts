'use client';

import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Product } from 'model/productModel';
import { listProducts } from '../../../service/productsService';
import { PaginatedResponse, ProductDto } from '../../../service/types';
import { mapProductDtosToModels } from '../../../utils/productMapper';
import { PRODUCT_LIST_FIELDS } from '../../../utils/productFields';

type InitialProductsState = {
  products: Product[];
  totalPages: number;
};

export const useProductScreenModel = (
  filters?: Record<string, string[]>,
  page: number = 1,
  limit: number = 20,
  sortBy?: string,
  initialState?: InitialProductsState
) => {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category_id');
  const subcategoryParam = searchParams.get('subcategory_id');
  const categoryId = categoryParam ? Number(categoryParam) : null;
  const subcategoryId = subcategoryParam ? Number(subcategoryParam) : null;
  const [products, setProducts] = useState<Product[]>(
    initialState?.products || []
  );
  const [loading, setLoading] = useState<boolean>(!initialState);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState<number>(
    initialState?.totalPages || 1
  );
  const [allFilteredProducts, setAllFilteredProducts] = useState<Product[]>(
    initialState?.products || []
  );
  const hasUsedInitial = useRef(false);

  useEffect(() => {
    if (!hasUsedInitial.current && initialState) {
      hasUsedInitial.current = true;
      return;
    }

    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        let response:
          | PaginatedResponse<ProductDto>
          | { data: ProductDto[]; total: number; page: number; limit: number };
        let mappedProducts: Product[];

        response = await listProducts({
          page,
          page_size: limit,
          category_id: categoryId || undefined,
          subcategory_id: subcategoryId || undefined,
          fields: PRODUCT_LIST_FIELDS,
        });
        mappedProducts = mapProductDtosToModels(response.items);

        let filteredProducts = mappedProducts;
        if (filters?.color && filters.color.length > 0) {
          filteredProducts = mappedProducts.filter(product => {
            if (
              product.variant_color_palette &&
              filters.color!.includes(product.variant_color_palette)
            ) {
              return true;
            }
            return product.variants?.some(
              variant =>
                variant.color_palette &&
                filters.color!.includes(variant.color_palette)
            );
          });
        }

        if (sortBy) {
          filteredProducts = [...filteredProducts].sort((a, b) => {
            switch (sortBy) {
              case 'price_asc': {
                const priceA =
                  parseFloat(
                    (a.price_new || a.price).replace(/[^\d.-]/g, '')
                  ) || 0;
                const priceB =
                  parseFloat(
                    (b.price_new || b.price).replace(/[^\d.-]/g, '')
                  ) || 0;
                return priceA - priceB;
              }
              case 'price_desc': {
                const priceA =
                  parseFloat(
                    (a.price_new || a.price).replace(/[^\d.-]/g, '')
                  ) || 0;
                const priceB =
                  parseFloat(
                    (b.price_new || b.price).replace(/[^\d.-]/g, '')
                  ) || 0;
                return priceB - priceA;
              }
              case 'name_asc':
                return a.name.localeCompare(b.name);
              case 'name_desc':
                return b.name.localeCompare(a.name);
              default:
                return 0;
            }
          });
        }

        setAllFilteredProducts(filteredProducts);
        setProducts(filteredProducts);
        setTotalPages(
          response.total_pages ||
            Math.ceil((response.total || filteredProducts.length) / limit)
        );
      } catch (err) {
        console.error('❌ Error fetching products:', err);
        setError('Failed to load products.');
        setProducts([]);
        setAllFilteredProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId, subcategoryId, filters, page, limit, sortBy, initialState]);

  const categoryName = categoryId ? String(categoryId) : undefined;
  const subcategoryName = subcategoryId ? String(subcategoryId) : undefined;

  const availableColors = Array.from(
    new Set(
      allFilteredProducts
        .flatMap(product => {
          const colors: string[] = [];
          if (product.variant_color_palette) {
            colors.push(product.variant_color_palette);
          }
          if (product.variants) {
            product.variants.forEach(variant => {
              if (variant.color_palette) {
                colors.push(variant.color_palette);
              }
            });
          }
          return colors;
        })
        .filter(Boolean)
    )
  ).sort();

  const availableSizes: string[] = [];

  const colorPaletteMap = new Map<string, string>();
  allFilteredProducts.forEach(product => {
    if (product.variant_color_palette && product.variant_color_name) {
      colorPaletteMap.set(
        product.variant_color_palette,
        product.variant_color_name
      );
    }
    product.variants?.forEach(variant => {
      if (
        variant.color_palette &&
        variant.color_name &&
        !colorPaletteMap.has(variant.color_palette)
      ) {
        colorPaletteMap.set(variant.color_palette, variant.color_name);
      }
    });
  });

  return {
    products,
    loading,
    error,
    category: categoryName,
    subcategory: subcategoryName,
    totalPages,
    setProducts,
    availableColors,
    availableSizes,
    colorPaletteMap,
  };
};
