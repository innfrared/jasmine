import type { Product } from '../../../../entities/catalog/product';

export type CatalogEditorialImage = {
  src: string;
  altKey: string;
  objectPosition: string;
};

export type ProductListingProductRow = {
  id: string;
  type: 'products';
  products: Product[];
};

export type ProductListingEditorialRow = {
  id: string;
  type: 'editorial';
  products: Product[];
  image: CatalogEditorialImage;
  imageSpan: number;
};

export type ProductListingRow =
  | ProductListingProductRow
  | ProductListingEditorialRow;
