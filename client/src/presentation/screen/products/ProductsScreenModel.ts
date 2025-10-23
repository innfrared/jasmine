import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from 'model/productModel';
import { fetchProducts } from '../../../service/productService';

export const useProductScreenModel = (
  filters?: Record<string, string[]>,
  page: number = 1
) => {
  const { category, subcategory } = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    setLoading(true);

    fetchProducts(category, subcategory, filters, page)
      .then(data => {
        if (!data.products || !Array.isArray(data.products)) {
          console.log(data.products);
          throw new Error('Invalid data received');
        }
        setProducts(data.products);
        setTotalPages(Math.ceil(data.total / data.limit));
      })
      .catch(err => {
        console.error('❌ Fetch error:', err);
        setError('Failed to load products.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [category, subcategory, filters, page]);

  return {
    products,
    loading,
    error,
    category,
    subcategory,
    totalPages,
    setProducts,
  };
};
