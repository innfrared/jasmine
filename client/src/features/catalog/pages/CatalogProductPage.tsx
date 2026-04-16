'use client';

import { useEffect, useMemo, useState, type MouseEvent } from 'react';
import Header from '@/shared/layout/header/Header';
import { useTranslation } from 'react-i18next';
import Breadcrumb from '@/shared/layout/breadcrumb/Breadcrumb';
import type { Product } from '../../../entities/catalog/product';
import { shoppingBagRepository } from '@/shared/repositories/shoppingBagRepository';
import { getImageUrl } from '@/shared/media/imageUtils';
import { sanitizeCssColor } from '@/shared/security/inputSanitizers';
import {
  getCatalogNavKeyFromTaxonomy,
  getCatalogPathForNavKey,
  getCatalogRouteDefinition,
  getCatalogSectionNavKey,
  resolveCatalogPathFromTaxonomy,
} from '@/shared/config/navigation';
import {
  ProductPageContainer,
  ProductContent,
  ProductSectionsColumn,
  ProductGrid,
  MediaColumn,
  MainImageFrame,
  MainImage,
  ThumbnailRail,
  ThumbnailButton,
  ThumbnailImage,
  DetailsColumn,
  BrandLabel,
  ProductTitle,
  ProductDescription,
  PriceRow,
  CurrentPrice,
  PreviousPrice,
  AvailabilityPill,
  SectionBlock,
  SectionTitle,
  SwatchGrid,
  SwatchButton,
  SwatchDot,
  SwatchText,
  VariantMetaGrid,
  VariantMetaItem,
  VariantMetaLabel,
  VariantMetaValue,
  QuantityRow,
  QuantityLimit,
  ActionsRow,
  ActionButton,
  SpecificationsSection,
  SpecsList,
  SpecRow,
  SpecLabel,
  SpecValue,
  ErrorMessage,
  QuantityButton,
  QuantityMax,
  QuantityValue,
} from './CatalogProductPage.styles';

type VariantOption = {
  id: number;
  name: string;
  availability: string;
  colorLabel: string | null;
  colorPalette: string | null;
  imageUrl: string | null;
  material: string | null;
  cordDiameter: string | null;
  cordType: string | null;
  handles: string | null;
  care: string | null;
  description: string | null;
  value: string | null;
  price: string | null;
  sortOrder: number | null;
  productId: number;
};

function readLegacyImageField(value: unknown) {
  if (!value || typeof value !== 'object') {
    return null;
  }

  const rawImage = (value as Record<string, unknown>).variant_image;
  return typeof rawImage === 'string' ? normalizeOptionalText(rawImage) : null;
}

function getProductPrimaryImage(product: Product | null | undefined) {
  if (!product) {
    return null;
  }

  return (
    normalizeOptionalText(product.image_url) ?? readLegacyImageField(product)
  );
}

function getVariantPrimaryImage(variant: Product['variants'][number]) {
  return (
    normalizeOptionalText(variant.image_url) ??
    normalizeOptionalText(variant.image) ??
    readLegacyImageField(variant)
  );
}

function normalizeOptionalText(value: string | null | undefined) {
  if (!value) {
    return null;
  }

  const normalized = value.trim();
  return normalized.length > 0 ? normalized : null;
}

function formatSpecLabel(key: string) {
  return key
    .replace(/_/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

type CatalogProductPageProps = {
  product: Product;
};

const CatalogProductPage = ({ product }: CatalogProductPageProps) => {
  const [selectedVariantId, setSelectedVariantId] = useState<number | null>(
    null
  );
  const [selectedImage, setSelectedImage] = useState('');
  const [quantity, setQuantity] = useState(1);
  const { t } = useTranslation<'translation'>();

  const variantOptions = useMemo<VariantOption[]>(() => {
    if (!product) {
      return [];
    }

    const fromDetailed = (product.variants_detailed ?? []).map(variant => ({
      id: variant.id,
      name: product.name,
      availability: product.availability,
      colorLabel: normalizeOptionalText(variant.color),
      colorPalette: null,
      imageUrl: normalizeOptionalText(variant.image_url),
      material: normalizeOptionalText(variant.material),
      cordDiameter: normalizeOptionalText(variant.cord_diameter),
      cordType: normalizeOptionalText(variant.cord_type),
      handles: normalizeOptionalText(variant.handles),
      care: normalizeOptionalText(variant.care),
      description: normalizeOptionalText(variant.description),
      value: null,
      price: null,
      sortOrder: variant.sort_order ?? null,
      productId: product.id,
    }));

    const fromPayload = (product.variant_options ?? []).map(payloadOption => ({
      id: payloadOption.id,
      name: payloadOption.is_current
        ? product.name
        : `Variant ${payloadOption.id}`,
      availability: product.availability,
      colorLabel: normalizeOptionalText(payloadOption.color_name),
      colorPalette: normalizeOptionalText(payloadOption.color_palette),
      imageUrl: normalizeOptionalText(payloadOption.image),
      material: null,
      cordDiameter: null,
      cordType: null,
      handles: null,
      care: null,
      description: null,
      value: null,
      price: null,
      sortOrder: null,
      productId: product.id,
    }));

    const fromLegacy = (product.variants ?? []).map(variant => ({
      id: variant.id,
      name: variant.name,
      availability: variant.availability,
      colorLabel: normalizeOptionalText(variant.color_name ?? variant.color),
      colorPalette: normalizeOptionalText(variant.color_palette),
      imageUrl: getVariantPrimaryImage(variant),
      material: normalizeOptionalText(variant.material),
      cordDiameter: normalizeOptionalText(variant.cord_diameter),
      cordType: normalizeOptionalText(variant.cord_type),
      handles: normalizeOptionalText(variant.handles),
      care: normalizeOptionalText(variant.care),
      description: normalizeOptionalText(variant.description),
      value: normalizeOptionalText(variant.value),
      price: normalizeOptionalText(variant.price),
      sortOrder: variant.sort_order ?? null,
      productId: variant.id,
    }));

    const baseVariant: VariantOption = {
      id: product.id,
      name: product.name,
      availability: product.availability,
      colorLabel: normalizeOptionalText(product.variant_color_name),
      colorPalette: normalizeOptionalText(product.variant_color_palette),
      imageUrl: getProductPrimaryImage(product),
      material: null,
      cordDiameter: null,
      cordType: null,
      handles: null,
      care: null,
      description: normalizeOptionalText(product.description),
      value: null,
      price: normalizeOptionalText(product.price_new ?? product.price),
      sortOrder: null,
      productId: product.id,
    };

    const prioritized =
      fromDetailed.length > 0
        ? fromDetailed
        : fromPayload.length > 0
          ? fromPayload
          : fromLegacy.length > 0
            ? fromLegacy
            : [baseVariant];

    const deduped = Array.from(
      prioritized
        .reduce((accumulator, variant) => {
          const key = `${variant.colorLabel ?? ''}|${variant.imageUrl ?? ''}`;
          if (!accumulator.has(key)) {
            accumulator.set(key, variant);
          }
          return accumulator;
        }, new Map<string, VariantOption>())
        .values()
    );

    deduped.sort((left, right) => {
      const leftOrder = left.sortOrder ?? Number.MAX_SAFE_INTEGER;
      const rightOrder = right.sortOrder ?? Number.MAX_SAFE_INTEGER;
      return leftOrder - rightOrder;
    });

    return deduped;
  }, [product]);

  useEffect(() => {
    if (variantOptions.length > 0) {
      setSelectedVariantId(variantOptions[0].id);
      setQuantity(1);
    }
  }, [variantOptions]);

  const activeVariant = useMemo(() => {
    if (variantOptions.length === 0) {
      return null;
    }

    if (selectedVariantId === null) {
      return variantOptions[0];
    }

    return (
      variantOptions.find(variant => variant.id === selectedVariantId) ??
      variantOptions[0]
    );
  }, [selectedVariantId, variantOptions]);

  const galleryImages = useMemo(() => {
    const rawImages = [
      activeVariant?.imageUrl ?? null,
      ...variantOptions.map(variant => variant.imageUrl),
      getProductPrimaryImage(product),
    ].filter((imageUrl): imageUrl is string => Boolean(imageUrl));

    return Array.from(new Set(rawImages)).map(imageUrl =>
      getImageUrl(imageUrl)
    );
  }, [activeVariant?.imageUrl, product, variantOptions]);

  useEffect(() => {
    if (galleryImages.length === 0) {
      setSelectedImage('');
      return;
    }

    const activeImage = activeVariant?.imageUrl
      ? getImageUrl(activeVariant.imageUrl)
      : null;
    setSelectedImage(activeImage ?? galleryImages[0]);
  }, [activeVariant?.imageUrl, galleryImages]);

  const resolvedMainImage = useMemo(() => {
    if (selectedImage) {
      return selectedImage;
    }

    if (galleryImages.length > 0) {
      return galleryImages[0];
    }

    const productFallbackImage = getProductPrimaryImage(product);
    return productFallbackImage ? getImageUrl(productFallbackImage) : '';
  }, [galleryImages, product, selectedImage]);

  const maxQuantity = useMemo(() => {
    if (!product?.specifications) return null;
    const rawLimit =
      product.specifications.quantity_limit ||
      product.specifications.max_quantity ||
      product.specifications.max_qty;
    if (!rawLimit) return null;
    const parsed = Number(rawLimit);
    if (!Number.isFinite(parsed) || parsed < 1) return null;
    return parsed;
  }, [product]);

  useEffect(() => {
    if (maxQuantity && quantity > maxQuantity) {
      setQuantity(maxQuantity);
    }
  }, [maxQuantity, quantity]);

  const selectedProduct = useMemo(() => {
    if (!product || !activeVariant) {
      return product;
    }

    return {
      ...product,
      id: activeVariant.productId,
      name: activeVariant.name || product.name,
      availability: activeVariant.availability || product.availability,
      image_url: activeVariant.imageUrl ?? product.image_url,
      variant_color_name:
        activeVariant.colorLabel ?? product.variant_color_name,
      variant_color_palette:
        activeVariant.colorPalette ?? product.variant_color_palette,
      price: activeVariant.price ?? product.price,
      price_new: activeVariant.price ?? product.price_new,
      price_old: product.price_old,
      description: activeVariant.description ?? product.description,
    };
  }, [activeVariant, product]);

  const isInCart = useMemo(() => {
    if (!selectedProduct) {
      return false;
    }

    return shoppingBagRepository.containsProduct(selectedProduct.id);
  }, [selectedProduct]);

  const handleAddToCart = (event: MouseEvent) => {
    event.stopPropagation();
    if (!selectedProduct) {
      return;
    }
    shoppingBagRepository.toggleProduct(selectedProduct, quantity);
  };

  const handleCompareClick = (event: MouseEvent) => {
    event.stopPropagation();
    if (!selectedProduct) {
      return;
    }
    const stored = JSON.parse(localStorage.getItem('compareProducts') || '[]');
    const exists = stored.find(
      (currentProduct: Product) => currentProduct.id === selectedProduct.id
    );
    const updated = exists
      ? stored.filter(
          (currentProduct: Product) => currentProduct.id !== selectedProduct.id
        )
      : [...stored, selectedProduct];
    localStorage.setItem('compareProducts', JSON.stringify(updated));
    window.dispatchEvent(new Event('compareUpdated'));
  };

  const productCatalogNavKey = getCatalogNavKeyFromTaxonomy({
    categoryName: product.category?.name,
    categorySlug: product.category?.slug,
    subcategoryName: product.subcategory?.name,
    subcategorySlug: product.subcategory?.slug,
  });
  const productCatalogSectionNavKey =
    getCatalogSectionNavKey(productCatalogNavKey);
  const productCatalogDefinition = productCatalogNavKey
    ? getCatalogRouteDefinition(productCatalogNavKey)
    : undefined;
  const productCatalogSectionDefinition = productCatalogSectionNavKey
    ? getCatalogRouteDefinition(productCatalogSectionNavKey)
    : undefined;
  const productCatalogPath = productCatalogNavKey
    ? getCatalogPathForNavKey(productCatalogNavKey)
    : null;
  const productCatalogSectionPath = productCatalogSectionNavKey
    ? getCatalogPathForNavKey(productCatalogSectionNavKey)
    : null;
  const breadcrumbCategoryName = productCatalogSectionDefinition
    ? t(productCatalogSectionDefinition.labelKey)
    : product.category?.name || undefined;
  const breadcrumbCategoryPath = productCatalogSectionPath
    ? productCatalogSectionPath
    : resolveCatalogPathFromTaxonomy({
        categoryName: product.category?.name,
        categorySlug: product.category?.slug,
      }) || undefined;
  const breadcrumbSubcategoryName =
    productCatalogDefinition &&
    productCatalogSectionNavKey &&
    productCatalogNavKey !== productCatalogSectionNavKey
      ? t(productCatalogDefinition.labelKey)
      : product.subcategory?.name || undefined;
  const breadcrumbSubcategoryPath =
    productCatalogDefinition &&
    productCatalogSectionNavKey &&
    productCatalogNavKey !== productCatalogSectionNavKey
      ? (productCatalogPath ?? undefined)
      : resolveCatalogPathFromTaxonomy({
          categoryName: product.category?.name,
          categorySlug: product.category?.slug,
          subcategoryName: product.subcategory?.name,
          subcategorySlug: product.subcategory?.slug,
        }) || undefined;
  const variantDetailRows = [
    { label: 'Color', value: activeVariant?.colorLabel },
    { label: 'Palette', value: activeVariant?.colorPalette },
    { label: 'Material', value: activeVariant?.material },
    { label: 'Handles', value: activeVariant?.handles },
    { label: 'Cord diameter', value: activeVariant?.cordDiameter },
    { label: 'Cord type', value: activeVariant?.cordType },
    { label: 'Care', value: activeVariant?.care },
    { label: 'Variant note', value: activeVariant?.description },
    { label: 'Accent value', value: activeVariant?.value },
  ].filter(row => Boolean(row.value));
  const productSubcategories =
    product.subcategories
      ?.map(subcategory => subcategory.name)
      .filter(Boolean) ?? [];

  return (
    <ProductPageContainer>
      <Header primaryColor="#CC0C5C" secondaryColor="#F2A800" />
      <ProductContent>
        <Breadcrumb
          categoryName={breadcrumbCategoryName}
          categoryPath={breadcrumbCategoryPath}
          subcategoryName={breadcrumbSubcategoryName}
          subcategoryPath={breadcrumbSubcategoryPath}
          productName={product.name}
        />
        <ProductSectionsColumn>
          <ProductGrid>
            <MediaColumn>
              <MainImageFrame>
                {resolvedMainImage ? (
                  <MainImage
                    src={resolvedMainImage}
                    alt={activeVariant?.name || product.name}
                  />
                ) : (
                  <ErrorMessage>No product image available.</ErrorMessage>
                )}
              </MainImageFrame>
              {galleryImages.length > 1 ? (
                <ThumbnailRail>
                  {galleryImages.map((image, index) => (
                    <ThumbnailButton
                      key={`${image}-${index}`}
                      type="button"
                      $isActive={selectedImage === image}
                      onClick={() => setSelectedImage(image)}
                    >
                      <ThumbnailImage
                        src={image}
                        alt={`Preview ${index + 1}`}
                      />
                    </ThumbnailButton>
                  ))}
                </ThumbnailRail>
              ) : null}
            </MediaColumn>

            <DetailsColumn>
              <BrandLabel>{product.brand || 'Jasmine Atelier'}</BrandLabel>
              <ProductTitle>{activeVariant?.name || product.name}</ProductTitle>
              {normalizeOptionalText(product.description) ? (
                <ProductDescription>{product.description}</ProductDescription>
              ) : null}
              {productSubcategories.length > 0 ? (
                <ProductDescription>
                  {productSubcategories.join(' • ')}
                </ProductDescription>
              ) : null}

              <PriceRow>
                {product.price_new ? (
                  <>
                    <CurrentPrice>{`${product.price_new} ${product.currency}`}</CurrentPrice>
                    <PreviousPrice>{`${product.price_old || product.price} ${product.currency}`}</PreviousPrice>
                  </>
                ) : (
                  <CurrentPrice>
                    {`${activeVariant?.price ?? product.price} ${product.currency}`}
                  </CurrentPrice>
                )}
                <AvailabilityPill
                  $available={activeVariant?.availability === 'in_stock'}
                >
                  {activeVariant?.availability === 'in_stock'
                    ? t('in_stock')
                    : t('out_of_stock')}
                </AvailabilityPill>
              </PriceRow>

              {variantOptions.length > 0 ? (
                <SectionBlock>
                  <SectionTitle>Color variants</SectionTitle>
                  <SwatchGrid>
                    {variantOptions.map(variant => (
                      <SwatchButton
                        key={variant.id}
                        type="button"
                        $isActive={variant.id === activeVariant?.id}
                        onClick={() => setSelectedVariantId(variant.id)}
                      >
                        <SwatchDot
                          $colorValue={sanitizeCssColor(
                            variant.colorPalette,
                            '#1a1a1a'
                          )}
                        />
                        <SwatchText>
                          {variant.colorLabel || variant.name}
                        </SwatchText>
                      </SwatchButton>
                    ))}
                  </SwatchGrid>
                </SectionBlock>
              ) : null}

              <QuantityRow>
                <QuantityButton
                  type="button"
                  onClick={() =>
                    setQuantity(previous => Math.max(1, previous - 1))
                  }
                  aria-label="Decrease quantity"
                >
                  -
                </QuantityButton>
                <QuantityValue aria-live="polite">{quantity}</QuantityValue>
                <QuantityButton
                  type="button"
                  onClick={() =>
                    setQuantity(previous =>
                      maxQuantity
                        ? Math.min(maxQuantity, previous + 1)
                        : previous + 1
                    )
                  }
                  aria-label="Increase quantity"
                  disabled={!!maxQuantity && quantity >= maxQuantity}
                >
                  +
                </QuantityButton>
                {maxQuantity ? (
                  <QuantityLimit>
                    <QuantityMax>Max {maxQuantity}</QuantityMax>
                  </QuantityLimit>
                ) : null}
              </QuantityRow>

              <ActionsRow>
                <ActionButton $variant="primary" onClick={handleAddToCart}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                  </svg>
                  {isInCart ? t('removeFromCart') : t('addToCart')}
                </ActionButton>
                <ActionButton $variant="secondary" onClick={handleCompareClick}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M3.99923 21H19.9992M11.9992 21V7M11.9992 7C13.1038 7 13.9992 6.10457 13.9992 5M11.9992 7C10.8947 7 9.99923 6.10457 9.99923 5M13.9992 5C13.9992 3.89543 13.1038 3 11.9992 3C10.8947 3 9.99923 3.89543 9.99923 5M13.9992 5H19.9992M9.99923 5H3.99923M5.99923 17C7.51177 17 8.76287 16.1584 8.96934 14.7513C8.98242 14.6621 8.98897 14.6175 8.98385 14.5186C8.98031 14.4503 8.95717 14.3256 8.93599 14.2605C8.90531 14.1664 8.86812 14.1003 8.79375 13.968L5.99923 9L3.2047 13.968C3.13575 14.0906 3.10128 14.1519 3.06939 14.2584C3.04977 14.3239 3.02706 14.4811 3.02735 14.5494C3.02781 14.6606 3.03453 14.6899 3.04799 14.7486C3.30295 15.86 4.5273 17 5.99923 17ZM17.9992 17C19.5118 17 20.7629 16.1584 20.9693 14.7513C20.9824 14.6621 20.989 14.6175 20.9838 14.5186C20.9803 14.4503 20.9572 14.3256 20.936 14.2605C20.9053 14.1664 20.8681 14.1003 20.7937 13.968L17.9992 9L15.2047 13.968C15.1358 14.0906 15.1013 14.1519 15.0694 14.2584C15.0498 14.3239 15.0271 14.4811 15.0273 14.5494C15.0278 14.6606 15.0345 14.6899 15.048 14.7486C15.303 15.86 16.5273 17 17.9992 17Z" />
                  </svg>
                  {t('compare')}
                </ActionButton>
              </ActionsRow>
            </DetailsColumn>
          </ProductGrid>

          {variantDetailRows.length > 0 ? (
            <SectionBlock>
              <SectionTitle>Variant details</SectionTitle>
              <VariantMetaGrid>
                {variantDetailRows.map(row => (
                  <VariantMetaItem key={row.label}>
                    <VariantMetaLabel>{row.label}</VariantMetaLabel>
                    <VariantMetaValue>{row.value}</VariantMetaValue>
                  </VariantMetaItem>
                ))}
              </VariantMetaGrid>
            </SectionBlock>
          ) : null}
        </ProductSectionsColumn>

        {product.specifications &&
        Object.keys(product.specifications).length > 0 ? (
          <SpecificationsSection>
            <SectionTitle>{t('specifications')}</SectionTitle>
            <SpecsList>
              {Object.entries(product.specifications).map(([key, value]) => {
                const formattedValue = String(value)
                  .split(';')
                  .map(item => item.trim())
                  .filter(item => item.length > 0)
                  .join('\n');

                return (
                  <SpecRow key={key}>
                    <SpecLabel>{formatSpecLabel(key)}</SpecLabel>
                    <SpecValue>{formattedValue}</SpecValue>
                  </SpecRow>
                );
              })}
            </SpecsList>
          </SpecificationsSection>
        ) : null}
      </ProductContent>
    </ProductPageContainer>
  );
};

export default CatalogProductPage;
