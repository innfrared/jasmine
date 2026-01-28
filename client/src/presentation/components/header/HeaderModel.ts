import { useCategories } from '../../hooks/useCategories';

export const useHeaderModel = () => {
  const { categories, loading, error } = useCategories();

  return { categories, loading, error };
};
