import type { MouseEventHandler } from 'react';
import {
  DrawerEmptyStateAccent,
  DrawerEmptyStateButton,
  DrawerEmptyStateDescription,
  DrawerEmptyStateIconWrap,
  DrawerEmptyStateLabel,
  DrawerEmptyStateShell,
  DrawerEmptyStateTitle,
  DrawerEmptyStateVisual,
} from './DrawerEmptyState.styles';

type DrawerEmptyStateProps = {
  variant: 'wishlist' | 'shoppingBag';
  label: string;
  title: string;
  description: string;
  actionLabel: string;
  onAction: MouseEventHandler<HTMLButtonElement>;
};

function WishlistIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 21.35 10.55 20C5.4 15.36 2 12.28 2 8.5A4.77 4.77 0 0 1 6.74 4 5.16 5.16 0 0 1 12 6.72 5.16 5.16 0 0 1 17.26 4 4.77 4.77 0 0 1 22 8.5c0 3.78-3.4 6.86-8.55 11.54Z" />
    </svg>
  );
}

function ShoppingBagIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
      <path
        d="M6.5 8.25h11l-.83 9.66a1.5 1.5 0 0 1-1.49 1.37H8.82a1.5 1.5 0 0 1-1.49-1.37L6.5 8.25Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M9.25 10.25V7.75a2.75 2.75 0 1 1 5.5 0v2.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function renderVisualIcon(variant: DrawerEmptyStateProps['variant']) {
  if (variant === 'wishlist') {
    return <WishlistIcon />;
  }

  return <ShoppingBagIcon />;
}

export default function DrawerEmptyState({
  variant,
  label,
  title,
  description,
  actionLabel,
  onAction,
}: DrawerEmptyStateProps) {
  return (
    <DrawerEmptyStateShell>
      <DrawerEmptyStateVisual $variant={variant}>
        <DrawerEmptyStateAccent $variant={variant} />
        <DrawerEmptyStateIconWrap $variant={variant}>
          {renderVisualIcon(variant)}
        </DrawerEmptyStateIconWrap>
      </DrawerEmptyStateVisual>
      <DrawerEmptyStateLabel>{label}</DrawerEmptyStateLabel>
      <DrawerEmptyStateTitle>{title}</DrawerEmptyStateTitle>
      <DrawerEmptyStateDescription>{description}</DrawerEmptyStateDescription>
      <DrawerEmptyStateButton onClick={onAction}>
        {actionLabel}
      </DrawerEmptyStateButton>
    </DrawerEmptyStateShell>
  );
}

export type { DrawerEmptyStateProps };

