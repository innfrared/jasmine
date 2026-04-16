'use client';

import {
  useEffect,
  useState,
  type ChangeEvent,
  type ComponentType,
} from 'react';
import { useTranslation } from 'react-i18next';
import Header from '@/shared/layout/header/Header';
import Breadcrumb from '@/shared/layout/breadcrumb/Breadcrumb';
import type { CartItem } from '../../../entities/shoppingBag/cartItem';
import {
  buildCreateOrderPayload,
  getCheckoutSubtotal,
  type CheckoutFormData,
} from '../order';
import { shoppingBagRepository } from '@/shared/repositories/shoppingBagRepository';
import { getImageUrl } from '@/shared/media/imageUtils';
import { createOrder } from '../../../service/orderService';
import { useLocalizedRouting } from '@/shared/routing/localeRouting';
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
  OrderErrorMessage,
} from './CheckoutPage.styles';

type HeaderProps = {
  primaryColor: string;
  secondaryColor: string;
};

const HeaderComponent = Header as ComponentType<HeaderProps>;

const CheckoutPage = () => {
  const { t } = useTranslation<'translation'>();
  const { navigateLocalized } = useLocalizedRouting();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [formData, setFormData] = useState<CheckoutFormData>({
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
    setCartItems(shoppingBagRepository.getItems());
  }, []);

  const handleRemoveItem = (bagId: string) => {
    setCartItems(shoppingBagRepository.removeItem(bagId));
  };

  const handleQuantityChange = (bagId: string, newQuantity: number) => {
    if (newQuantity < 1) {
      return;
    }

    setCartItems(shoppingBagRepository.updateQuantity(bagId, newQuantity));
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const calculateSubtotal = () => {
    return getCheckoutSubtotal(cartItems);
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
      const payload = buildCreateOrderPayload(
        formData,
        paymentMethod,
        cartItems
      );
      const result = await createOrder(payload);
      shoppingBagRepository.clear();
      setCartItems([]);
      navigateLocalized(`/order-confirmation/${result.id}`);
    } catch (error: unknown) {
      setOrderError(
        error instanceof Error
          ? error.message
          : 'Order could not be created. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleProductClick = (productName: string, productId: number) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigateLocalized(
      `/products/product/${encodeURIComponent(productName)}?id=${productId}`
    );
  };

  if (cartItems.length === 0) {
    return (
      <CheckoutPageContainer>
        <HeaderComponent primaryColor="#CC0C5C" secondaryColor="#F2A800" />
        <CheckoutContent>
          <Breadcrumb />
          <EmptyCartContainer>
            <EmptyCartMessage>{t('shoppingBag.empty')}</EmptyCartMessage>
          </EmptyCartContainer>
        </CheckoutContent>
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
                  onChange={handleTextareaChange}
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
                  onChange={handleTextareaChange}
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
                      <OrderItemImage
                        src={getImageUrl(item.product.image_url)}
                        alt={item.product.name}
                      />
                      <OrderItemDetails>
                        <OrderItemName>{item.product.name}</OrderItemName>
                        <OrderItemPrice>
                          {item.product.price_new || item.product.price}
                        </OrderItemPrice>
                        <OrderItemQuantity
                          onClick={event => event.stopPropagation()}
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
                            -
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
                        onClick={event => {
                          event.stopPropagation();
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
                    onChange={event => setPaymentMethod(event.target.value)}
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
                    onChange={event => setPaymentMethod(event.target.value)}
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
                    onChange={event => setPaymentMethod(event.target.value)}
                  />
                  Bank transfer
                </label>
              </div>
            </PaymentSection>

            {orderError ? (
              <OrderErrorMessage>{orderError}</OrderErrorMessage>
            ) : null}

            <PlaceOrderButton
              onClick={handlePlaceOrder}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Placing order...' : 'Place Order'}
            </PlaceOrderButton>
          </div>
        </CheckoutGrid>
      </CheckoutContent>
    </CheckoutPageContainer>
  );
};

export default CheckoutPage;
