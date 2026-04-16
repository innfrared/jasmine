import type { OrderListItem, OrderResponse } from '../../service/orderService';

export interface OrderSummary {
  id: number;
  status?: string;
  total?: number | string;
  createdAt?: string;
}

export interface OrderDetails {
  id: number;
  items: OrderResponse['items'];
  total: number | string;
  paymentMethod?: string;
  shippingAddress?: OrderResponse['shipping_address'];
}

export const mapOrderListItemToSummary = (
  order: OrderListItem
): OrderSummary => ({
  id: order.id,
  status: order.status,
  total: order.total,
  createdAt: order.created_at,
});

export const mapOrderResponseToDetails = (
  order: OrderResponse
): OrderDetails => ({
  id: order.id,
  items: order.items,
  total: order.total,
  paymentMethod: order.payment_method,
  shippingAddress: order.shipping_address,
});
