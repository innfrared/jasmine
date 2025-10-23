export interface Product {
  id: number;
  name: string;
  brand: string;
  price: string;
  price_new?: string;
  price_credit?: string;
  image_main: string;
  images_additional: string[];
  category_id: number;
  specifications: Record<string, string>;
  availability: boolean;
}
