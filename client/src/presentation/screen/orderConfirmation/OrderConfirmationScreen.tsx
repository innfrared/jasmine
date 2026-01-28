import React, { useEffect, useMemo, useState, type ComponentType } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { getOrder, type OrderResponse } from '../../../service/orderService';
import { getImageUrl } from '../../../utils/imageUtils';
import Button from '../../../ui/styles/button/Button';
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
} from '../checkout/CheckoutScreen.styles';

type HeaderProps = {
  primaryColor: string;
  secondaryColor: string;
};

const HeaderComponent = Header as ComponentType<HeaderProps>;

const OrderConfirmationScreen: React.FC = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
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
      } catch (err: any) {
        setError(err?.message || 'Unable to load order details.');
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
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

  return (
    <CheckoutPageContainer>
      <HeaderComponent primaryColor="#CC0C5C" secondaryColor="#F2A800" />
      <CheckoutContent>
        <CheckoutTitle>Order Confirmation</CheckoutTitle>

        {loading && <p>Loading order details...</p>}

        {!loading && error && <p>{error}</p>}

        {!loading && !error && order && (
          <>
            <CustomerDetailsSection>
              <SectionTitle>Order Summary</SectionTitle>
              <p>Order ID: {order.id}</p>
              <p>Payment method: {order.payment_method || 'Not specified'}</p>
              <p>
                What happens next: We are preparing your handcrafted items.
                You will receive updates as your order progresses.
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
                    {orderTotal !== null ? `$${orderTotal.toLocaleString()}` : '--'}
                  </span>
                </OrderSummaryRow>
                <OrderSummaryTotal>
                  <span>Grand total</span>
                  <span>
                    {orderTotal !== null ? `$${orderTotal.toLocaleString()}` : '--'}
                  </span>
                </OrderSummaryTotal>
              </OrderSummaryFooter>
            </OrderSummarySection>

            <CustomerDetailsSection>
              <SectionTitle>Shipping Address</SectionTitle>
              <p>{order.shipping_address?.full_name || '—'}</p>
              <p>{order.shipping_address?.address || '—'}</p>
              <p>
                {order.shipping_address?.city || '—'}{' '}
                {order.shipping_address?.postal_code || ''}
              </p>
              <p>{order.shipping_address?.phone || '—'}</p>
              <p>{order.shipping_address?.email || '—'}</p>
            </CustomerDetailsSection>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              <Button variant="primary" onClick={() => navigate('/orders')}>
                View orders
              </Button>
              <Button variant="secondary" onClick={() => navigate('/products')}>
                Continue shopping
              </Button>
            </div>
          </>
        )}
      </CheckoutContent>
      <Footer />
    </CheckoutPageContainer>
  );
};

export default OrderConfirmationScreen;
