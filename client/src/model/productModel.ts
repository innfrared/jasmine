export interface ProductVariant {
  name: string;
  value: string;
  image?: string;
  sizes: string[];
  colorPalette: string;
}

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
  category_name?: string;
  subcategory_name?: string;
  specifications: Record<string, string>;
  availability: boolean;
  variants?: ProductVariant[];
}
