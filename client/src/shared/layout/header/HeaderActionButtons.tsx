'use client';

import dynamic from 'next/dynamic';
import type { Ref } from 'react';
import NavActionButton from '@/shared/ui/nav-action-button';
import type { CommerceDialog } from './headerState';
import { BagIcon, HeartIcon, UserIcon } from './HeaderIcons';
import { ActionWrapper, HeaderActions, UserIconButton } from './Header.styles';

const CartModal = dynamic(() => import('../cartModal/CartModal'), {
  ssr: false,
});

const LikedModal = dynamic(() => import('../likedModal/LikedModal'), {
  ssr: false,
});

const ProfileCard = dynamic(() => import('../profileCard/ProfileCard'), {
  ssr: false,
});

type HeaderActionCallbacks = {
  toggleLikedDialog: () => void;
  toggleCartDialog: () => void;
  toggleAccountMenu: () => void;
  closeLikedDialog: () => void;
  closeCartDialog: () => void;
  closeAccountMenu: () => void;
  openLoginDialog: () => void;
  openRegisterDialog: () => void;
};

type HeaderActionButtonsProps = {
  counts: { cart: number; liked: number };
  isScrolled: boolean;
  commerceDialog: CommerceDialog;
  isAccountMenuOpen: boolean;
  accountMenuRef: Ref<HTMLDivElement>;
  labels: { wishlist: string; cart: string };
  actions: HeaderActionCallbacks;
};

export default function HeaderActionButtons({
  counts,
  isScrolled,
  commerceDialog,
  isAccountMenuOpen,
  accountMenuRef,
  labels,
  actions,
}: HeaderActionButtonsProps) {
  const isLikedOpen = commerceDialog === 'liked';
  const isCartOpen = commerceDialog === 'cart';

  return (
    <HeaderActions>
      <ActionWrapper>
        <NavActionButton
          active={isLikedOpen}
          aria-label={labels.wishlist}
          count={counts.liked}
          icon={<HeartIcon />}
          isScrolled={isScrolled}
          tone="wishlist"
          onClick={actions.toggleLikedDialog}
        />
        {isLikedOpen ? (
          <LikedModal isOpen={isLikedOpen} onClose={actions.closeLikedDialog} />
        ) : null}
      </ActionWrapper>
      <ActionWrapper>
        <NavActionButton
          active={isCartOpen}
          aria-label={labels.cart}
          count={counts.cart}
          icon={<BagIcon />}
          isScrolled={isScrolled}
          tone="shoppingBag"
          onClick={actions.toggleCartDialog}
        />
        {isCartOpen ? (
          <CartModal isOpen={isCartOpen} onClose={actions.closeCartDialog} />
        ) : null}
      </ActionWrapper>
      <ActionWrapper ref={accountMenuRef}>
        <UserIconButton
          $isScrolled={isScrolled}
          aria-label="Account"
          onClick={actions.toggleAccountMenu}
        >
          <UserIcon />
        </UserIconButton>
        {isAccountMenuOpen ? (
          <ProfileCard
            isScrolled={isScrolled}
            onClose={actions.closeAccountMenu}
            onOpenLogin={actions.openLoginDialog}
            onOpenRegister={actions.openRegisterDialog}
          />
        ) : null}
      </ActionWrapper>
    </HeaderActions>
  );
}
