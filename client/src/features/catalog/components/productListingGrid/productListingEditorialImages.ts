import type { CatalogEditorialImage } from './productListingGrid.types';

const CATALOG_EDITORIAL_IMAGES: CatalogEditorialImage[] = [
  {
    src: '/assets/model/SAR_0969.jpg',
    altKey: 'productsPage.editorialImageAlt',
    objectPosition: '58% 28%',
  },
  {
    src: '/assets/model/split/SAR_0896.jpg',
    altKey: 'productsPage.editorialImageAlt',
    objectPosition: '50% 50%',
  },
  {
    src: '/assets/model/split/secondary/SAR_0151.jpg',
    altKey: 'productsPage.editorialImageAlt',
    objectPosition: '50% 22%',
  },
  {
    src: '/assets/model/split/secondary/SAR_0185.jpg',
    altKey: 'productsPage.editorialImageAlt',
    objectPosition: '50% 18%',
  },
];

export function getCatalogEditorialImage(index: number) {
  return CATALOG_EDITORIAL_IMAGES[index % CATALOG_EDITORIAL_IMAGES.length];
}
