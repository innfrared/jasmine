import { useMemo } from 'react';
import type { ListingProduct } from '@/entities/catalog/listingProduct';
import { getResponsiveImageSet } from '@/shared/media/imageUtils';
import { useLocalizedRouting } from '@/shared/routing/localeRouting';
import { getProductDetailPath } from '@/shared/routing/productPaths';
import { imageSizes } from '@/shared/styles/breakpoints';
import {
  CardLink,
  ImageWrap,
  Meta,
  PriceLine,
  Title,
} from './HomeFeaturedProductCard.styles';

type HomeFeaturedProductCardProps = {
  product: ListingProduct;
  priority?: boolean;
  variant?: 'featured' | 'support';
};

function formatPrice(product: ListingProduct) {
  const price = product.price_new || product.price;
  const currency = product.currency || 'USD';
  if (!price) {
    return '';
  }
  return `${currency} ${price}`;
}

function HomeFeaturedProductCard({
  product,
  priority = false,
  variant = 'support',
}: HomeFeaturedProductCardProps) {
  const { getLocalizedPath } = useLocalizedRouting();
  const href = getLocalizedPath(getProductDetailPath(product));

  const image = useMemo(
    () =>
      getResponsiveImageSet(product.image_url, {
        widths: [360, 540, 720],
      }),
    [product.image_url]
  );

  const priceLabel = formatPrice(product);

  return (
    <CardLink href={href} aria-label={product.name} scroll>
      <ImageWrap $variant={variant}>
        <img
          src={image.src}
          srcSet={image.srcSet}
          sizes={imageSizes.homeFeaturedProductCard}
          alt={product.name}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
        />
      </ImageWrap>
      <Meta $variant={variant}>
        <Title>{product.name}</Title>
        {priceLabel ? <PriceLine>{priceLabel}</PriceLine> : null}
      </Meta>
    </CardLink>
  );
}

export default HomeFeaturedProductCard;
