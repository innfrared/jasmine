import { apiClient } from './apiClient';
import { CategoryDto, CategoryWithSubcategoriesDto } from './types';

export const listCategories = () =>
  apiClient.get<CategoryDto[]>('categories');

export const listCategoriesWithSubcategories = () =>
  apiClient.get<CategoryWithSubcategoriesDto[]>('categories/all');
