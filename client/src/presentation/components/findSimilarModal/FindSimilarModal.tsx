import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { listProducts } from '../../../service/productService';
import { Product } from '../../../model/productModel';
import { getImageUrl } from '../../../utils/imageUtils';
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
  const navigate = useNavigate();
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
        const filtered = response.items.filter((item) => item.id !== product.id);
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
      onClick={(event) => {
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
              {items.map((item) => (
                <ProductCard
                  key={item.id}
                  onClick={() =>
                    navigate(
                      `/products/product/${encodeURIComponent(item.name)}?id=${item.id}`
                    )
                  }
                >
                  <ProductImage
                    src={getImageUrl(item.variant_image)}
                    alt={item.name}
                    loading="lazy"
                  />
                  <ProductName>{item.name}</ProductName>
                  <ProductPrice>
                    {item.price_new ? `${item.price_new} USD` : `${item.price} USD`}
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
