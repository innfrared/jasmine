'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Product } from '../../../model/productModel';
import { CartItem } from '../../../model/cartItemModel';
import { getImageUrl } from '../../../utils/imageUtils';
import FindSimilarModal from '../../../presentation/components/findSimilarModal/FindSimilarModal';
import {
  Card,
  Wrapper,
  CardImage,
  Content,
  Title,
  PriceContainer,
  Price,
  OldPrice,
  Overlay,
  OverlayIcon,
  HoverButtons,
  FindSimilar,
} from './ProductCell.styles';
import Button from '../button/Button';
import { normalizeLocale, withLocale } from '../../../utils/locale';
import { buildProductSlug } from '../../../utils/slug';

interface ProductCellProps {
  product: Product;
}

const ProductCell: React.FC<ProductCellProps> = ({ product }) => {
  const router = useRouter();
  const params = useParams<{ locale?: string }>();
  const locale = normalizeLocale(params?.locale);
  const [isSimilarOpen, setIsSimilarOpen] = useState(false);
  const imageSrc = getImageUrl(product.variant_image) || '/assets/logo.png';

  const handleProductDetailNavigation = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    router.push(
      withLocale(
        locale,
        `/product/${buildProductSlug(product.name, product.id)}`
      )
    );
  };

  const handleAddToCart = () => {
    const stored = localStorage.getItem('cartProducts');
    let cartItems: CartItem[] = [];

    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0 && parsed[0].bagId) {
          cartItems = parsed;
        } else {
          cartItems = parsed.map((p: Product, index: number) => ({
            bagId: `bag-${Date.now()}-${index}-${p.id}`,
            product: p,
            quantity: 1,
          }));
        }
      } catch {
        cartItems = [];
      }
    }

    const existingItem = cartItems.find(item => item.product.id === product.id);

    if (existingItem) {
      const updated = cartItems.filter(
        item => item.bagId !== existingItem.bagId
      );
      localStorage.setItem('cartProducts', JSON.stringify(updated));
    } else {
      const newItem: CartItem = {
        bagId: `bag-${Date.now()}-${product.id}`,
        product,
        quantity: 1,
      };
      cartItems.push(newItem);
      localStorage.setItem('cartProducts', JSON.stringify(cartItems));
    }

    window.dispatchEvent(new Event('cartUpdated'));
  };

  const handleLike = () => {
    const stored = localStorage.getItem('likedProducts');
    let likedProducts: Product[] = [];

    if (stored) {
      try {
        likedProducts = JSON.parse(stored);
      } catch {
        likedProducts = [];
      }
    }

    const existingIndex = likedProducts.findIndex(p => p.id === product.id);

    if (existingIndex !== -1) {
      likedProducts.splice(existingIndex, 1);
    } else {
      likedProducts.push(product);
    }

    localStorage.setItem('likedProducts', JSON.stringify(likedProducts));
    window.dispatchEvent(new Event('likedUpdated'));
  };

  return (
    <Card onClick={handleProductDetailNavigation}>
      {!product.availability && (
        <Overlay>
          <OverlayIcon>Unavailable</OverlayIcon>
        </Overlay>
      )}
      <Wrapper>
        <CardImage>
          <Image
            src={imageSrc}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 40vw, 15rem"
            style={{ objectFit: 'cover' }}
          />
          <FindSimilar onClick={(e: React.MouseEvent) => e.stopPropagation()}>
            <Button
              variant="tertiary"
              icon={
                <Image
                  src="/assets/heart.svg"
                  alt="like"
                  width={16}
                  height={16}
                />
              }
              onClick={handleLike}
            >
              Like
            </Button>
          </FindSimilar>
          <HoverButtons onClick={(e: React.MouseEvent) => e.stopPropagation()}>
            <Button
              variant="tertiary"
              icon={
                <Image
                  src="/assets/plus.svg"
                  alt="cart"
                  width={16}
                  height={16}
                />
              }
              onClick={() => setIsSimilarOpen(true)}
            >
              Find Similar
            </Button>
            <Button
              variant="tertiary"
              icon={
                <Image
                  src="/assets/cart.svg"
                  alt="cart"
                  width={16}
                  height={16}
                />
              }
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </HoverButtons>
        </CardImage>
        <Content>
          <Title>{product.name}</Title>
          <PriceContainer>
            {product.price_new ? (
              <>
                <Price>{product.price_new} USD</Price>
                <OldPrice>{product.price} USD</OldPrice>
              </>
            ) : (
              <Price>{product.price} USD</Price>
            )}
          </PriceContainer>
        </Content>
      </Wrapper>
      <FindSimilarModal
        isOpen={isSimilarOpen}
        onClose={() => setIsSimilarOpen(false)}
        product={product}
      />
    </Card>
  );
};

export default ProductCell;
