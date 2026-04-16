import type { CartItem } from '../../entities/shoppingBag/cartItem';
import type { CreateOrderPayload } from '../../service/orderService';
import { parseMoneyValue } from '@/shared/formatters/money';

export type CheckoutFormData = {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  notes: string;
};

const getCartItemUnitPrice = (item: CartItem) => {
  return item.product.price_new || item.product.price;
};

export const getCheckoutSubtotal = (items: CartItem[]) => {
  return items.reduce((sum, item) => {
    return sum + parseMoneyValue(getCartItemUnitPrice(item)) * item.quantity;
  }, 0);
};

export const buildCreateOrderPayload = (
  formData: CheckoutFormData,
  paymentMethod: string,
  items: CartItem[]
): CreateOrderPayload => {
  const total = getCheckoutSubtotal(items);

  return {
    customer: {
      full_name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      city: formData.city,
      postal_code: formData.postalCode,
    },
    items: items.map(item => ({
      product_id: item.product.id,
      quantity: item.quantity,
      unit_price: getCartItemUnitPrice(item),
    })),
    payment_method: paymentMethod,
    notes: formData.notes || undefined,
    total,
  };
};
