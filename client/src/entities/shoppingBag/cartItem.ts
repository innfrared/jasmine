import type { Product } from '../catalog/product';

export interface CartItem {
  bagId: string;
  product: Product;
  quantity: number;
}
