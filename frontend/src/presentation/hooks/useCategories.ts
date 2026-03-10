'use client';

import { useEffect, useState } from 'react';
import { listCategoriesWithSubcategories } from '../../service/categoryService';
import {
  CategoryNavItem,
  mapCategoryDtoToNav,
} from '../../model/categoryModel';

type UseCategoriesState = {
  categories: CategoryNavItem[];
  loading: boolean;
  error: string | null;
};

export const useCategories = (): UseCategoriesState => {
  const [categories, setCategories] = useState<CategoryNavItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadCategories = async () => {
      try {
        const data = await listCategoriesWithSubcategories();
        if (!isMounted) return;
        setCategories(data.map(mapCategoryDtoToNav));
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
  }, []);

  return { categories, loading, error };
};
