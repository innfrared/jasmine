'use client';

import { useEffect, useMemo, useState, type ComponentType } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/shared/layout/header/Header';
import { getOrder, type OrderResponse } from '../../../service/orderService';
import { getImageUrl } from '@/shared/media/imageUtils';
import Button from '@/shared/ui/button';
import { useLocalizedRouting } from '@/shared/routing/localeRouting';
import { OrderConfirmationActions } from './OrderConfirmationPage.styles';
import {
  CheckoutPageContainer,
  CheckoutContent,
  CheckoutTitle,
  OrderSummarySection,
  OrderSummaryHeader,
  OrderSummaryTitle,
  OrderItemsList,
  OrderItem,
  OrderItemImage,
  OrderItemDetails,
  OrderItemName,
  OrderItemPrice,
  OrderSummaryFooter,
  OrderSummaryRow,
  OrderSummaryTotal,
  CustomerDetailsSection,
  SectionTitle,
} from '../../checkout/pages/CheckoutPage.styles';

type HeaderProps = {
  primaryColor: string;
  secondaryColor: string;
};

const HeaderComponent = Header as ComponentType<HeaderProps>;

const OrderConfirmationPage = () => {
  const { orderId } = useParams<{ orderId?: string }>();
  const { navigateLocalized } = useLocalizedRouting();
  const [order, setOrder] = useState<OrderResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchOrder = async () => {
      if (!orderId) {
        setError('Order not found.');
        setLoading(false);
        return;
      }

      try {
        const result = await getOrder(Number(orderId));
        setOrder(result);
      } catch (requestError: unknown) {
        setError(
          requestError instanceof Error
            ? requestError.message
            : 'Unable to load order details.'
        );
      } finally {
        setLoading(false);
      }
    };

    void fetchOrder();
  }, [orderId]);

  const orderTotal = useMemo(() => {
    if (!order) return null;
    if (typeof order.total === 'number') return order.total;
    if (typeof order.total === 'string') {
      const parsed = Number(order.total.replace(/[^\d.-]/g, ''));
      return Number.isFinite(parsed) ? parsed : null;
    }
    return null;
  }, [order]);

  const handleViewOrders = () => {
    navigateLocalized('/orders');
  };

  const handleContinueShopping = () => {
    navigateLocalized('/products');
  };

  return (
    <CheckoutPageContainer>
      <HeaderComponent primaryColor="#CC0C5C" secondaryColor="#F2A800" />
      <CheckoutContent>
        <CheckoutTitle>Order Confirmation</CheckoutTitle>

        {loading ? <p>Loading order details...</p> : null}
        {!loading && error ? <p>{error}</p> : null}

        {!loading && !error && order ? (
          <>
            <CustomerDetailsSection>
              <SectionTitle>Order Summary</SectionTitle>
              <p>Order ID: {order.id}</p>
              <p>Payment method: {order.payment_method || 'Not specified'}</p>
              <p>
                What happens next: We are preparing your handcrafted items. You
                will receive updates as your order progresses.
              </p>
            </CustomerDetailsSection>

            <OrderSummarySection>
              <OrderSummaryHeader>
                <OrderSummaryTitle>Items</OrderSummaryTitle>
              </OrderSummaryHeader>
              <OrderItemsList>
                {order.items?.map((item, index) => (
                  <OrderItem key={`${item.product_id}-${index}`}>
                    <OrderItemImage
                      src={getImageUrl(item.product?.variant_image || '')}
                      alt={item.product?.name || 'Order item'}
                    />
                    <OrderItemDetails>
                      <OrderItemName>
                        {item.product?.name || `Product ${item.product_id}`}
                      </OrderItemName>
                      <OrderItemPrice>
                        Qty: {item.quantity}
                        {item.unit_price ? ` · ${item.unit_price}` : ''}
                      </OrderItemPrice>
                    </OrderItemDetails>
                  </OrderItem>
                ))}
              </OrderItemsList>
              <OrderSummaryFooter>
                <OrderSummaryRow>
                  <span>Total</span>
                  <span>
                    {orderTotal !== null
                      ? `$${orderTotal.toLocaleString()}`
                      : '--'}
                  </span>
                </OrderSummaryRow>
                <OrderSummaryTotal>
                  <span>Grand total</span>
                  <span>
                    {orderTotal !== null
                      ? `$${orderTotal.toLocaleString()}`
                      : '--'}
                  </span>
                </OrderSummaryTotal>
              </OrderSummaryFooter>
            </OrderSummarySection>

            <CustomerDetailsSection>
              <SectionTitle>Shipping Address</SectionTitle>
              <p>{order.shipping_address?.full_name || '--'}</p>
              <p>{order.shipping_address?.address || '--'}</p>
              <p>
                {order.shipping_address?.city || '--'}{' '}
                {order.shipping_address?.postal_code || ''}
              </p>
              <p>{order.shipping_address?.phone || '--'}</p>
              <p>{order.shipping_address?.email || '--'}</p>
            </CustomerDetailsSection>

            <OrderConfirmationActions>
              <Button variant="primary" onClick={handleViewOrders}>
                View orders
              </Button>
              <Button variant="secondary" onClick={handleContinueShopping}>
                Continue shopping
              </Button>
            </OrderConfirmationActions>
          </>
        ) : null}
      </CheckoutContent>
    </CheckoutPageContainer>
  );
};

export default OrderConfirmationPage;
