import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../../../model/productModel';
import { CartItem } from '../../../model/cartItemModel';
import { getImageUrl } from '../../../utils/imageUtils';
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
import Button from '../../../ui/styles/button/Button';

interface ProductCellProps {
  product: Product;
}

const ProductCell: React.FC<ProductCellProps> = ({ product }) => {
  const navigate = useNavigate();

  const handleProductDetailNavigation = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(
      `/products/product/${encodeURIComponent(product.name)}?id=${product.id}`
    );
  };

  const handleAddToCart = () => {
    const stored = localStorage.getItem('cartProducts');
    let cartItems: CartItem[] = [];
    
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        // Check if it's new format (CartItem[]) or old format (Product[])
        if (Array.isArray(parsed) && parsed.length > 0 && parsed[0].bagId) {
          cartItems = parsed;
        } else {
          // Migrate old format
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

    // Check if product already exists in cart
    const existingItem = cartItems.find(item => item.product.id === product.id);
    
    if (existingItem) {
      // Remove from cart
      const updated = cartItems.filter(item => item.bagId !== existingItem.bagId);
      localStorage.setItem('cartProducts', JSON.stringify(updated));
    } else {
      // Add to cart with new bagId
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

    // Check if product already exists in liked
    const existingIndex = likedProducts.findIndex(p => p.id === product.id);
    
    if (existingIndex !== -1) {
      // Remove from liked
      likedProducts.splice(existingIndex, 1);
    } else {
      // Add to liked
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
          <img
            src={getImageUrl(product.variant_image)}
            alt={product.name}
          />
          <FindSimilar onClick={(e: React.MouseEvent) => e.stopPropagation()}>
            <Button
              variant="tertiary"
              icon={<img src="/assets/heart.svg" alt="like" />}
              onClick={handleLike}
            >
              Like
            </Button>
          </FindSimilar>
          <HoverButtons onClick={(e: React.MouseEvent) => e.stopPropagation()}>
            <Button
              variant="tertiary"
              icon={<img src="/assets/plus.svg" alt="cart" />}
              onClick={() => {
                // TODO: Implement find similar functionality
              }}
            >
              Find Similar
            </Button>
            <Button
              variant="tertiary"
              icon={<img src="/assets/cart.svg" alt="cart" />}
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
    </Card>
  );
};

export default ProductCell;
