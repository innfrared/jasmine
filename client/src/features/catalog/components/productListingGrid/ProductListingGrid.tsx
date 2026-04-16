import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import type { ListingProduct } from '../../../../entities/catalog/listingProduct';
import InteractiveProductCell from '../InteractiveProductCell';
import { buildProductListingRows } from './productListingRows';
import {
  EditorialImageBlock,
  ProductListingGridRoot,
  ProductListingRowRoot,
} from './ProductListingGrid.styles';

type ProductListingGridProps = {
  products: ListingProduct[];
};

function ProductListingGrid({ products }: ProductListingGridProps) {
  const { t } = useTranslation<'translation'>();
  const rows = useMemo(() => buildProductListingRows(products), [products]);

  return (
    <ProductListingGridRoot>
      {rows.map((row, rowIndex) => (
        <ProductListingRowRoot key={row.id}>
          {row.products.map((product, productIndex) => (
            <InteractiveProductCell
              key={product.id}
              product={product}
              priority={rowIndex === 0 && productIndex < 2}
            />
          ))}
          {row.type === 'editorial' ? (
            <EditorialImageBlock
              $desktopSpan={row.imageSpan}
              $objectPosition={row.image.objectPosition}
            >
              <img
                src={row.image.src}
                alt={t(row.image.altKey)}
                loading="lazy"
              />
            </EditorialImageBlock>
          ) : null}
        </ProductListingRowRoot>
      ))}
    </ProductListingGridRoot>
  );
}

export default ProductListingGrid;
