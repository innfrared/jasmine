'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useAuth } from '../../../context/AuthContext';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import {
  listOrdersSession,
  type OrderListItem,
} from '../../../service/ordersService';
import {
  OrdersContainer,
  OrdersContent,
  OrdersHeader,
  OrdersTitle,
  EmptyState,
  EmptyStateIcon,
  EmptyStateText,
  OrderList,
  OrderCard,
  OrderHeader,
  OrderId,
  OrderDate,
  OrderStatus,
  OrderTotal,
  OrderTotalLabel,
  OrderTotalValue,
} from './OrdersScreen.styles';
import { normalizeLocale, withLocale } from '../../../utils/locale';
import { useThemeColors } from '../../hooks/useThemeColors';

const OrdersScreen: React.FC = () => {
  const { user, isLoading: authLoading } = useAuth();
  const router = useRouter();
  const params = useParams<{ locale?: string }>();
  const locale = normalizeLocale(params?.locale);
  const [orders, setOrders] = useState<OrderListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (authLoading) return;
    if (!user) {
      router.push(withLocale(locale, '/login'));
      return;
    }

    const fetchOrders = async () => {
      setLoading(true);
      setError('');
      try {
        const result = await listOrdersSession();
        setOrders(Array.isArray(result) ? result : []);
      } catch (err: unknown) {
        const message =
          err instanceof Error ? err.message : 'Failed to load orders.';
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user, authLoading, router, locale]);

  const { primaryColor, secondaryColor } = useThemeColors();

  return (
    <>
      <Header primaryColor={primaryColor} secondaryColor={secondaryColor} />
      <OrdersContainer>
        <OrdersContent>
          <Breadcrumb />
          <OrdersHeader>
            <OrdersTitle>Order History</OrdersTitle>
          </OrdersHeader>

          {loading ? (
            <EmptyState>
              <EmptyStateText>Loading orders...</EmptyStateText>
            </EmptyState>
          ) : error ? (
            <EmptyState>
              <EmptyStateText>{error}</EmptyStateText>
            </EmptyState>
          ) : orders.length === 0 ? (
            <EmptyState>
              <EmptyStateIcon>
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M9 11l3 3L22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
              </EmptyStateIcon>
              <EmptyStateText>No orders yet</EmptyStateText>
              <EmptyStateText
                style={{
                  fontSize: '0.9rem',
                  color: '#666',
                  marginTop: '0.5rem',
                }}
              >
                Your order history will appear here
              </EmptyStateText>
            </EmptyState>
          ) : (
            <OrderList>
              {orders.map(order => (
                <OrderCard key={order.id}>
                  <OrderHeader>
                    <div>
                      <OrderId>Order #{order.id}</OrderId>
                      <OrderDate>
                        {order.created_at
                          ? new Date(order.created_at).toLocaleDateString()
                          : '—'}
                      </OrderDate>
                    </div>
                    <OrderStatus $status={order.status || 'pending'}>
                      {order.status || 'pending'}
                    </OrderStatus>
                  </OrderHeader>
                  <OrderTotal>
                    <OrderTotalLabel>Total:</OrderTotalLabel>
                    <OrderTotalValue>
                      {order.total !== undefined ? `$${order.total}` : '--'}
                    </OrderTotalValue>
                  </OrderTotal>
                </OrderCard>
              ))}
            </OrderList>
          )}
        </OrdersContent>
      </OrdersContainer>
      <Footer />
    </>
  );
};

export default OrdersScreen;
