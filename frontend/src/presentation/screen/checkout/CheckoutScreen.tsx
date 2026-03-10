'use client';

import React, { useState, useEffect, type ComponentType } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import { CartItem } from '../../../model/cartItemModel';
import { getImageUrl } from '../../../utils/imageUtils';
import { createOrderSession } from '../../../service/ordersService';
import { normalizeLocale, withLocale } from '../../../utils/locale';
import { buildProductSlug } from '../../../utils/slug';

type HeaderProps = {
  primaryColor: string;
  secondaryColor: string;
};

const HeaderComponent = Header as ComponentType<HeaderProps>;
import {
  CheckoutPageContainer,
  CheckoutContent,
  CheckoutTitle,
  CheckoutGrid,
  OrderSummarySection,
  OrderSummaryHeader,
  OrderSummaryTitle,
  OrderItemsList,
  OrderItem,
  OrderItemImage,
  OrderItemDetails,
  OrderItemName,
  OrderItemPrice,
  OrderItemQuantity,
  OrderItemRemove,
  OrderSummaryFooter,
  OrderSummaryRow,
  OrderSummaryTotal,
  CustomerDetailsSection,
  SectionTitle,
  FormGroup,
  FormLabel,
  FormInput,
  FormTextarea,
  PaymentSection,
  PlaceOrderButton,
  EmptyCartMessage,
  EmptyCartContainer,
} from './CheckoutScreen.styles';

const CheckoutScreen: React.FC = () => {
  const router = useRouter();
  const params = useParams<{ locale?: string }>();
  const locale = normalizeLocale(params?.locale);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    notes: '',
  });
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderError, setOrderError] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('cartProducts');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0 && parsed[0].bagId) {
          setCartItems(parsed as CartItem[]);
        } else {
          setCartItems(
            parsed.map((p: CartItem['product'], index: number) => ({
              bagId: `bag-${Date.now()}-${index}-${p.id}`,
              product: p,
              quantity: 1,
            }))
          );
        }
      } catch {
        setCartItems([]);
      }
    }
  }, []);

  const handleRemoveItem = (bagId: string) => {
    const updated = cartItems.filter(item => item.bagId !== bagId);
    setCartItems(updated);
    localStorage.setItem('cartProducts', JSON.stringify(updated));
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const handleQuantityChange = (bagId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    const updated = cartItems.map(item =>
      item.bagId === bagId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updated);
    localStorage.setItem('cartProducts', JSON.stringify(updated));
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => {
      const price = item.product.price_new || item.product.price;
      const numericPrice = parseFloat(price.replace(/[^\d.-]/g, '')) || 0;
      return sum + numericPrice * item.quantity;
    }, 0);
  };

  const calculateTotal = () => {
    return calculateSubtotal();
  };

  const handlePlaceOrder = async () => {
    if (isSubmitting) return;
    setOrderError('');

    if (!paymentMethod) {
      setOrderError('Please select a payment method.');
      return;
    }

    setIsSubmitting(true);

    try {
      const items = cartItems.map(item => ({
        product_id: item.product.id,
        quantity: item.quantity,
        unit_price: item.product.price_new || item.product.price,
      }));

      const payload = {
        customer: {
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          city: formData.city,
          postal_code: formData.postalCode,
        },
        items,
        payment_method: paymentMethod,
        notes: formData.notes || undefined,
        total: calculateTotal(),
      };

      const result = await createOrderSession(payload);
      localStorage.removeItem('cartProducts');
      window.dispatchEvent(new Event('cartUpdated'));
      router.push(withLocale(locale, `/order-confirmation/${result.id}`));
    } catch (error: unknown) {
      const message =
        error instanceof Error
          ? error.message
          : 'Order could not be created. Please try again.';
      setOrderError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleProductClick = (productName: string, productId: number) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    router.push(
      withLocale(locale, `/product/${buildProductSlug(productName, productId)}`)
    );
  };

  if (cartItems.length === 0) {
    return (
      <CheckoutPageContainer>
        <HeaderComponent primaryColor="#CC0C5C" secondaryColor="#F2A800" />
        <CheckoutContent>
          <Breadcrumb />
          <EmptyCartContainer>
            <EmptyCartMessage>Your cart is empty</EmptyCartMessage>
          </EmptyCartContainer>
        </CheckoutContent>
        <Footer />
      </CheckoutPageContainer>
    );
  }

  return (
    <CheckoutPageContainer>
      <HeaderComponent primaryColor="#CC0C5C" secondaryColor="#F2A800" />
      <CheckoutContent>
        <Breadcrumb />
        <CheckoutTitle>Checkout</CheckoutTitle>
        <CheckoutGrid>
          <div>
            <CustomerDetailsSection>
              <SectionTitle>Customer Details</SectionTitle>
              <FormGroup>
                <FormLabel>Full Name *</FormLabel>
                <FormInput
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  placeholder="John Doe"
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>Email *</FormLabel>
                <FormInput
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="john@example.com"
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>Phone *</FormLabel>
                <FormInput
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="+1 234 567 8900"
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>Address *</FormLabel>
                <FormTextarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  placeholder="Street address, apartment, suite, etc."
                  rows={3}
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>City *</FormLabel>
                <FormInput
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  placeholder="New York"
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>Postal Code *</FormLabel>
                <FormInput
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  required
                  placeholder="10001"
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>Order Notes (Optional)</FormLabel>
                <FormTextarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Special instructions for your order..."
                  rows={3}
                />
              </FormGroup>
            </CustomerDetailsSection>
          </div>

          <div>
            <OrderSummarySection>
              <OrderSummaryHeader>
                <OrderSummaryTitle>Order Summary</OrderSummaryTitle>
              </OrderSummaryHeader>
              <OrderItemsList>
                {cartItems.map(item => {
                  return (
                    <OrderItem
                      key={item.bagId}
                      onClick={() =>
                        handleProductClick(item.product.name, item.product.id)
                      }
                    >
                      <OrderItemImage>
                        <Image
                          src={
                            getImageUrl(item.product.variant_image) ||
                            '/assets/logo.png'
                          }
                          alt={item.product.name}
                          fill
                          sizes="64px"
                        />
                      </OrderItemImage>
                      <OrderItemDetails>
                        <OrderItemName>{item.product.name}</OrderItemName>
                        <OrderItemPrice>
                          {item.product.price_new || item.product.price}
                        </OrderItemPrice>
                        <OrderItemQuantity
                          onClick={(e: React.MouseEvent) => e.stopPropagation()}
                        >
                          <button
                            onClick={() =>
                              handleQuantityChange(
                                item.bagId,
                                item.quantity - 1
                              )
                            }
                            aria-label="Decrease quantity"
                          >
                            −
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() =>
                              handleQuantityChange(
                                item.bagId,
                                item.quantity + 1
                              )
                            }
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </OrderItemQuantity>
                      </OrderItemDetails>
                      <OrderItemRemove
                        onClick={(e: React.MouseEvent) => {
                          e.stopPropagation();
                          handleRemoveItem(item.bagId);
                        }}
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
                      </OrderItemRemove>
                    </OrderItem>
                  );
                })}
              </OrderItemsList>
              <OrderSummaryFooter>
                <OrderSummaryRow>
                  <span>Subtotal</span>
                  <span>${calculateSubtotal().toLocaleString()}</span>
                </OrderSummaryRow>
                <OrderSummaryTotal>
                  <span>Total</span>
                  <span>${calculateTotal().toLocaleString()}</span>
                </OrderSummaryTotal>
              </OrderSummaryFooter>
            </OrderSummarySection>

            <PaymentSection>
              <SectionTitle>Payment</SectionTitle>
              <div>
                <label>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={e => setPaymentMethod(e.target.value)}
                  />
                  Card
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cash_on_delivery"
                    checked={paymentMethod === 'cash_on_delivery'}
                    onChange={e => setPaymentMethod(e.target.value)}
                  />
                  Cash on delivery
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="bank_transfer"
                    checked={paymentMethod === 'bank_transfer'}
                    onChange={e => setPaymentMethod(e.target.value)}
                  />
                  Bank transfer
                </label>
              </div>
            </PaymentSection>

            {orderError && (
              <p style={{ color: '#cc0c5c', marginTop: '0.75rem' }}>
                {orderError}
              </p>
            )}

            <PlaceOrderButton
              onClick={handlePlaceOrder}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Placing order...' : 'Place Order'}
            </PlaceOrderButton>
          </div>
        </CheckoutGrid>
      </CheckoutContent>
      <Footer />
    </CheckoutPageContainer>
  );
};

export default CheckoutScreen;
