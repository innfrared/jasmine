import type {
  CategoryWithSubcategoriesDto,
  PaginatedResponse,
  ProductDto,
} from '@/shared/contracts/api';
import { API_ENDPOINTS } from '@/shared/api/endpoints';
import { fetchServerJson } from './client';

export const getServerCatalogProducts = (
  query?: Record<string, string | number | boolean | undefined>,
  options?: {
    revalidate?: number;
    tags?: string[];
  }
) => {
  return fetchServerJson<PaginatedResponse<ProductDto>>(
    API_ENDPOINTS.products.list,
    query,
    options
  );
};

export const getServerCategoriesWithSubcategories = (
  query?: Record<string, string | number | boolean | undefined>,
  options?: {
    revalidate?: number;
    tags?: string[];
  }
) => {
  return fetchServerJson<CategoryWithSubcategoriesDto[]>(
    API_ENDPOINTS.categories.all,
    query,
    options
  );
};
