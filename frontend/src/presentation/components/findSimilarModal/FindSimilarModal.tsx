'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { listProducts } from '../../../service/productsService';
import { Product } from '../../../model/productModel';
import { getImageUrl } from '../../../utils/imageUtils';
import { mapProductDtosToModels } from '../../../utils/productMapper';
import {
  CloseButton,
  Grid,
  ModalBody,
  ModalCard,
  ModalHeader,
  ModalOverlay,
  ModalTitle,
  ProductCard,
  ProductImage,
  ProductName,
  ProductPrice,
  StatusText,
} from './FindSimilarModal.styles';
import { normalizeLocale, withLocale } from '../../../utils/locale';
import { buildProductSlug } from '../../../utils/slug';

type FindSimilarModalProps = {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
};

const FindSimilarModal: React.FC<FindSimilarModalProps> = ({
  isOpen,
  onClose,
  product,
}) => {
  const router = useRouter();
  const params = useParams<{ locale?: string }>();
  const locale = normalizeLocale(params?.locale);
  const modalRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [items, setItems] = useState<Product[]>([]);

  const title = useMemo(() => {
    if (product.subcategory?.name) {
      return `Similar in ${product.subcategory.name}`;
    }
    if (product.category?.name) {
      return `Similar in ${product.category.name}`;
    }
    return 'Similar items';
  }, [product.category?.name, product.subcategory?.name]);

  useEffect(() => {
    if (!isOpen) return;

    const load = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await listProducts({
          subcategory_id: product.subcategory_id || undefined,
          page: 1,
          page_size: 8,
        });
        const mapped = mapProductDtosToModels(response.items);
        const filtered = mapped.filter(item => item.id !== product.id);
        setItems(filtered);
      } catch {
        setError('Unable to load similar products.');
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [isOpen, product.category_id, product.id, product.subcategory_id]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <ModalOverlay
      onClick={event => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <ModalCard ref={modalRef}>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <CloseButton onClick={onClose} aria-label="Close">
            ✕
          </CloseButton>
        </ModalHeader>
        <ModalBody>
          {loading && <StatusText>Loading similar items...</StatusText>}
          {!loading && error && <StatusText>{error}</StatusText>}
          {!loading && !error && items.length === 0 && (
            <StatusText>No similar items found.</StatusText>
          )}
          {!loading && !error && items.length > 0 && (
            <Grid>
              {items.map(item => (
                <ProductCard
                  key={item.id}
                  onClick={() =>
                    router.push(
                      withLocale(
                        locale,
                        `/product/${buildProductSlug(item.name, item.id)}`
                      )
                    )
                  }
                >
                  <ProductImage>
                    <Image
                      src={
                        getImageUrl(item.variant_image) || '/assets/logo.png'
                      }
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 50vw, 200px"
                    />
                  </ProductImage>
                  <ProductName>{item.name}</ProductName>
                  <ProductPrice>
                    {item.price_new
                      ? `${item.price_new} USD`
                      : `${item.price} USD`}
                  </ProductPrice>
                </ProductCard>
              ))}
            </Grid>
          )}
        </ModalBody>
      </ModalCard>
    </ModalOverlay>
  );
};

export default FindSimilarModal;
