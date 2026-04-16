import { apiClient } from './apiClient';
import { API_ENDPOINTS } from '@/shared/api/endpoints';
import type { CategoryDto, CategoryWithSubcategoriesDto } from './types';

let categoriesCache: CategoryDto[] | null = null;
let categoriesPromise: Promise<CategoryDto[]> | null = null;
let categoriesWithSubcategoriesCache: CategoryWithSubcategoriesDto[] | null = null;
let categoriesWithSubcategoriesPromise:
  | Promise<CategoryWithSubcategoriesDto[]>
  | null = null;

export const listCategories = () =>
  categoriesCache
    ? Promise.resolve(categoriesCache)
    : categoriesPromise ??
      (categoriesPromise = apiClient
        .get<CategoryDto[]>(API_ENDPOINTS.categories.list)
        .then(
          response => {
            categoriesCache = response;
            categoriesPromise = null;
            return response;
          },
          error => {
            categoriesPromise = null;
            throw error;
          }
        ));

export const listCategoriesWithSubcategories = () =>
  categoriesWithSubcategoriesCache
    ? Promise.resolve(categoriesWithSubcategoriesCache)
    : categoriesWithSubcategoriesPromise ??
      (categoriesWithSubcategoriesPromise = apiClient
        .get<CategoryWithSubcategoriesDto[]>(API_ENDPOINTS.categories.all)
        .then(
          response => {
            categoriesWithSubcategoriesCache = response;
            categoriesWithSubcategoriesPromise = null;
            return response;
          },
          error => {
            categoriesWithSubcategoriesPromise = null;
            throw error;
          }
        ));
