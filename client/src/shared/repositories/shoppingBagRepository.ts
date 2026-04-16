import type { Product } from '@/entities/catalog/product';
import type { CartItem } from '@/entities/shoppingBag/cartItem';

const BAG_STORAGE_KEY = 'cartProducts';
const BAG_UPDATED_EVENT = 'cartUpdated';

const parseStoredBag = () => {
  if (typeof window === 'undefined') {
    return [];
  }

  const storedValue = localStorage.getItem(BAG_STORAGE_KEY);
  if (!storedValue) {
    return [];
  }

  try {
    const parsedValue = JSON.parse(storedValue);
    return Array.isArray(parsedValue) ? parsedValue : [];
  } catch {
    return [];
  }
};

const createBagId = (productId: number, index?: number) => {
  if (index !== undefined) {
    return `bag-${Date.now()}-${index}-${productId}`;
  }

  return `bag-${Date.now()}-${productId}`;
};

const normalizeBagItems = (items: unknown[]): CartItem[] => {
  if (
    items.length > 0 &&
    typeof items[0] === 'object' &&
    items[0] !== null &&
    'bagId' in items[0] &&
    'product' in items[0]
  ) {
    return items as CartItem[];
  }

  return (items as Product[]).map((product, index) => ({
    bagId: createBagId(product.id, index),
    product,
    quantity: 1,
  }));
};

const persistBagItems = (items: CartItem[]) => {
  localStorage.setItem(BAG_STORAGE_KEY, JSON.stringify(items));
  window.dispatchEvent(new Event(BAG_UPDATED_EVENT));
};

export const shoppingBagRepository = {
  getItems: () => {
    return normalizeBagItems(parseStoredBag());
  },
  saveItems: (items: CartItem[]) => {
    persistBagItems(items);
  },
  clear: () => {
    persistBagItems([]);
  },
  addProduct: (product: Product, quantity: number = 1) => {
    const currentItems = shoppingBagRepository.getItems();
    const existingItem = currentItems.find(
      item => item.product.id === product.id
    );

    if (existingItem) {
      return currentItems;
    }

    const nextItems = [
      ...currentItems,
      {
        bagId: createBagId(product.id),
        product,
        quantity,
      },
    ];

    persistBagItems(nextItems);
    return nextItems;
  },
  toggleProduct: (product: Product, quantity: number = 1) => {
    const currentItems = shoppingBagRepository.getItems();
    const existingItem = currentItems.find(
      item => item.product.id === product.id
    );

    if (existingItem) {
      const nextItems = currentItems.filter(
        item => item.bagId !== existingItem.bagId
      );
      persistBagItems(nextItems);
      return nextItems;
    }

    return shoppingBagRepository.addProduct(product, quantity);
  },
  removeItem: (bagId: string) => {
    const nextItems = shoppingBagRepository
      .getItems()
      .filter(item => item.bagId !== bagId);

    persistBagItems(nextItems);
    return nextItems;
  },
  updateQuantity: (bagId: string, quantity: number) => {
    if (quantity < 1) {
      return shoppingBagRepository.getItems();
    }

    const nextItems = shoppingBagRepository
      .getItems()
      .map(item => (item.bagId === bagId ? { ...item, quantity } : item));

    persistBagItems(nextItems);
    return nextItems;
  },
  containsProduct: (productId: number) => {
    return shoppingBagRepository
      .getItems()
      .some(item => item.product.id === productId);
  },
  getCount: () => {
    return shoppingBagRepository.getItems().reduce((sum, item) => {
      return sum + (item.quantity || 1);
    }, 0);
  },
};
