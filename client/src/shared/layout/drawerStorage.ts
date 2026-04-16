import type { CartItem } from '../../entities/shoppingBag/cartItem';
import type { Product } from '../../entities/catalog/product';
import { shoppingBagRepository } from '@/shared/repositories/shoppingBagRepository';
import { wishlistRepository } from '@/shared/repositories/wishlistRepository';

export const getStoredWishlistProducts = () => {
  return wishlistRepository.getProducts();
};

export const saveWishlistProducts = (products: Product[]) => {
  wishlistRepository.saveProducts(products);
};

export const getStoredCartItems = () => {
  return shoppingBagRepository.getItems();
};

export const saveCartItems = (items: CartItem[]) => {
  shoppingBagRepository.saveItems(items);
};

export const removeCartItem = (bagId: string) => {
  return shoppingBagRepository.removeItem(bagId);
};

export const updateCartItemQuantity = (bagId: string, quantity: number) => {
  return shoppingBagRepository.updateQuantity(bagId, quantity);
};

export const removeWishlistProduct = (productId: number) => {
  return wishlistRepository.removeProduct(productId);
};

export const isProductInCart = (productId: number) => {
  return shoppingBagRepository.containsProduct(productId);
};

export const addProductToCart = (product: Product) => {
  return shoppingBagRepository.addProduct(product);
};
