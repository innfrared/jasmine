import { useEffect, useState } from 'react';
import { listCategoriesWithSubcategories } from '../../../service/categoryService';
import { mapCategoryDtoToNavItem } from '../../../entities/catalog/category';
import type { CategoryNavItem } from '../../../entities/catalog/category';
import { useCatalogBootstrap } from '../../../context/CatalogBootstrapContext';

type UseCategoriesState = {
  categories: CategoryNavItem[];
  loading: boolean;
  error: string | null;
};

export const useCategories = (): UseCategoriesState => {
  const bootstrapPayload = useCatalogBootstrap();
  const hasBootstrapCategories = Boolean(bootstrapPayload?.categories.length);
  const [categories, setCategories] = useState<CategoryNavItem[]>(
    bootstrapPayload?.categories ?? []
  );
  const [loading, setLoading] = useState(!bootstrapPayload);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (hasBootstrapCategories) {
      return;
    }

    let isMounted = true;

    const loadCategories = async () => {
      try {
        const data = await listCategoriesWithSubcategories();
        if (!isMounted) return;
        setCategories(data.map(mapCategoryDtoToNavItem));
      } catch {
        if (!isMounted) return;
        setError('Failed to load categories');
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadCategories();

    return () => {
      isMounted = false;
    };
  }, [hasBootstrapCategories]);

  return { categories, loading, error };
};
