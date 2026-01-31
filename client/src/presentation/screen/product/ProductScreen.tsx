import React, { useRef, useState } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { useProductScreenModel } from './ProductScreenModel';
import Header from '../../../presentation/components/header/Header';
import { useTranslation } from 'react-i18next';
import Breadcrumb from '../../../presentation/components/breadcrumb/Breadcrumb';
import { Product } from '../../../model/productModel';
import { CartItem } from '../../../model/cartItemModel';
import { getImageUrl } from '../../../utils/imageUtils';
import {
  ProductPageContainer,
  ProductContent,
  ProductMain,
  ImageSection,
  MainImage,
  ThumbnailContainer,
  Thumbnail,
  InfoSection,
  ProductTitle,
  PriceContainer,
  Price,
  OldPrice,
  VariationsSection,
  VariationGroup,
  VariationLabel,
  ColorOptions,
  ColorOption,
  ColorBox,
  ColorName,
  SizeOptions,
  SizeOption,
  ActionButtons,
  Button,
  ProductInfo,
  InfoRow,
  AvailabilityBadge,
  SpecificationsSection,
  SectionTitle,
  SpecificationsList,
  SpecificationItem,
  LoadingMessage,
  ErrorMessage,
} from './ProductScreen.styles';

const ProductScreen: React.FC = () => {
  const { productName } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');
  let productId;
  if (id) productId = parseInt(id);

  const { product, loading, error, mainImage, setMainImage, notFound } =
    useProductScreenModel(productName, productId);
  const [selectedThumbnail, setSelectedThumbnail] = useState<string>(mainImage);
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const { t } = useTranslation<'translation'>();

  const getVariantImages = React.useMemo((): string[] => {
    if (!product) return [];
    
    const images: string[] = [];
    
    if (product.variant_image) {
      images.push(getImageUrl(product.variant_image));
    }
    
    if (product.variants) {
      product.variants.forEach(variant => {
        if (variant.image && variant.image !== product.variant_image) {
          images.push(getImageUrl(variant.image));
        }
      });
    }
    
    return images;
  }, [product]);

  React.useEffect(() => {
    if (product) {
      setSelectedVariant(String(product.id));
      setQuantity(1);
      
      if (product.variant_image) {
        const imageUrl = getImageUrl(product.variant_image);
        setMainImage(imageUrl);
        setSelectedThumbnail(imageUrl);
      } else if (getVariantImages.length > 0) {
        setMainImage(getVariantImages[0]);
        setSelectedThumbnail(getVariantImages[0]);
      }
    }
  }, [product?.id, setMainImage, getVariantImages]);

  React.useEffect(() => {
    if (mainImage && !selectedThumbnail) {
      setSelectedThumbnail(mainImage);
    }
  }, [mainImage, selectedThumbnail]);

  const maxQuantity = React.useMemo(() => {
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

  React.useEffect(() => {
    if (maxQuantity && quantity > maxQuantity) {
      setQuantity(maxQuantity);
    }
  }, [maxQuantity, quantity]);

  const handleVariantSelect = (variantId: number) => {
    const variant = product?.variants?.find(v => v.id === variantId);
    if (variant) {
      navigate(`/products/product/${encodeURIComponent(variant.name)}?id=${variantId}`);
    }
  };

  if (loading) {
    return (
      <ProductPageContainer>
        <Header primaryColor="#CC0C5C" secondaryColor="#F2A800" />
        <ProductContent>
          <LoadingMessage>Loading...</LoadingMessage>
        </ProductContent>
      </ProductPageContainer>
    );
  }

  if (notFound) {
    return (
      <ProductPageContainer>
        <Header primaryColor="#CC0C5C" secondaryColor="#F2A800" />
        <ProductContent>
          <ErrorMessage>Product not found.</ErrorMessage>
          <ActionButtons>
            <Button $variant="primary" onClick={() => navigate('/products')}>
              Browse products
            </Button>
          </ActionButtons>
        </ProductContent>
      </ProductPageContainer>
    );
  }

  if (error) {
    return (
      <ProductPageContainer>
        <Header primaryColor="#CC0C5C" secondaryColor="#F2A800" />
        <ProductContent>
          <ErrorMessage>{error}</ErrorMessage>
        </ProductContent>
      </ProductPageContainer>
    );
  }

  if (!product) {
    return (
      <ProductPageContainer>
        <Header primaryColor="#CC0C5C" secondaryColor="#F2A800" />
        <ProductContent>
          <ErrorMessage>No product found</ErrorMessage>
        </ProductContent>
      </ProductPageContainer>
    );
  }

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    const stored = localStorage.getItem('cartProducts');
    let cartItems: CartItem[] = [];
    
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0 && parsed[0].bagId) {
          cartItems = parsed;
        } else {
          cartItems = parsed.map((p: Product, index: number) => ({
            bagId: `bag-${Date.now()}-${index}-${p.id}`,
            product: p,
            quantity: 1,
          }));
        }
      } catch {
        cartItems = [];
      }
    }

    const existingItem = cartItems.find(item => item.product.id === product.id);
    
    if (existingItem) {
      const updated = cartItems.filter(item => item.bagId !== existingItem.bagId);
      localStorage.setItem('cartProducts', JSON.stringify(updated));
    } else {
      const newItem: CartItem = {
        bagId: `bag-${Date.now()}-${product.id}`,
        product,
        quantity,
      };
      cartItems.push(newItem);
      localStorage.setItem('cartProducts', JSON.stringify(cartItems));
    }
    
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const handleCompareClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const stored = JSON.parse(localStorage.getItem('compareProducts') || '[]');
    const exists = stored.find((p: Product) => p.id === product.id);
    const updated = exists
      ? stored.filter((p: Product) => p.id !== product.id)
      : [...stored, product];
    localStorage.setItem('compareProducts', JSON.stringify(updated));
    window.dispatchEvent(new Event('compareUpdated'));
  };

  const allImages = getVariantImages;

  const isInCart = () => {
    const stored = localStorage.getItem('cartProducts');
    if (!stored) return false;
    try {
      const cartItems: CartItem[] = JSON.parse(stored);
      return cartItems.some(item => item.product.id === product.id);
    } catch {
      return false;
    }
  };

  return (
    <ProductPageContainer>
      <Header primaryColor="#CC0C5C" secondaryColor="#F2A800" />
      <ProductContent>
        <Breadcrumb 
          categoryName={product?.category?.name || undefined}
          subcategoryName={product?.subcategory?.name || undefined}
          productName={product?.name}
        />
        <ProductMain>
          <ImageSection>
            <MainImage 
              src={mainImage} 
              alt={product.name}
            />
            {allImages.length > 1 && (
              <ThumbnailContainer>
                {allImages.map((image, index) => (
                  <Thumbnail
                      key={index}
                      src={image}
                    alt={`Thumbnail ${index + 1}`}
                    $isActive={image === selectedThumbnail}
                    onClick={() => {
                      setMainImage(image);
                      setSelectedThumbnail(image);
                    }}
                  />
                ))}
              </ThumbnailContainer>
            )}
          </ImageSection>

          <InfoSection>
            <ProductTitle>{product.name}</ProductTitle>

            <PriceContainer>
              {product.price_new ? (
                <>
                  <Price>{product.price_new}</Price>
                  <OldPrice>{product.price}</OldPrice>
                </>
              ) : (
                <Price>{product.price}</Price>
              )}
            </PriceContainer>

            {(product.variant_color_palette || (product.variants && product.variants.length > 0)) && (
              <VariationsSection>
                <VariationGroup>
                  <VariationLabel>Available Colors</VariationLabel>
                  <ColorOptions>
                    {product.variant_color_palette && (
                      <ColorOption
                        $isSelected={selectedVariant === String(product.id)}
                        $colorValue={product.variant_color_palette}
                        onClick={() => {
                          setSelectedVariant(String(product.id));
                          if (product.variant_image) {
                            const imageUrl = getImageUrl(product.variant_image);
                            setMainImage(imageUrl);
                            setSelectedThumbnail(imageUrl);
                          }
                        }}
                      >
                        <ColorBox $colorValue={product.variant_color_palette} />
                        <ColorName>{product.variant_color_name || 'Current'}</ColorName>
                      </ColorOption>
                    )}
                    {product.variants && product.variants.map((variant) => (
                      <ColorOption
                        key={variant.id}
                        $isSelected={selectedVariant === String(variant.id)}
                        $colorValue={variant.color_palette}
                        onClick={() => handleVariantSelect(variant.id)}
                      >
                        <ColorBox $colorValue={variant.color_palette} />
                        <ColorName>{variant.color_name}</ColorName>
                      </ColorOption>
                    ))}
                  </ColorOptions>
                </VariationGroup>
              </VariationsSection>
            )}

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                margin: '16px 0',
              }}
            >
              <button
                type="button"
                onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span aria-live="polite">{quantity}</span>
              <button
                type="button"
                onClick={() =>
                  setQuantity(prev =>
                    maxQuantity ? Math.min(maxQuantity, prev + 1) : prev + 1
                  )
                }
                aria-label="Increase quantity"
                disabled={!!maxQuantity && quantity >= maxQuantity}
              >
                +
              </button>
              {maxQuantity ? <span>Max {maxQuantity}</span> : null}
            </div>

            <ActionButtons>
              <Button $variant="primary" onClick={handleAddToCart}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                    </svg>
                {isInCart() ? t('removeFromCart') : t('addToCart')}
              </Button>
              <Button $variant="secondary" onClick={handleCompareClick}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3.99923 21H19.9992M11.9992 21V7M11.9992 7C13.1038 7 13.9992 6.10457 13.9992 5M11.9992 7C10.8947 7 9.99923 6.10457 9.99923 5M13.9992 5C13.9992 3.89543 13.1038 3 11.9992 3C10.8947 3 9.99923 3.89543 9.99923 5M13.9992 5H19.9992M9.99923 5H3.99923M5.99923 17C7.51177 17 8.76287 16.1584 8.96934 14.7513C8.98242 14.6621 8.98897 14.6175 8.98385 14.5186C8.98031 14.4503 8.95717 14.3256 8.93599 14.2605C8.90531 14.1664 8.86812 14.1003 8.79375 13.968L5.99923 9L3.2047 13.968C3.13575 14.0906 3.10128 14.1519 3.06939 14.2584C3.04977 14.3239 3.02706 14.4811 3.02735 14.5494C3.02781 14.6606 3.03453 14.6899 3.04799 14.7486C3.30295 15.86 4.5273 17 5.99923 17ZM17.9992 17C19.5118 17 20.7629 16.1584 20.9693 14.7513C20.9824 14.6621 20.989 14.6175 20.9838 14.5186C20.9803 14.4503 20.9572 14.3256 20.936 14.2605C20.9053 14.1664 20.8681 14.1003 20.7937 13.968L17.9992 9L15.2047 13.968C15.1358 14.0906 15.1013 14.1519 15.0694 14.2584C15.0498 14.3239 15.0271 14.4811 15.0273 14.5494C15.0278 14.6606 15.0345 14.6899 15.048 14.7486C15.303 15.86 16.5273 17 17.9992 17Z" />
                    </svg>
                {t('compare')}
              </Button>
            </ActionButtons>

            <ProductInfo>
              <InfoRow>
                <span>{t('brand')}:</span>
                <span>{product.brand}</span>
              </InfoRow>
              <InfoRow>
                <span>{t('product_code')}:</span>
                <span>{product.id}</span>
              </InfoRow>
              <InfoRow>
                <span>{t('availability')}:</span>
                <AvailabilityBadge $available={product.availability === 'in_stock'}>
                  {product.availability === 'in_stock' ? t('in_stock') : t('out_of_stock')}
                </AvailabilityBadge>
              </InfoRow>
            </ProductInfo>
          </InfoSection>
        </ProductMain>

        {product.specifications && Object.keys(product.specifications).length > 0 && (
          <SpecificationsSection>
            <SectionTitle>{t('specifications')}</SectionTitle>
            <SpecificationsList>
              {Object.entries(product.specifications).map(([key, value]) => {
                const formattedKey = key
                  .replace(/_/g, ' ')
                  .split(' ')
                  .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                  .join(' ');
                
                const formattedValue = String(value)
                  .split(';')
                  .map(item => item.trim())
                  .filter(item => item.length > 0)
                  .join('\n');
                
                return (
                  <SpecificationItem key={key}>
                    <strong>{formattedKey}:</strong>
                    <span style={{ whiteSpace: 'pre-line' }}>{formattedValue}</span>
                  </SpecificationItem>
                );
              })}
            </SpecificationsList>
          </SpecificationsSection>
        )}
      </ProductContent>
    </ProductPageContainer>
  );
};

export default ProductScreen;
