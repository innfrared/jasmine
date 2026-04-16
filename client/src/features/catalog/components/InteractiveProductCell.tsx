import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type KeyboardEvent,
  type MouseEvent,
} from 'react';
import { useTranslation } from 'react-i18next';
import type {
  Product,
  VariantProductPreview,
} from '../../../entities/catalog/product';
import { shoppingBagRepository } from '@/shared/repositories/shoppingBagRepository';
import { wishlistRepository } from '@/shared/repositories/wishlistRepository';
import { getResponsiveImageSet } from '@/shared/media/imageUtils';
import { useLocalizedRouting } from '@/shared/routing/localeRouting';
import {
  ActionIcon,
  Actions,
  Card,
  CardImage,
  ColorSwatch,
  Content,
  Price,
  PriceContainer,
  Swatches,
  Title,
  Wrapper,
} from '@/shared/ui/productCell/ProductCell.styles';

type InteractiveProductCellProps = {
  product: Product;
  priority?: boolean;
};

type ProductColorSwatch = {
  id: number;
  name: string;
  palette: string;
  href: string;
  isActive: boolean;
};

function getProductHref(product: Pick<Product, 'id' | 'name'>) {
  return `/products/product/${encodeURIComponent(product.name)}?id=${product.id}`;
}

function createVariantSwatch(
  variant: VariantProductPreview,
  activeProductId: number
): ProductColorSwatch | null {
  if (!variant.color_palette && !variant.color_name) {
    return null;
  }

  return {
    id: variant.id,
    name: variant.color_name || variant.color_palette || variant.name,
    palette: variant.color_palette || variant.color_name || '#d8d2c8',
    href: getProductHref({ id: variant.id, name: variant.name }),
    isActive: variant.id === activeProductId,
  };
}

function getProductColorSwatches(product: Product): ProductColorSwatch[] {
  const swatches: ProductColorSwatch[] = [];

  if (product.variant_color_palette || product.variant_color_name) {
    swatches.push({
      id: product.id,
      name:
        product.variant_color_name ||
        product.variant_color_palette ||
        product.name,
      palette:
        product.variant_color_palette ||
        product.variant_color_name ||
        '#d8d2c8',
      href: getProductHref(product),
      isActive: true,
    });
  }

  product.variants
    ?.map(variant => createVariantSwatch(variant, product.id))
    .forEach(swatch => {
      if (!swatch) {
        return;
      }

      const swatchKey = `${swatch.palette}-${swatch.name}`.toLowerCase();
      const exists = swatches.some(
        currentSwatch =>
          `${currentSwatch.palette}-${currentSwatch.name}`.toLowerCase() ===
          swatchKey
      );

      if (!exists) {
        swatches.push(swatch);
      }
    });

  return swatches;
}

const InteractiveProductCell = ({
  product,
  priority = false,
}: InteractiveProductCellProps) => {
  const { t } = useTranslation<'translation'>();
  const { navigateLocalized } = useLocalizedRouting();
  const [isLiked, setIsLiked] = useState(false);
  const [isInBag, setIsInBag] = useState(false);

  const swatches = useMemo(() => getProductColorSwatches(product), [product]);
  const productImage = useMemo(
    () =>
      getResponsiveImageSet(product.image_url, {
        widths: [360, 540, 720],
      }),
    [product.image_url]
  );
  const price = product.price_new || product.price;
  const currency = product.currency || 'USD';

  const syncStoredState = useCallback(() => {
    setIsLiked(
      wishlistRepository.getProducts().some(item => item.id === product.id)
    );
    setIsInBag(shoppingBagRepository.containsProduct(product.id));
  }, [product.id]);

  useEffect(() => {
    syncStoredState();

    window.addEventListener('likedUpdated', syncStoredState);
    window.addEventListener('cartUpdated', syncStoredState);

    return () => {
      window.removeEventListener('likedUpdated', syncStoredState);
      window.removeEventListener('cartUpdated', syncStoredState);
    };
  }, [product.id, syncStoredState]);

  const handleProductDetailNavigation = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigateLocalized(getProductHref(product));
  };

  const handleCardKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'Enter' && event.key !== ' ') {
      return;
    }

    event.preventDefault();
    handleProductDetailNavigation();
  };

  const handleAddToCart = (event: MouseEvent) => {
    event.stopPropagation();
    shoppingBagRepository.toggleProduct(product);
    setIsInBag(shoppingBagRepository.containsProduct(product.id));
  };

  const handleLike = (event: MouseEvent) => {
    event.stopPropagation();
    const nextProducts = wishlistRepository.toggleProduct(product);
    setIsLiked(nextProducts.some(item => item.id === product.id));
  };

  const handleSwatchClick = (event: MouseEvent, swatch: ProductColorSwatch) => {
    event.stopPropagation();

    if (swatch.isActive) {
      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigateLocalized(swatch.href);
  };

  return (
    <Card
      onClick={handleProductDetailNavigation}
      onKeyDown={handleCardKeyDown}
      role="link"
      tabIndex={0}
      aria-label={product.name}
    >
      <Wrapper>
        <CardImage>
          <img
            src={productImage.src}
            srcSet={productImage.srcSet}
            sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
            alt={product.name}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
          />
        </CardImage>

        <Content>
          <Title>{product.name}</Title>
          <PriceContainer>
            <Price>{`${price} ${currency}`}</Price>
          </PriceContainer>

          {swatches.length > 0 ? (
            <Swatches aria-label={t('productsPage.color')}>
              {swatches.map(swatch => (
                <ColorSwatch
                  key={`${swatch.id}-${swatch.palette}`}
                  type="button"
                  aria-label={swatch.name}
                  title={swatch.name}
                  $colorValue={swatch.palette}
                  $isActive={swatch.isActive}
                  onClick={event => handleSwatchClick(event, swatch)}
                />
              ))}
            </Swatches>
          ) : null}

          <Actions>
            <ActionIcon
              type="button"
              aria-label={t('productCard.like')}
              $isActive={isLiked}
              onClick={handleLike}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill={isLiked ? 'currentColor' : 'none'}
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </ActionIcon>
            <ActionIcon
              type="button"
              aria-label={t('productCard.addToCart')}
              $isActive={isInBag}
              onClick={handleAddToCart}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </ActionIcon>
          </Actions>
        </Content>
      </Wrapper>
    </Card>
  );
};

export default InteractiveProductCell;
