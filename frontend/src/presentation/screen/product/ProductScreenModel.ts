'use client';

import { useState, useEffect, useRef } from 'react';
import { getProduct, getProductBySlug } from '../../../service/productsService';
import { Product } from '../../../model/productModel';
import { getImageUrl } from '../../../utils/imageUtils';
import { mapProductDtoToModel } from '../../../utils/productMapper';

export const useProductScreenModel = (
  productName: string | undefined,
  id: number | undefined,
  initialProduct?: Product | null
) => {
  const [product, setProduct] = useState<Product | null>(
    initialProduct ?? null
  );
  const [loading, setLoading] = useState<boolean>(!initialProduct);
  const [error, setError] = useState<string | null>(null);
  const [mainImage, setMainImage] = useState<string>('');
  const [notFound, setNotFound] = useState(false);
  const hasUsedInitial = useRef(false);

  useEffect(() => {
    if (!hasUsedInitial.current && initialProduct) {
      const mainImageUrl = getImageUrl(initialProduct.variant_image);
      setMainImage(mainImageUrl);
      hasUsedInitial.current = true;
      return;
    }

    const loadProduct = async () => {
      if (!productName) {
        setNotFound(true);
        setLoading(false);
        return;
      }

      try {
        if (id) {
          const data = await getProduct(id);
          const mapped = mapProductDtoToModel(data);
          setProduct(mapped);
          const mainImageUrl = getImageUrl(mapped.variant_image);
          setMainImage(mainImageUrl);
          setNotFound(false);
        } else {
          const data = await getProductBySlug(productName);
          if (!data) {
            setNotFound(true);
            setProduct(null);
            return;
          }
          const mapped = mapProductDtoToModel(data);
          setProduct(mapped);
          const mainImageUrl = getImageUrl(mapped.variant_image);
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
  }, [productName, id, initialProduct]);

  return { product, loading, error, mainImage, setMainImage, notFound };
};
