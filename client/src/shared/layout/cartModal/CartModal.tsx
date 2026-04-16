import { useEffect, useState, type MouseEvent } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import type { CartItem as CartItemType } from '../../../entities/shoppingBag/cartItem';
import DrawerEmptyState from '@/shared/ui/drawer-empty-state';
import DrawerProductItem, {
  type DrawerDataAttributes,
} from '@/shared/ui/drawer-product-item';
import { getImageUrl } from '@/shared/media/imageUtils';
import { useLocalizedRouting } from '@/shared/routing/localeRouting';
import {
  formatDrawerPrice,
  getCartSubtotal,
  getDrawerProductDetails,
  getProductDetailPath,
  getProductDisplayPrice,
} from '../drawerHelpers';
import {
  getStoredCartItems,
  removeCartItem,
  updateCartItemQuantity,
} from '../drawerStorage';
import { useDrawerDismiss } from '../drawerHooks';
import {
  CartModalOverlay,
  CartModalContainer,
  CartModalHeader,
  CartModalTitle,
  CloseButton,
  CartItemsList,
  CartFooter,
  CartTotal,
  CheckoutButton,
  CartSubtotalLabel,
} from './CartModal.styles';

type CartModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type CartRow = {
  bagId: string;
  name: string;
  price: string;
  image: string;
  imageAlt: string;
  eyebrow?: string;
  meta?: string;
  quantityLabel: string;
  productPath: string;
  railActionData: DrawerDataAttributes;
  decrementData: DrawerDataAttributes;
  incrementData: DrawerDataAttributes;
};

const CartModal = ({ isOpen, onClose }: CartModalProps) => {
  const { t } = useTranslation<'translation'>();
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const { navigateLocalized } = useLocalizedRouting();
  const { handleClose, isClosing, shouldRender } = useDrawerDismiss(
    isOpen,
    onClose
  );

  useEffect(() => {
    const updateCart = () => {
      setCartItems(getStoredCartItems());
    };

    updateCart();
    window.addEventListener('storage', updateCart);
    window.addEventListener('cartUpdated', updateCart);

    return () => {
      window.removeEventListener('storage', updateCart);
      window.removeEventListener('cartUpdated', updateCart);
    };
  }, []);

  const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
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

  const handleRemoveProduct = (event: MouseEvent<HTMLButtonElement>) => {
    const { bagId } = event.currentTarget.dataset;

    if (!bagId) {
      return;
    }

    setCartItems(removeCartItem(bagId));
  };

  const handleCheckout = () => {
    handleClose();
    window.setTimeout(() => {
      navigateLocalized('/cart');
    }, 300);
  };

  const handleContinueShopping = () => {
    handleClose();
    window.setTimeout(() => {
      navigateLocalized('/products');
    }, 300);
  };

  const handleQuantityDecrease = (event: MouseEvent<HTMLButtonElement>) => {
    const { bagId, quantity } = event.currentTarget.dataset;
    const normalizedQuantity = Number(quantity);

    if (
      !bagId ||
      !Number.isFinite(normalizedQuantity) ||
      normalizedQuantity <= 1
    ) {
      return;
    }

    setCartItems(updateCartItemQuantity(bagId, normalizedQuantity - 1));
  };

  const handleQuantityIncrease = (event: MouseEvent<HTMLButtonElement>) => {
    const { bagId, quantity } = event.currentTarget.dataset;
    const normalizedQuantity = Number(quantity);

    if (!bagId || !Number.isFinite(normalizedQuantity)) {
      return;
    }

    setCartItems(updateCartItemQuantity(bagId, normalizedQuantity + 1));
  };

  const shoppingBagCount = cartItems.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);
  const subtotal = getCartSubtotal(cartItems);

  const cartRows: CartRow[] = cartItems.map(item => {
    const { eyebrow, meta } = getDrawerProductDetails(item.product);

    return {
      bagId: item.bagId,
      name: item.product.name,
      price: getProductDisplayPrice(item.product),
      image: getImageUrl(item.product.image_url),
      imageAlt: item.product.name,
      eyebrow,
      meta,
      quantityLabel: t('shoppingBag.quantity', { count: item.quantity }),
      productPath: getProductDetailPath(item.product),
      railActionData: {
        'data-bag-id': item.bagId,
      },
      decrementData: {
        'data-bag-id': item.bagId,
        'data-quantity': item.quantity,
      },
      incrementData: {
        'data-bag-id': item.bagId,
        'data-quantity': item.quantity,
      },
    };
  });

  const renderCartItems = () => {
    return cartRows.map(item => (
      <DrawerProductItem
        key={item.bagId}
        imageSrc={item.image}
        imageAlt={item.imageAlt}
        eyebrow={item.eyebrow}
        title={item.name}
        meta={item.meta}
        price={item.price}
        productPath={item.productPath}
        onProductClick={handleProductClick}
        railAction={{
          kind: 'remove',
          ariaLabel: t('shoppingBag.remove'),
          onClick: handleRemoveProduct,
          dataAttributes: item.railActionData,
        }}
        quantityControl={{
          label: item.quantityLabel,
          decreaseLabel: t('shoppingBag.quantityDecrease'),
          increaseLabel: t('shoppingBag.quantityIncrease'),
          onDecrease: handleQuantityDecrease,
          onIncrease: handleQuantityIncrease,
          decreaseDataAttributes: item.decrementData,
          increaseDataAttributes: item.incrementData,
        }}
      />
    ));
  };

  if (!shouldRender) {
    return null;
  }

  return createPortal(
    <CartModalOverlay $isClosing={isClosing} onClick={handleOverlayClick}>
      <CartModalContainer
        $isClosing={isClosing}
        role="dialog"
        aria-modal="true"
        aria-label={t('shoppingBag.name')}
      >
        <CartModalHeader>
          <CartModalTitle>
            {t('shoppingBag.title', { count: shoppingBagCount })}
          </CartModalTitle>
          <CloseButton
            onClick={handleClose}
            aria-label={t('shoppingBag.close')}
          />
        </CartModalHeader>

        {cartItems.length === 0 ? (
          <DrawerEmptyState
            variant="shoppingBag"
            label={t('shoppingBag.name')}
            title={t('shoppingBag.emptyState.title')}
            description={t('shoppingBag.emptyState.description')}
            actionLabel={t('shoppingBag.emptyState.cta')}
            onAction={handleContinueShopping}
          />
        ) : (
          <>
            <CartItemsList>{renderCartItems()}</CartItemsList>

            <CartFooter>
              <CartTotal>
                <CartSubtotalLabel>
                  {t('shoppingBag.subtotal')}
                </CartSubtotalLabel>
                <span>{formatDrawerPrice(subtotal)}</span>
              </CartTotal>
              <CheckoutButton type="button" onClick={handleCheckout}>
                {t('shoppingBag.reviewCheckout')}
              </CheckoutButton>
            </CartFooter>
          </>
        )}
      </CartModalContainer>
    </CartModalOverlay>,
    document.body
  );
};

export default CartModal;
