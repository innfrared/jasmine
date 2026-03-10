import { Product } from './productModel';

export interface CartItem {
  bagId: string;
  product: Product;
  quantity: number;
}
