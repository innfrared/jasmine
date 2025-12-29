import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../../../model/productModel';
import { CartItem } from '../../../model/cartItemModel';
import {
  LikedModalContainer,
  LikedModalHeader,
  LikedModalTitle,
  CloseButton,
  LikedItemsList,
  LikedItem,
  LikedItemImage,
  LikedItemDetails,
  LikedItemName,
  LikedItemPrice,
  LikedItemActions,
  LikedItemCartButton,
  LikedItemRemove,
  EmptyLikedMessage,
} from './LikedModal.styles';

type LikedModalProps = {
  isOpen: boolean;
  onClose: () => void;
  isScrolled: boolean;
};

const LikedModal: React.FC<LikedModalProps> = ({ isOpen, onClose, isScrolled }) => {
  const [likedProducts, setLikedProducts] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const navigate = useNavigate();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateLiked = () => {
      const stored = localStorage.getItem('likedProducts');
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          setLikedProducts(Array.isArray(parsed) ? parsed : []);
        } catch {
          setLikedProducts([]);
        }
      } else {
        setLikedProducts([]);
      }
    };

    const updateCart = () => {
      const stored = localStorage.getItem('cartProducts');
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed) && parsed.length > 0 && parsed[0].bagId) {
            setCartItems(parsed as CartItem[]);
          } else {
            // Migrate old format
            setCartItems(parsed.map((p: Product, index: number) => ({
              bagId: `bag-${Date.now()}-${index}-${p.id}`,
              product: p,
              quantity: 1,
            })));
          }
        } catch {
          setCartItems([]);
        }
      } else {
        setCartItems([]);
      }
    };

    updateLiked();
    updateCart();
    window.addEventListener('storage', updateLiked);
    window.addEventListener('likedUpdated', updateLiked);
    window.addEventListener('storage', updateCart);
    window.addEventListener('cartUpdated', updateCart);

    return () => {
      window.removeEventListener('storage', updateLiked);
      window.removeEventListener('likedUpdated', updateLiked);
      window.removeEventListener('storage', updateCart);
      window.removeEventListener('cartUpdated', updateCart);
    };
  }, []);

  // Close modal when clicking outside
  useEffect(() => {
    if (!isOpen) return;
    
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    window.addEventListener('mousedown', handleClickOutside);
    return () => window.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  const isProductInCart = (productId: number): boolean => {
    return cartItems.some(item => item.product.id === productId);
  };

  const handleCartToggle = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    const stored = localStorage.getItem('cartProducts');
    let currentCartItems: CartItem[] = [];
    
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0 && parsed[0].bagId) {
          currentCartItems = parsed;
        } else {
          currentCartItems = parsed.map((p: Product, index: number) => ({
            bagId: `bag-${Date.now()}-${index}-${p.id}`,
            product: p,
            quantity: 1,
          }));
        }
      } catch {
        currentCartItems = [];
      }
    }

    const existingItem = currentCartItems.find(item => item.product.id === product.id);
    
    if (existingItem) {
      // Remove from cart
      const updated = currentCartItems.filter(item => item.bagId !== existingItem.bagId);
      localStorage.setItem('cartProducts', JSON.stringify(updated));
    } else {
      // Add to cart
      const newItem: CartItem = {
        bagId: `bag-${Date.now()}-${product.id}`,
        product,
        quantity: 1,
      };
      currentCartItems.push(newItem);
      localStorage.setItem('cartProducts', JSON.stringify(currentCartItems));
    }
    
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const handleRemoveProduct = (productId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = likedProducts.filter(p => p.id !== productId);
    setLikedProducts(updated);
    localStorage.setItem('likedProducts', JSON.stringify(updated));
    window.dispatchEvent(new Event('likedUpdated'));
  };

  const handleProductClick = (product: Product) => {
    navigate(
      `/products/product/${encodeURIComponent(product.name)}?id=${product.id}`
    );
    onClose();
  };

  const formatPrice = (price: string) => {
    return price;
  };

  if (!isOpen) return null;

  return (
    <LikedModalContainer ref={modalRef} $isScrolled={isScrolled}>
      <LikedModalHeader>
        <LikedModalTitle>Liked ({likedProducts.length})</LikedModalTitle>
        <CloseButton onClick={onClose} aria-label="Close liked">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </CloseButton>
      </LikedModalHeader>

      {likedProducts.length === 0 ? (
        <EmptyLikedMessage>You haven't liked any products yet</EmptyLikedMessage>
      ) : (
        <LikedItemsList>
          {likedProducts.map((product) => {
            const inCart = isProductInCart(product.id);
            return (
              <LikedItem key={product.id} onClick={() => handleProductClick(product)}>
                <LikedItemImage src={product.image_main} alt={product.name} />
                <LikedItemDetails>
                  <LikedItemName>{product.name}</LikedItemName>
                  <LikedItemPrice>{formatPrice(product.price_new || product.price)}</LikedItemPrice>
                </LikedItemDetails>
                <LikedItemActions>
                  <LikedItemCartButton
                    onClick={(e) => handleCartToggle(product, e)}
                    aria-label={inCart ? "Remove from cart" : "Add to cart"}
                    $inCart={inCart}
                  >
                    {inCart ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <path d="M16 10a4 4 0 0 1-8 0" />
                      </svg>
                    )}
                  </LikedItemCartButton>
                  <LikedItemRemove
                    onClick={(e) => handleRemoveProduct(product.id, e)}
                    aria-label="Remove from liked"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </LikedItemRemove>
                </LikedItemActions>
              </LikedItem>
            );
          })}
        </LikedItemsList>
      )}
    </LikedModalContainer>
  );
};

export default LikedModal;

