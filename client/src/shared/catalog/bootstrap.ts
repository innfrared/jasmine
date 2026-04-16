import type { CategoryNavItem } from '../../entities/catalog/category';
import type { CatalogNavKey } from '../config/navigation';
import type { PaginatedResponse, ProductDto } from '../../service/types';

export type CatalogBootstrapPayload = {
  navKey: CatalogNavKey;
  page: number;
  categoryId?: number;
  subcategoryId?: number;
  categories: CategoryNavItem[];
  productsResponse: PaginatedResponse<ProductDto>;
  generatedAt: string;
};

export const CATALOG_BOOTSTRAP_WINDOW_KEY = '__CATALOG_BOOTSTRAP__';
