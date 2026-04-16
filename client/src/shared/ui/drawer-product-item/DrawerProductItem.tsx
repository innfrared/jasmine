import type { MouseEventHandler } from 'react';
import type { ButtonVariant } from '../button';
import {
  DrawerProductActionButton,
  DrawerProductActionGroup,
  DrawerProductCard,
  DrawerProductCardButton,
  DrawerProductContent,
  DrawerProductEyebrow,
  DrawerProductFooter,
  DrawerProductImage,
  DrawerProductMedia,
  DrawerProductMeta,
  DrawerProductPrice,
  DrawerProductQuantityControl,
  DrawerProductQuantityStep,
  DrawerProductQuantityValue,
  DrawerProductRailAction,
  DrawerProductTitle,
} from './DrawerProductItem.styles';

export type DrawerDataAttributes = Partial<
  Record<`data-${string}`, string | number>
>;

type DrawerActionVariant = Exclude<ButtonVariant, 'link'>;

type DrawerProductButtonAction = {
  label: string;
  ariaLabel: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  dataAttributes?: DrawerDataAttributes;
  variant?: DrawerActionVariant;
};

type DrawerProductRailAction = {
  kind: 'wishlist' | 'remove';
  ariaLabel: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  dataAttributes?: DrawerDataAttributes;
};

type DrawerProductQuantityControl = {
  label: string;
  decreaseLabel: string;
  increaseLabel: string;
  onDecrease: MouseEventHandler<HTMLButtonElement>;
  onIncrease: MouseEventHandler<HTMLButtonElement>;
  decreaseDataAttributes?: DrawerDataAttributes;
  increaseDataAttributes?: DrawerDataAttributes;
};

type DrawerProductItemProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  price: string;
  productPath: string;
  onProductClick: MouseEventHandler<HTMLButtonElement>;
  eyebrow?: string;
  meta?: string;
  railAction?: DrawerProductRailAction;
  primaryAction?: DrawerProductButtonAction;
  secondaryAction?: DrawerProductButtonAction;
  quantityControl?: DrawerProductQuantityControl;
};

function WishlistHeartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 21.35 10.55 20C5.4 15.36 2 12.28 2 8.5A4.77 4.77 0 0 1 6.74 4 5.16 5.16 0 0 1 12 6.72 5.16 5.16 0 0 1 17.26 4 4.77 4.77 0 0 1 22 8.5c0 3.78-3.4 6.86-8.55 11.54Z" />
    </svg>
  );
}

function RemoveIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M6 6 18 18M18 6 6 18"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function renderRailActionIcon(kind: DrawerProductRailAction['kind']) {
  if (kind === 'wishlist') {
    return <WishlistHeartIcon />;
  }

  return <RemoveIcon />;
}

export default function DrawerProductItem({
  imageSrc,
  imageAlt,
  title,
  price,
  productPath,
  onProductClick,
  eyebrow,
  meta,
  railAction,
  primaryAction,
  secondaryAction,
  quantityControl,
}: DrawerProductItemProps) {
  const hasFooter = Boolean(primaryAction || secondaryAction || quantityControl);

  return (
    <DrawerProductCard>
      {railAction ? (
        <DrawerProductRailAction
          $variant={railAction.kind}
          aria-label={railAction.ariaLabel}
          onClick={railAction.onClick}
          {...(railAction.dataAttributes ?? {})}
        >
          {renderRailActionIcon(railAction.kind)}
        </DrawerProductRailAction>
      ) : null}

      <DrawerProductCardButton
        type="button"
        data-product-path={productPath}
        onClick={onProductClick}
      >
        <DrawerProductMedia>
          <DrawerProductImage src={imageSrc} alt={imageAlt} />
        </DrawerProductMedia>

        <DrawerProductContent>
          {eyebrow ? <DrawerProductEyebrow>{eyebrow}</DrawerProductEyebrow> : null}
          <DrawerProductTitle>{title}</DrawerProductTitle>
          {meta ? <DrawerProductMeta>{meta}</DrawerProductMeta> : null}
          <DrawerProductPrice>{price}</DrawerProductPrice>
        </DrawerProductContent>
      </DrawerProductCardButton>

      {hasFooter ? (
        <DrawerProductFooter>
          <DrawerProductActionGroup>
            {quantityControl ? (
              <DrawerProductQuantityControl>
                <DrawerProductQuantityStep
                  type="button"
                  aria-label={quantityControl.decreaseLabel}
                  onClick={quantityControl.onDecrease}
                  {...(quantityControl.decreaseDataAttributes ?? {})}
                >
                  -
                </DrawerProductQuantityStep>
                <DrawerProductQuantityValue>
                  {quantityControl.label}
                </DrawerProductQuantityValue>
                <DrawerProductQuantityStep
                  type="button"
                  aria-label={quantityControl.increaseLabel}
                  onClick={quantityControl.onIncrease}
                  {...(quantityControl.increaseDataAttributes ?? {})}
                >
                  +
                </DrawerProductQuantityStep>
              </DrawerProductQuantityControl>
            ) : null}

            {secondaryAction ? (
              <DrawerProductActionButton
                aria-label={secondaryAction.ariaLabel}
                onClick={secondaryAction.onClick}
                variant={secondaryAction.variant ?? 'secondary'}
                size="md"
                fullWidth
                {...(secondaryAction.dataAttributes ?? {})}
              >
                {secondaryAction.label}
              </DrawerProductActionButton>
            ) : null}

            {primaryAction ? (
              <DrawerProductActionButton
                aria-label={primaryAction.ariaLabel}
                onClick={primaryAction.onClick}
                variant={primaryAction.variant ?? 'primary'}
                size="md"
                fullWidth
                {...(primaryAction.dataAttributes ?? {})}
              >
                {primaryAction.label}
              </DrawerProductActionButton>
            ) : null}
          </DrawerProductActionGroup>
        </DrawerProductFooter>
      ) : null}
    </DrawerProductCard>
  );
}

export type { DrawerProductItemProps };

