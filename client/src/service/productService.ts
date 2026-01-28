import { apiClient } from './apiClient';
import { PaginatedResponse, ProductDto } from './types';

export interface ListProductsParams {
  category_id?: number;
  subcategory_id?: number;
  search?: string;
  availability?: 'in_stock' | 'out_of_stock' | 'pre_order';
  page?: number;
  page_size?: number;
  specFilters?: Record<string, string | number | boolean>;
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

  return apiClient.get<PaginatedResponse<ProductDto>>('products', { query });
};

export const getProduct = (productId: number) =>
  apiClient.get<ProductDto>(`products/${productId}`);

export const getProductBySlug = async (productName: string) => {
  const decodedName = decodeURIComponent(productName);
  const response = await listProducts({ search: decodedName, page: 1, page_size: 20 });
  const normalized = decodedName.trim().toLowerCase();
  const exactMatch = response.items.find(
    item => item.name.trim().toLowerCase() === normalized
  );
  return exactMatch ?? null;
};
