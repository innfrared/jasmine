'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
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
import { normalizeLocale, withLocale } from '../../../utils/locale';
import { buildProductSlug } from '../../../utils/slug';

type CartModalProps = {
  isOpen: boolean;
  onClose: () => void;
  isScrolled: boolean;
};

const CartModal: React.FC<CartModalProps> = ({
  isOpen,
  onClose,
  isScrolled,
}) => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [isClosing, setIsClosing] = useState(false);
  const router = useRouter();
  const params = useParams<{ locale?: string }>();
  const locale = normalizeLocale(params?.locale);
  const modalRef = useRef<HTMLDivElement>(null);

  const migrateCartData = (data: unknown): CartItemType[] => {
    if (!Array.isArray(data)) return [];

    const isCartItem = (item: unknown): item is CartItemType =>
      !!item &&
      typeof item === 'object' &&
      'bagId' in item &&
      'product' in item;

    if (data.length > 0 && isCartItem(data[0])) {
      return data as CartItemType[];
    }

    return data.map((product, index: number) => ({
      bagId: `bag-${Date.now()}-${index}-${(product as Product).id}`,
      product: product as Product,
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
          if (migrated.length > 0 && !parsed[0]?.bagId) {
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

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300);
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        handleClose();
      }
    };

    window.addEventListener('mousedown', handleClickOutside);
    return () => window.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, handleClose]);

  const handleRemoveProduct = (bagId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = cartItems.filter(item => item.bagId !== bagId);
    setCartItems(updated);
    localStorage.setItem('cartProducts', JSON.stringify(updated));
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const handleQuantityChange = (
    bagId: string,
    newQuantity: number,
    e?: React.MouseEvent
  ) => {
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
    router.push(
      withLocale(
        locale,
        `/product/${buildProductSlug(product.name, product.id)}`
      )
    );
    onClose();
  };

  const handleCheckout = () => {
    handleClose();
    setTimeout(() => router.push(withLocale(locale, '/cart')), 300);
  };

  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => {
      const price = item.product.price_new || item.product.price;
      const numericPrice = parseFloat(price.replace(/[^\d.-]/g, '')) || 0;
      return sum + numericPrice * item.quantity;
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
    <CartModalContainer
      ref={modalRef}
      $isScrolled={isScrolled}
      $isClosing={isClosing}
    >
      <CartModalHeader>
        <CartModalTitle>Cart ({getTotalItems()})</CartModalTitle>
        <CloseButton onClick={handleClose} aria-label="Close cart">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
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
            {cartItems.map(item => {
              const product = item.product;
              const itemPrice =
                parseFloat(
                  (product.price_new || product.price).replace(/[^\d.-]/g, '')
                ) || 0;
              const itemTotal = itemPrice * item.quantity;

              return (
                <CartItem
                  key={item.bagId}
                  onClick={() => handleProductClick(product)}
                >
                  <CartItemImage>
                    <Image
                      src={
                        getImageUrl(product.variant_image) || '/assets/logo.png'
                      }
                      alt={product.name}
                      fill
                      sizes="56px"
                    />
                  </CartItemImage>
                  <CartItemDetails>
                    <CartItemBagId>
                      ID: {item.bagId.split('-').slice(-2).join('-')}
                    </CartItemBagId>
                    <CartItemName>{product.name}</CartItemName>
                    <CartItemPrice>
                      {formatPrice(product.price_new || product.price)}
                    </CartItemPrice>
                    <CartItemQuantity>
                      <QuantityControls
                        onClick={(e: React.MouseEvent) => e.stopPropagation()}
                      >
                        <QuantityButton
                          onClick={(e: React.MouseEvent) =>
                            handleQuantityChange(
                              item.bagId,
                              item.quantity - 1,
                              e
                            )
                          }
                          aria-label="Decrease quantity"
                        >
                          −
                        </QuantityButton>
                        <QuantityInput
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(
                            e: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            const val = parseInt(e.target.value) || 1;
                            handleQuantityChange(item.bagId, val);
                          }}
                          onClick={(e: React.MouseEvent) => e.stopPropagation()}
                        />
                        <QuantityButton
                          onClick={(e: React.MouseEvent) =>
                            handleQuantityChange(
                              item.bagId,
                              item.quantity + 1,
                              e
                            )
                          }
                          aria-label="Increase quantity"
                        >
                          +
                        </QuantityButton>
                      </QuantityControls>
                      <span>
                        Total: {formatPrice(`${itemTotal.toLocaleString()} ֏`)}
                      </span>
                    </CartItemQuantity>
                  </CartItemDetails>
                  <CartItemRemove
                    onClick={e => handleRemoveProduct(item.bagId, e)}
                    aria-label="Remove item"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
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
              <span>
                {formatPrice(`${calculateTotal().toLocaleString()} ֏`)}
              </span>
            </CartTotal>
            <CheckoutButton onClick={handleCheckout}>Checkout</CheckoutButton>
          </CartFooter>
        </>
      )}
    </CartModalContainer>
  );
};

export default CartModal;
