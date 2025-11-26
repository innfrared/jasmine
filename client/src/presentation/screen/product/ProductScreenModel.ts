import { useState, useEffect } from 'react';
import { fetchProductById } from '../../../service/productService';
import { Product } from '../../../model/productModel';

export const useProductScreenModel = (
  productName: string | undefined,
  id: number | undefined
) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [mainImage, setMainImage] = useState<string>('');

  useEffect(() => {
    const loadProduct = async () => {
      if (!productName) return;

      try {
        let data = null;
        if (id) {
          data = await fetchProductById(id);
          console.log(data);
          setProduct(data);
          setMainImage(data.image_main);
        }
      } catch {
        setError('Failed to load product details');
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [productName, id]);

  return { product, loading, error, mainImage, setMainImage };
};
