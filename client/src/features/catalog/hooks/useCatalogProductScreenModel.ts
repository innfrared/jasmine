import { useEffect, useState } from 'react';
import { getProduct, getProductBySlug } from '../../../service/productService';
import type { Product } from '../../../entities/catalog/product';
import { mapProductDtoToCatalogProduct } from '../../../entities/catalog/product';

export const useCatalogProductScreenModel = (
  productName: string | undefined,
  id: number | undefined
) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const loadProduct = async () => {
      if (!productName) {
        setNotFound(true);
        setLoading(false);
        return;
      }

      try {
        if (id) {
          const data = await getProduct(id);
          setProduct(mapProductDtoToCatalogProduct(data));
          setNotFound(false);
        } else {
          const data = await getProductBySlug(productName);
          if (!data) {
            setNotFound(true);
            setProduct(null);
            return;
          }
          setProduct(mapProductDtoToCatalogProduct(data));
          setNotFound(false);
        }
      } catch {
        setError('Failed to load product details');
      } finally {
        setLoading(false);
      }
    };

    void loadProduct();
  }, [productName, id]);

  return { product, loading, error, notFound };
};
