export const API_ENDPOINTS = {
  auth: {
    register: 'auth/register',
    login: 'auth/login',
    refresh: 'auth/refresh',
  },
  user: {
    me: 'me',
  },
  products: {
    list: 'products',
    details: (productId: number) => `products/${productId}`,
  },
  categories: {
    list: 'categories',
    all: 'categories/all',
  },
  orders: {
    list: 'orders',
    details: (orderId: number) => `orders/${orderId}`,
  },
  addresses: {
    list: 'addresses',
    details: (addressId: number) => `addresses/${addressId}`,
    setDefault: (addressId: number) => `addresses/${addressId}/set-default`,
  },
} as const;
