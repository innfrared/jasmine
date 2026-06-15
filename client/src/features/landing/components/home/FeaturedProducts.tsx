import { useTranslation } from 'react-i18next';
import type { ListingProduct } from '@/entities/catalog/listingProduct';
import InteractiveProductCell from '@/features/catalog/components/InteractiveProductCell';
import {
  EditorialGrid,
  EmptyState,
  Eyebrow,
  Heading,
  Inner,
  Intro,
  ProductCell,
  Section,
} from './FeaturedProducts.styles';

type FeaturedProductsProps = {
  products: ListingProduct[];
};

function FeaturedProducts({ products }: FeaturedProductsProps) {
  const { t } = useTranslation<'translation'>();
  const slice = products.slice(0, 5);

  return (
    <Section aria-labelledby="featured-edit-heading">
      <Inner>
        <Intro>
          <Eyebrow>{t('landingHome.featured.eyebrow')}</Eyebrow>
          <Heading id="featured-edit-heading">
            {t('landingHome.featured.heading')}
          </Heading>
        </Intro>

        {slice.length === 0 ? (
          <EmptyState>{t('landingHome.featured.empty')}</EmptyState>
        ) : (
          <EditorialGrid>
            {slice.map((product, index) => (
              <ProductCell key={product.id}>
                <InteractiveProductCell
                  product={product}
                  priority={index < 2}
                />
              </ProductCell>
            ))}
          </EditorialGrid>
        )}
      </Inner>
    </Section>
  );
}

export default FeaturedProducts;
