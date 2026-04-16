import type { CategoryWithSubcategoriesDto } from '../../service/types';

export interface CategoryNavItem {
  id: number;
  name: string;
  url: string;
  description?: string | null;
  parent_id?: number | null;
  subcategories?: CategoryNavItem[];
}

export const mapCategoryDtoToNavItem = (
  category: CategoryWithSubcategoriesDto
): CategoryNavItem => ({
  id: category.id,
  name: category.name,
  url: category.slug,
  subcategories:
    category.subcategories?.map(subcategory => ({
      id: subcategory.id,
      name: subcategory.name,
      url: subcategory.slug,
      description: subcategory.description ?? null,
      parent_id: subcategory.category_id,
    })) || [],
});
