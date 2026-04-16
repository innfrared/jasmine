import { apiClient } from './apiClient';
import { API_ENDPOINTS } from '@/shared/api/endpoints';

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

export const createOrder = (payload: CreateOrderPayload) =>
  apiClient.post<CreateOrderResponse>(API_ENDPOINTS.orders.list, {
    body: payload,
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

export const getOrder = (orderId: number) =>
  apiClient.get<OrderResponse>(API_ENDPOINTS.orders.details(orderId));

export type OrderListItem = {
  id: number;
  status?: string;
  total?: number | string;
  created_at?: string;
};

export const listOrders = () =>
  apiClient.get<OrderListItem[]>(API_ENDPOINTS.orders.list);
