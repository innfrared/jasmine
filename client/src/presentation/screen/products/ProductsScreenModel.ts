import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from 'model/productModel';
import { listProducts } from '../../../service/productService';
import { apiClient } from '../../../service/apiClient';
import { PaginatedResponse, ProductDto } from '../../../service/types';

export const useProductScreenModel = (
  filters?: Record<string, string[]>,
  page: number = 1,
  limit: number = 20,
  sortBy?: string
) => {
  const { category, subcategory } = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [allFilteredProducts, setAllFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        let response: PaginatedResponse<ProductDto> | { data: ProductDto[]; total: number; page: number; limit: number };
        let mappedProducts: Product[];
        
        // Use category/subcategory endpoints if available
        if (category && subcategory) {
          // Fetch products by category and subcategory
          const categoryResponse = await apiClient.get<{ data: ProductDto[]; total: number; page: number; limit: number }>(
            `products/category/${encodeURIComponent(category)}/${encodeURIComponent(subcategory)}`,
            { query: { page: page.toString(), limit: limit.toString() } }
          );
          mappedProducts = categoryResponse.data.map(item => ({
            ...item,
            category: item.category ?? null,
            subcategory: item.subcategory ?? null,
            variants: item.variants ?? [],
            specifications: item.specifications ?? {},
            specifications_detailed: item.specifications_detailed ?? [],
          }));
          response = {
            items: categoryResponse.data,
            total: categoryResponse.total,
            page: categoryResponse.page,
            page_size: categoryResponse.limit,
            total_pages: Math.ceil(categoryResponse.total / categoryResponse.limit),
            has_next: (categoryResponse.page * categoryResponse.limit) < categoryResponse.total,
            has_previous: categoryResponse.page > 1,
          };
        } else if (category) {
          // Fetch products by category
          const categoryResponse = await apiClient.get<{ data: ProductDto[]; total: number; page: number; limit: number }>(
            `products/category/${encodeURIComponent(category)}`,
            { query: { page: page.toString(), limit: limit.toString() } }
          );
          mappedProducts = categoryResponse.data.map(item => ({
            ...item,
            category: item.category ?? null,
            subcategory: item.subcategory ?? null,
            variants: item.variants ?? [],
            specifications: item.specifications ?? {},
            specifications_detailed: item.specifications_detailed ?? [],
          }));
          response = {
            items: categoryResponse.data,
            total: categoryResponse.total,
            page: categoryResponse.page,
            page_size: categoryResponse.limit,
            total_pages: Math.ceil(categoryResponse.total / categoryResponse.limit),
            has_next: (categoryResponse.page * categoryResponse.limit) < categoryResponse.total,
            has_previous: categoryResponse.page > 1,
          };
        } else {
          // Fetch all products
          response = await listProducts({ page, page_size: limit });
          mappedProducts = response.items.map(item => ({
            ...item,
            category: item.category ?? null,
            subcategory: item.subcategory ?? null,
            variants: item.variants ?? [],
            specifications: item.specifications ?? {},
            specifications_detailed: item.specifications_detailed ?? [],
          }));
        }

        // Apply client-side filtering for colors (if backend doesn't support it)
        let filteredProducts = mappedProducts;
        if (filters?.color && filters.color.length > 0) {
          filteredProducts = mappedProducts.filter(product => {
            // Check product's own color
            if (product.variant_color_palette && filters.color!.includes(product.variant_color_palette)) {
              return true;
            }
            // Check variant colors
            return product.variants?.some(variant =>
              variant.color_palette && filters.color!.includes(variant.color_palette)
            );
          });
        }

        // Apply client-side sorting (if backend doesn't support it)
        if (sortBy) {
          filteredProducts = [...filteredProducts].sort((a, b) => {
            switch (sortBy) {
              case 'price_asc': {
                const priceA = parseFloat((a.price_new || a.price).replace(/[^\d.-]/g, '')) || 0;
                const priceB = parseFloat((b.price_new || b.price).replace(/[^\d.-]/g, '')) || 0;
                return priceA - priceB;
              }
              case 'price_desc': {
                const priceA = parseFloat((a.price_new || a.price).replace(/[^\d.-]/g, '')) || 0;
                const priceB = parseFloat((b.price_new || b.price).replace(/[^\d.-]/g, '')) || 0;
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
        setTotalPages(response.total_pages || Math.ceil((response.total || filteredProducts.length) / limit));
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
  }, [category, subcategory, filters, page, limit, sortBy]);

  // Get category and subcategory names from URL params (decoded)
  const categoryName = category ? decodeURIComponent(category) : undefined;
  const subcategoryName = subcategory ? decodeURIComponent(subcategory) : undefined;

  // Get available color palettes from filtered products
  const availableColors = Array.from(
    new Set(
      allFilteredProducts.flatMap(product => {
        const colors: string[] = [];
        // Add product's own color
        if (product.variant_color_palette) {
          colors.push(product.variant_color_palette);
        }
        // Add variant colors
        if (product.variants) {
          product.variants.forEach(variant => {
            if (variant.color_palette) {
              colors.push(variant.color_palette);
            }
          });
        }
        return colors;
      }).filter(Boolean)
    )
  ).sort();

  const availableSizes: string[] = []; // Sizes no longer available in new variant system

  // Get color palette to color name map for display
  const colorPaletteMap = new Map<string, string>();
  allFilteredProducts.forEach(product => {
    // Add product's own color
    if (product.variant_color_palette && product.variant_color_name) {
      colorPaletteMap.set(product.variant_color_palette, product.variant_color_name);
    }
    // Add variant colors
    product.variants?.forEach(variant => {
      if (variant.color_palette && variant.color_name && !colorPaletteMap.has(variant.color_palette)) {
        colorPaletteMap.set(variant.color_palette, variant.color_name);
      }
    });
  });

  return {
    products,
    loading,
    error,
    category: categoryName || category,
    subcategory: subcategoryName || subcategory,
    totalPages,
    setProducts,
    availableColors,
    availableSizes,
    colorPaletteMap,
  };
};
