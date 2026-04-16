import { apiClient } from './apiClient';
import { API_ENDPOINTS } from '@/shared/api/endpoints';
import type { PaginatedResponse, ProductDto } from './types';
import { mapProductDtoToCatalogProduct } from '../entities/catalog/product';
import type { Product } from '../entities/catalog/product';

type BaseListProductsParams = {
  category_id?: number;
  search?: string;
  availability?: 'in_stock' | 'out_of_stock' | 'pre_order';
  page?: number;
  page_size?: number;
  specFilters?: Record<string, string | number | boolean>;
};

type SingleSubcategoryListParams = {
  subcategory_id?: number;
  subcategory_slug?: string;
  subcategory_ids?: never;
  subcategory_slugs?: never;
};

type MultipleSubcategoryListParams = {
  subcategory_id?: never;
  subcategory_slug?: never;
  subcategory_ids?: string;
  subcategory_slugs?: string;
};

export type ListProductsParams = BaseListProductsParams &
  (SingleSubcategoryListParams | MultipleSubcategoryListParams);

export type LiveCatalogQuery = {
  page: number;
  page_size: number;
  category_id?: number;
  subcategory_id?: number;
  subcategory_slug?: string;
  sort?: 'newest';
  color_palette?: string;
};

type BuildLiveCatalogQueryParams = {
  page: number;
  pageSize: number;
  categoryId?: number | null;
  subcategoryId?: number | null;
  subcategorySlug?: string | null;
  colorFilters?: string[];
  sortByNewest?: boolean;
};

export function buildLiveCatalogQuery({
  page,
  pageSize,
  categoryId,
  subcategoryId,
  subcategorySlug,
  colorFilters,
  sortByNewest,
}: BuildLiveCatalogQueryParams): LiveCatalogQuery {
  const query: LiveCatalogQuery = {
    page,
    page_size: pageSize,
  };

  if (categoryId) {
    query.category_id = categoryId;
  }

  if (subcategoryId) {
    query.subcategory_id = subcategoryId;
  } else if (subcategorySlug) {
    query.subcategory_slug = subcategorySlug;
  }

  if (sortByNewest) {
    query.sort = 'newest';
  }

  if (colorFilters && colorFilters.length > 0) {
    query.color_palette = colorFilters.join(',');
  }

  return query;
}

export const listProducts = (params: ListProductsParams = {}) => {
  const { specFilters, ...rest } = params;
  const query: Record<string, string | number | boolean | undefined> = {
    ...rest,
  };

  if (specFilters) {
    Object.entries(specFilters).forEach(([key, value]) => {
      query[`spec_${key}`] = value;
    });
  }

  return apiClient.get<PaginatedResponse<ProductDto>>(
    API_ENDPOINTS.products.list,
    {
      query,
    }
  );
};

export const getProduct = (productId: number) =>
  apiClient.get<ProductDto>(API_ENDPOINTS.products.details(productId));

export const getProductBySlug = async (productName: string) => {
  const decodedName = decodeURIComponent(productName);
  const response = await listProducts({
    search: decodedName,
    page: 1,
    page_size: 20,
  });
  const normalized = decodedName.trim().toLowerCase();
  const exactMatch = response.items.find(
    item => item.name.trim().toLowerCase() === normalized
  );
  return exactMatch ?? null;
};

export type CategorySpecifications = Record<string, string[]>;

export const getCategorySpecifications = async (
  category?: string,
  subcategory?: string
): Promise<CategorySpecifications> => {
  void category;
  void subcategory;
  return {};
};

export const fetchBestDeals = async (): Promise<Product[]> => {
  const response = await listProducts({ page: 1, page_size: 8 });
  return response.items.map(mapProductDtoToCatalogProduct);
};

export const fetchNewAdded = async (): Promise<Product[]> => {
  const response = await listProducts({ page: 1, page_size: 8 });
  return response.items
    .map(mapProductDtoToCatalogProduct)
    .sort((leftProduct, rightProduct) => {
      if (!leftProduct.created_at || !rightProduct.created_at) {
        return 0;
      }

      return (
        new Date(rightProduct.created_at).getTime() -
        new Date(leftProduct.created_at).getTime()
      );
    });
};
