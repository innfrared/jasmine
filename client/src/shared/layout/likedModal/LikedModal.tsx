import { useEffect, useState, type MouseEvent } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import type { Product } from '../../../entities/catalog/product';
import DrawerEmptyState from '@/shared/ui/drawer-empty-state';
import DrawerProductItem, {
  type DrawerDataAttributes,
} from '@/shared/ui/drawer-product-item';
import { getImageUrl } from '@/shared/media/imageUtils';
import { useLocalizedRouting } from '@/shared/routing/localeRouting';
import {
  getDrawerProductDetails,
  getProductDetailPath,
  getProductDisplayPrice,
  shareWishlistProducts,
} from '../drawerHelpers';
import {
  addProductToCart,
  getStoredWishlistProducts,
  removeWishlistProduct,
} from '../drawerStorage';
import { useDrawerDismiss } from '../drawerHooks';
import {
  LikedModalOverlay,
  LikedModalContainer,
  LikedModalHeader,
  LikedModalTitle,
  CloseButton,
  LikedItemsList,
  WishlistFooter,
  ShareWishlistButton,
} from './LikedModal.styles';

type LikedModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type WishlistRow = {
  id: number;
  name: string;
  price: string;
  image: string;
  imageAlt: string;
  eyebrow?: string;
  meta?: string;
  productPath: string;
  removeData: DrawerDataAttributes;
  addToBagData: DrawerDataAttributes;
};

const LikedModal = ({ isOpen, onClose }: LikedModalProps) => {
  const { t } = useTranslation<'translation'>();
  const [likedProducts, setLikedProducts] = useState<Product[]>([]);
  const [shareButtonLabel, setShareButtonLabel] = useState(() =>
    t('wishlist.share')
  );
  const { navigateLocalized } = useLocalizedRouting();
  const { handleClose, isClosing, shouldRender } = useDrawerDismiss(
    isOpen,
    onClose
  );

  useEffect(() => {
    const updateLiked = () => {
      setLikedProducts(getStoredWishlistProducts());
    };

    updateLiked();
    window.addEventListener('storage', updateLiked);
    window.addEventListener('likedUpdated', updateLiked);

    return () => {
      window.removeEventListener('storage', updateLiked);
      window.removeEventListener('likedUpdated', updateLiked);
    };
  }, []);

  useEffect(() => {
    setShareButtonLabel(t('wishlist.share'));
  }, [t]);

  const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  const handleAddToBag = (event: MouseEvent<HTMLButtonElement>) => {
    const { productId } = event.currentTarget.dataset;
    const normalizedId = Number(productId);
    const product = likedProducts.find(item => item.id === normalizedId);

    if (!product) {
      return;
    }

    addProductToCart(product);
  };

  const handleRemoveProduct = (event: MouseEvent<HTMLButtonElement>) => {
    const { productId } = event.currentTarget.dataset;
    const normalizedId = Number(productId);

    if (!normalizedId) {
      return;
    }

    setLikedProducts(removeWishlistProduct(normalizedId));
  };

  const handleProductClick = (event: MouseEvent<HTMLButtonElement>) => {
    const { productPath } = event.currentTarget.dataset;

    if (!productPath) {
      return;
    }

    handleClose();
    window.setTimeout(() => {
      navigateLocalized(productPath);
    }, 300);
  };

  const handleShareWishlist = async () => {
    if (likedProducts.length === 0) {
      return;
    }

    try {
      await shareWishlistProducts(
        window.location.pathname,
        window.location.search,
        window.location.origin,
        t('wishlist.name')
      );
      setShareButtonLabel(t('wishlist.shareSuccess'));
      window.setTimeout(() => {
        setShareButtonLabel(t('wishlist.share'));
      }, 1800);
    } catch {
      setShareButtonLabel(t('wishlist.share'));
    }
  };

  const handleContinueShopping = () => {
    handleClose();
    window.setTimeout(() => {
      navigateLocalized('/products');
    }, 300);
  };

  const wishlistRows: WishlistRow[] = likedProducts.map(product => {
    const { eyebrow, meta } = getDrawerProductDetails(product);

    return {
      id: product.id,
      name: product.name,
      price: getProductDisplayPrice(product),
      image: getImageUrl(product.image_url),
      imageAlt: product.name,
      eyebrow,
      meta,
      productPath: getProductDetailPath(product),
      removeData: {
        'data-product-id': product.id,
      },
      addToBagData: {
        'data-product-id': product.id,
      },
    };
  });

  const renderWishlistItems = () => {
    return wishlistRows.map(product => (
      <DrawerProductItem
        key={product.id}
        imageSrc={product.image}
        imageAlt={product.imageAlt}
        eyebrow={product.eyebrow}
        title={product.name}
        meta={product.meta}
        price={product.price}
        productPath={product.productPath}
        onProductClick={handleProductClick}
        railAction={{
          kind: 'wishlist',
          ariaLabel: t('wishlist.remove'),
          onClick: handleRemoveProduct,
          dataAttributes: product.removeData,
        }}
        primaryAction={{
          label: t('wishlist.addToBag'),
          ariaLabel: t('wishlist.addToBag'),
          onClick: handleAddToBag,
          dataAttributes: product.addToBagData,
          variant: 'primary',
        }}
      />
    ));
  };

  const shareWishlistIcon = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M15 8a3 3 0 1 0-2.83-4H12a3 3 0 0 0 .17 1l-5.1 2.95a3 3 0 1 0 0 8.1l5.1 2.95A3 3 0 1 0 13 17.5a3 3 0 0 0-.17-1l5.1-2.95A3 3 0 1 0 17 11.5a3 3 0 0 0 .17 1l-5.1 2.95"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  if (!shouldRender) {
    return null;
  }

  return createPortal(
    <LikedModalOverlay $isClosing={isClosing} onClick={handleOverlayClick}>
      <LikedModalContainer
        $isClosing={isClosing}
        role="dialog"
        aria-modal="true"
        aria-label={t('wishlist.name')}
      >
        <LikedModalHeader>
          <LikedModalTitle>
            {t('wishlist.title', { count: likedProducts.length })}
          </LikedModalTitle>
          <CloseButton onClick={handleClose} aria-label={t('wishlist.close')} />
        </LikedModalHeader>

        {likedProducts.length === 0 ? (
          <DrawerEmptyState
            variant="wishlist"
            label={t('wishlist.name')}
            title={t('wishlist.emptyState.title')}
            description={t('wishlist.emptyState.description')}
            actionLabel={t('wishlist.emptyState.cta')}
            onAction={handleContinueShopping}
          />
        ) : (
          <>
            <LikedItemsList>{renderWishlistItems()}</LikedItemsList>
            <WishlistFooter>
              <ShareWishlistButton
                type="button"
                onClick={handleShareWishlist}
                iconLeft={shareWishlistIcon}
              >
                {shareButtonLabel}
              </ShareWishlistButton>
            </WishlistFooter>
          </>
        )}
      </LikedModalContainer>
    </LikedModalOverlay>,
    document.body
  );
};

export default LikedModal;
