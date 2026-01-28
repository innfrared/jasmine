import { useState, useEffect } from 'react';
import { getProduct, getProductBySlug } from '../../../service/productService';
import { Product } from '../../../model/productModel';
import { getImageUrl } from '../../../utils/imageUtils';

export const useProductScreenModel = (
  productName: string | undefined,
  id: number | undefined
) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [mainImage, setMainImage] = useState<string>('');
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
          setProduct(data as Product);
          const mainImageUrl = getImageUrl(data.variant_image);
          setMainImage(mainImageUrl);
          setNotFound(false);
        } else {
          const data = await getProductBySlug(productName);
          if (!data) {
            setNotFound(true);
            setProduct(null);
            return;
          }
          setProduct(data as Product);
          const mainImageUrl = getImageUrl(data.variant_image);
          setMainImage(mainImageUrl);
          setNotFound(false);
        }
      } catch {
        setError('Failed to load product details');
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [productName, id]);

  return { product, loading, error, mainImage, setMainImage, notFound };
};
