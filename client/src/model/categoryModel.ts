import { CategoryWithSubcategoriesDto } from '../service/types';

export interface Category {
  id: number;
  name?: string;
  svg?: string;
  url?: string;
  parent_id?: number | null;
}

export interface CategoryNavItem {
  id: number;
  name: string;
  url: string;
  parent_id?: number | null;
  subcategories?: CategoryNavItem[];
}

export const mapCategoryDtoToNav = (
  category: CategoryWithSubcategoriesDto
): CategoryNavItem => ({
  id: category.id,
  name: category.name,
  url: category.slug,
  subcategories:
    category.subcategories?.map((subcategory) => ({
      id: subcategory.id,
      name: subcategory.name,
      url: subcategory.slug,
      parent_id: subcategory.category_id,
    })) || [],
});
