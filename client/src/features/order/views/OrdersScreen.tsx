'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import Header from '@/shared/layout/header/Header';
import Breadcrumb from '@/shared/layout/breadcrumb/Breadcrumb';
import { listOrders, type OrderListItem } from '../../../service/orderService';
import { useLocalizedRouting } from '@/shared/routing/localeRouting';
import {
  OrdersContainer,
  OrdersContent,
  OrdersHeader,
  OrdersTitle,
  EmptyState,
  EmptyStateIcon,
  EmptyStateText,
  EmptyStateSubtext,
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

const OrdersScreen = () => {
  const { user } = useAuth();
  const { navigateLocalized } = useLocalizedRouting();
  const [orders, setOrders] = useState<OrderListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!user) {
      navigateLocalized('/');
      return;
    }

    const fetchOrders = async () => {
      setLoading(true);
      setError('');
      try {
        const result = await listOrders();
        setOrders(Array.isArray(result) ? result : []);
      } catch (requestError: unknown) {
        setError(
          requestError instanceof Error
            ? requestError.message
            : 'Failed to load orders.'
        );
      } finally {
        setLoading(false);
      }
    };

    void fetchOrders();
  }, [user, navigateLocalized]);

  const getColorsFromStorage = () => {
    if (typeof window !== 'undefined') {
      const primaryColor =
        localStorage.getItem('theme_primary') ||
        'linear-gradient(135deg, #a67c00 0%, #bf9b30 25%, #ffd700 50%, #d4af37 75%, #b8860b 100%)';
      const secondaryColor =
        localStorage.getItem('theme_secondary') || '#001f3f';
      return { primaryColor, secondaryColor };
    }
    return {
      primaryColor: 'linear-gradient(135deg, #c39a37 0%, #b8860b 100%)',
      secondaryColor: '#001f3f',
    };
  };

  const { primaryColor, secondaryColor } = getColorsFromStorage();

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
              <EmptyStateSubtext>
                Your order history will appear here
              </EmptyStateSubtext>
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
    </>
  );
};

export default OrdersScreen;
