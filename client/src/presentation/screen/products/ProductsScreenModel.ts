import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from 'model/productModel';
import {
  mockTrendingInBags,
  mockTrendingInDressesAndMatchingSets,
} from '../../../mocks/productsMock';
import { mockCategories } from '../../../mocks/categoriesMock';

// Combine all mock products
const allMockProducts: Product[] = [
  ...mockTrendingInBags,
  ...mockTrendingInDressesAndMatchingSets,
];

// Helper function to convert URL slug to category name
const getCategoryNameFromUrl = (urlSlug: string): string | null => {
  const decoded = decodeURIComponent(urlSlug);
  const category = mockCategories.find(
    cat => cat.url === decoded || cat.url === urlSlug
  );
  return category?.name || null;
};

// Helper function to convert URL slug to subcategory name
const getSubcategoryNameFromUrl = (urlSlug: string, categoryUrl?: string): string | null => {
  const decoded = decodeURIComponent(urlSlug);
  for (const category of mockCategories) {
    const subcategory = category.subcategories?.find(
      sub => sub.url === decoded || sub.url === urlSlug
    );
    if (subcategory) {
      return subcategory.name;
    }
  }
  return null;
};

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
    setLoading(true);
    setError(null);

    // Simulate async loading
    setTimeout(() => {
      try {
        // Filter products based on category and subcategory
        let filteredProducts = allMockProducts;

        // Filter by category name
        if (category) {
          const categoryName = getCategoryNameFromUrl(category);
          if (categoryName) {
            filteredProducts = filteredProducts.filter(
              product => product.category_name === categoryName
            );
          } else {
            // Fallback: try direct matching if URL doesn't match
            const categoryLower = category.toLowerCase().replace(/-/g, ' ');
            filteredProducts = filteredProducts.filter(product => {
              const productCategory = product.category_name?.toLowerCase() || '';
              return productCategory.includes(categoryLower);
            });
          }
        }

        // Filter by subcategory name
        if (subcategory) {
          const subcategoryName = getSubcategoryNameFromUrl(subcategory, category);
          if (subcategoryName) {
            filteredProducts = filteredProducts.filter(
              product => product.subcategory_name === subcategoryName
            );
          } else {
            // Fallback: try direct matching if URL doesn't match
            const subcategoryLower = subcategory.toLowerCase().replace(/-/g, ' ');
            filteredProducts = filteredProducts.filter(product => {
              const productSubcategory = product.subcategory_name?.toLowerCase() || '';
              return productSubcategory.includes(subcategoryLower);
            });
          }
        }

        // Apply filters (color and size)
        if (filters) {
          if (filters.color && filters.color.length > 0) {
            filteredProducts = filteredProducts.filter(product => {
              return product.variants?.some(variant =>
                variant.colorPalette && filters.color!.includes(variant.colorPalette)
              );
            });
          }

          if (filters.size && filters.size.length > 0) {
            filteredProducts = filteredProducts.filter(product => {
              return product.variants?.some(variant =>
                variant.sizes?.some(size => filters.size!.includes(size))
              );
            });
          }
        }

        // Apply sorting
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

        // Apply pagination
        const total = filteredProducts.length;
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

        setProducts(paginatedProducts);
        setTotalPages(Math.ceil(total / limit));
      } catch (err) {
        console.error('❌ Mock data error:', err);
        setError('Failed to load products.');
      } finally {
        setLoading(false);
      }
    }, 300); // Simulate network delay
  }, [category, subcategory, filters, page, limit, sortBy]);

  // Get category and subcategory names for display
  const categoryName = category ? getCategoryNameFromUrl(category) : undefined;
  const subcategoryName = subcategory
    ? getSubcategoryNameFromUrl(subcategory, category)
    : undefined;

  // Get available color palettes and sizes from filtered products
  const availableColors = Array.from(
    new Set(
      allFilteredProducts
        .flatMap(product => product.variants?.map(v => v.colorPalette).filter(Boolean) || [])
        .filter(Boolean)
    )
  ).sort();

  const availableSizes = Array.from(
    new Set(
      allFilteredProducts
        .flatMap(product => product.variants?.flatMap(v => v.sizes || []) || [])
        .filter(Boolean)
    )
  ).sort();

  // Get color palette to representative color value map for display
  const colorPaletteMap = new Map<string, string>();
  allFilteredProducts.forEach(product => {
    product.variants?.forEach(variant => {
      if (variant.colorPalette && variant.value && !colorPaletteMap.has(variant.colorPalette)) {
        colorPaletteMap.set(variant.colorPalette, variant.value);
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
