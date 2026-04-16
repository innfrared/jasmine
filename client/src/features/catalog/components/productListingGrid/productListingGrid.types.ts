import type { ListingProduct } from '../../../../entities/catalog/listingProduct';

export type CatalogEditorialImage = {
  src: string;
  altKey: string;
  objectPosition: string;
};

export type ProductListingProductRow = {
  id: string;
  type: 'products';
  products: ListingProduct[];
};

export type ProductListingEditorialRow = {
  id: string;
  type: 'editorial';
  products: ListingProduct[];
  image: CatalogEditorialImage;
  imageSpan: number;
};

export type ProductListingRow =
  | ProductListingProductRow
  | ProductListingEditorialRow;
