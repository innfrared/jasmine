import type { Product } from '../../entities/catalog/product';

const WISHLIST_STORAGE_KEY = 'likedProducts';
const WISHLIST_UPDATED_EVENT = 'likedUpdated';

const parseStoredWishlist = () => {
  if (typeof window === 'undefined') {
    return [];
  }

  const storedValue = localStorage.getItem(WISHLIST_STORAGE_KEY);
  if (!storedValue) {
    return [];
  }

  try {
    const parsedValue = JSON.parse(storedValue);
    return Array.isArray(parsedValue) ? (parsedValue as Product[]) : [];
  } catch {
    return [];
  }
};

const persistWishlist = (products: Product[]) => {
  localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(products));
  window.dispatchEvent(new Event(WISHLIST_UPDATED_EVENT));
};

export const wishlistRepository = {
  getProducts: () => {
    return parseStoredWishlist();
  },
  saveProducts: (products: Product[]) => {
    persistWishlist(products);
  },
  removeProduct: (productId: number) => {
    const nextProducts = wishlistRepository
      .getProducts()
      .filter(product => product.id !== productId);

    persistWishlist(nextProducts);
    return nextProducts;
  },
  toggleProduct: (product: Product) => {
    const currentProducts = wishlistRepository.getProducts();
    const exists = currentProducts.some(item => item.id === product.id);
    const nextProducts = exists
      ? currentProducts.filter(item => item.id !== product.id)
      : [...currentProducts, product];

    persistWishlist(nextProducts);
    return nextProducts;
  },
  getCount: () => {
    return wishlistRepository.getProducts().length;
  },
};
