import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../../../model/productModel';
import { CartItem as CartItemType } from '../../../model/cartItemModel';
import { getImageUrl } from '../../../utils/imageUtils';
import {
  CartModalContainer,
  CartModalHeader,
  CartModalTitle,
  CloseButton,
  CartItemsList,
  CartItem,
  CartItemImage,
  CartItemDetails,
  CartItemName,
  CartItemPrice,
  CartItemQuantity,
  QuantityControls,
  QuantityButton,
  QuantityInput,
  CartItemRemove,
  CartFooter,
  CartTotal,
  CheckoutButton,
  EmptyCartMessage,
  CartItemBagId,
} from './CartModal.styles';

type CartModalProps = {
  isOpen: boolean;
  onClose: () => void;
  isScrolled: boolean;
};

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose, isScrolled }) => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [isClosing, setIsClosing] = useState(false);
  const navigate = useNavigate();
  const modalRef = useRef<HTMLDivElement>(null);

  // Convert old cart format (Product[]) to new format (CartItem[])
  const migrateCartData = (data: any): CartItemType[] => {
    if (!data || !Array.isArray(data)) return [];
    
    // Check if it's already in new format
    if (data.length > 0 && data[0].bagId && data[0].product) {
      return data as CartItemType[];
    }
    
    // Migrate from old format (Product[]) to new format (CartItem[])
    return data.map((product: Product, index: number) => ({
      bagId: `bag-${Date.now()}-${index}-${product.id}`,
      product,
      quantity: 1,
    }));
  };

  useEffect(() => {
    if (isOpen) {
      setIsClosing(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const updateCart = () => {
      const stored = localStorage.getItem('cartProducts');
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          const migrated = migrateCartData(parsed);
          setCartItems(migrated);
          // Save migrated format back to localStorage
          if (migrated.length > 0 && (!parsed[0]?.bagId)) {
            localStorage.setItem('cartProducts', JSON.stringify(migrated));
          }
        } catch {
          setCartItems([]);
        }
      } else {
        setCartItems([]);
      }
    };

    updateCart();
    window.addEventListener('storage', updateCart);
    window.addEventListener('cartUpdated', updateCart);

    return () => {
      window.removeEventListener('storage', updateCart);
      window.removeEventListener('cartUpdated', updateCart);
    };
  }, []);

  // Handle close animation
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300); // Match animation duration
  };

  // Close modal when clicking outside
  useEffect(() => {
    if (!isOpen) return;
    
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        handleClose();
      }
    };

    window.addEventListener('mousedown', handleClickOutside);
    return () => window.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  const handleRemoveProduct = (bagId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = cartItems.filter(item => item.bagId !== bagId);
    setCartItems(updated);
    localStorage.setItem('cartProducts', JSON.stringify(updated));
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const handleQuantityChange = (bagId: string, newQuantity: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (newQuantity < 1) return;
    
    const updated = cartItems.map(item =>
      item.bagId === bagId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updated);
    localStorage.setItem('cartProducts', JSON.stringify(updated));
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const handleProductClick = (product: Product) => {
    navigate(
      `/products/details/${encodeURIComponent(product.name)}?id=${product.id}`
    );
    onClose();
  };

  const handleCheckout = () => {
    handleClose();
    setTimeout(() => navigate('/cart'), 300);
  };

  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => {
      const price = item.product.price_new || item.product.price;
      const numericPrice = parseFloat(price.replace(/[^\d.-]/g, '')) || 0;
      return sum + (numericPrice * item.quantity);
    }, 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  };

  const formatPrice = (price: string) => {
    return price;
  };

  if (!isOpen && !isClosing) return null;

  return (
    <CartModalContainer ref={modalRef} $isScrolled={isScrolled} $isClosing={isClosing}>
      <CartModalHeader>
        <CartModalTitle>Cart ({getTotalItems()})</CartModalTitle>
        <CloseButton onClick={handleClose} aria-label="Close cart">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </CloseButton>
      </CartModalHeader>

        {cartItems.length === 0 ? (
          <EmptyCartMessage>Your cart is empty</EmptyCartMessage>
        ) : (
          <>
            <CartItemsList>
              {cartItems.map((item) => {
                const product = item.product;
                const itemPrice = parseFloat((product.price_new || product.price).replace(/[^\d.-]/g, '')) || 0;
                const itemTotal = itemPrice * item.quantity;
                
                return (
                  <CartItem key={item.bagId} onClick={() => handleProductClick(product)}>
                    <CartItemImage src={getImageUrl(product.variant_image)} alt={product.name} />
                    <CartItemDetails>
                      <CartItemBagId>ID: {item.bagId.split('-').slice(-2).join('-')}</CartItemBagId>
                      <CartItemName>{product.name}</CartItemName>
                      <CartItemPrice>{formatPrice(product.price_new || product.price)}</CartItemPrice>
                      <CartItemQuantity>
                        <QuantityControls onClick={(e: React.MouseEvent) => e.stopPropagation()}>
                          <QuantityButton
                            onClick={(e: React.MouseEvent) => handleQuantityChange(item.bagId, item.quantity - 1, e)}
                            aria-label="Decrease quantity"
                          >
                            −
                          </QuantityButton>
                          <QuantityInput
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                              const val = parseInt(e.target.value) || 1;
                              handleQuantityChange(item.bagId, val);
                            }}
                            onClick={(e: React.MouseEvent) => e.stopPropagation()}
                          />
                          <QuantityButton
                            onClick={(e: React.MouseEvent) => handleQuantityChange(item.bagId, item.quantity + 1, e)}
                            aria-label="Increase quantity"
                          >
                            +
                          </QuantityButton>
                        </QuantityControls>
                        <span>Total: {formatPrice(`${itemTotal.toLocaleString()} ֏`)}</span>
                      </CartItemQuantity>
                    </CartItemDetails>
                    <CartItemRemove
                      onClick={(e) => handleRemoveProduct(item.bagId, e)}
                      aria-label="Remove item"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </CartItemRemove>
                  </CartItem>
                );
              })}
            </CartItemsList>

            <CartFooter>
              <CartTotal>
                <span>Total:</span>
                <span>{formatPrice(`${calculateTotal().toLocaleString()} ֏`)}</span>
              </CartTotal>
              <CheckoutButton onClick={handleCheckout}>
                Checkout
              </CheckoutButton>
            </CartFooter>
          </>
        )}
    </CartModalContainer>
  );
};

export default CartModal;

