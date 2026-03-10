import { httpClient, type RequestOptions } from './httpClient';
import { sessionFetch } from './sessionClient';

export type OrderItemPayload = {
  product_id: number;
  quantity: number;
  unit_price: string;
};

export type CreateOrderPayload = {
  customer: {
    full_name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    postal_code: string;
  };
  items: OrderItemPayload[];
  payment_method: string;
  notes?: string;
  total: number;
};

export type CreateOrderResponse = {
  id: number;
};

export const createOrder = (
  payload: CreateOrderPayload,
  options: RequestOptions = {}
) =>
  httpClient.post<CreateOrderResponse>('orders/', {
    body: payload,
    ...options,
  });

export type OrderItemResponse = {
  product_id: number;
  quantity: number;
  unit_price?: string;
  product?: {
    name: string;
    variant_image?: string | null;
  };
};

export type OrderResponse = {
  id: number;
  items: OrderItemResponse[];
  total: number | string;
  payment_method?: string;
  shipping_address?: {
    full_name?: string;
    email?: string;
    phone?: string;
    address?: string;
    city?: string;
    postal_code?: string;
  };
};

export const getOrder = (orderId: number, options: RequestOptions = {}) =>
  httpClient.get<OrderResponse>(`orders/${orderId}`, options);

export type OrderListItem = {
  id: number;
  status?: string;
  total?: number | string;
  created_at?: string;
};

export const listOrders = (options: RequestOptions = {}) =>
  httpClient.get<OrderListItem[]>('orders/', options);

export const listOrdersSession = () =>
  sessionFetch<OrderListItem[]>('/api/orders');

export const getOrderSession = (orderId: number) =>
  sessionFetch<OrderResponse>(`/api/orders/${orderId}`);

export const createOrderSession = (payload: CreateOrderPayload) =>
  sessionFetch<CreateOrderResponse>('/api/orders', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
