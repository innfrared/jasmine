import type { Product } from '../../../../entities/catalog/product';
import { getCatalogEditorialImage } from './productListingEditorialImages';
import type { ProductListingRow } from './productListingGrid.types';

const STANDARD_ROW_PRODUCT_COUNT = 4;
const EDITORIAL_ROW_PRODUCT_COUNT = 2;

function buildRowId(
  rowType: ProductListingRow['type'],
  rowIndex: number,
  products: Product[]
) {
  const productIds = products.map(product => product.id).join('-') || 'empty';
  return `${rowType}-${rowIndex}-${productIds}`;
}

export function buildProductListingRows(
  products: Product[]
): ProductListingRow[] {
  const rows: ProductListingRow[] = [];
  let productIndex = 0;
  let rowIndex = 0;
  let editorialIndex = 0;

  while (productIndex < products.length) {
    const isEditorialRow = rowIndex % 2 === 1;
    const productCount = isEditorialRow
      ? EDITORIAL_ROW_PRODUCT_COUNT
      : STANDARD_ROW_PRODUCT_COUNT;
    const rowProducts = products.slice(
      productIndex,
      productIndex + productCount
    );
    productIndex += rowProducts.length;

    if (isEditorialRow) {
      rows.push({
        id: buildRowId('editorial', rowIndex, rowProducts),
        type: 'editorial',
        products: rowProducts,
        image: getCatalogEditorialImage(editorialIndex),
        imageSpan: Math.max(1, STANDARD_ROW_PRODUCT_COUNT - rowProducts.length),
      });
      editorialIndex += 1;
      rowIndex += 1;
      continue;
    }

    const remainingColumns = STANDARD_ROW_PRODUCT_COUNT - rowProducts.length;
    if (remainingColumns > 0) {
      rows.push({
        id: buildRowId('editorial', rowIndex, rowProducts),
        type: 'editorial',
        products: rowProducts,
        image: getCatalogEditorialImage(editorialIndex),
        imageSpan: remainingColumns,
      });
      editorialIndex += 1;
    } else {
      rows.push({
        id: buildRowId('products', rowIndex, rowProducts),
        type: 'products',
        products: rowProducts,
      });
    }

    rowIndex += 1;
  }

  return rows;
}
