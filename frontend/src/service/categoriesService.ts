import { httpClient, type RequestOptions } from './httpClient';
import { CategoryDto, CategoryWithSubcategoriesDto } from './types';

export const listCategories = (options: RequestOptions = {}) =>
  httpClient.get<CategoryDto[]>('categories', options);

export const listCategoriesWithSubcategories = (options: RequestOptions = {}) =>
  httpClient.get<CategoryWithSubcategoriesDto[]>('categories/all/', options);
