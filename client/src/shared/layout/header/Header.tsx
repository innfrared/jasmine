'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ReactSVG } from 'react-svg';
import { useTranslation } from 'react-i18next';
import RegisterPopup from '../registerPopup/RegisterPopup';
import LoginPopup from '../loginPopup/LoginPopup';
import CartModal from '../cartModal/CartModal';
import LikedModal from '../likedModal/LikedModal';
import ProfileCard from '../profileCard/ProfileCard';
import Navigation from './Navigation';
import { useAuth } from '../../../context/AuthContext';
import {
  ActionWrapper,
  AnimatedLogo,
  HeaderActions,
  HeaderBalance,
  HeaderContainer,
  HeaderLogo,
  HeaderMainContainer,
  HeaderShell,
  UserIconButton,
} from './Header.styles';
import NavActionButton from '@/shared/ui/nav-action-button';
import {
  stripLocaleFromPath,
  useLocalizedRouting,
} from '@/shared/routing/localeRouting';
import {
  clearWishlistDialogPath,
  hasWishlistDialogQuery,
} from '@/shared/routing/wishlistShare';
import {
  useDismissibleLayer,
  useHeaderCounts,
  useHeaderScrollState,
} from './Header.hooks';
import { applyCurrentColorToLogo } from './Header.helpers';
import {
  HEADER_NAV_ITEMS,
  isHeaderNavItemActive,
} from '@/shared/config/navigation';

type HeaderProps = {
  primaryColor: string;
  secondaryColor: string;
};

function Header({ primaryColor, secondaryColor }: HeaderProps) {
  void primaryColor;
  void secondaryColor;
  const { t } = useTranslation<'translation'>();
  const router = useRouter();
  const { pathname, search, navigateLocalized, getLocalizedPath } =
    useLocalizedRouting();
  const forceScrolled = stripLocaleFromPath(pathname) !== '/';
  const strippedPathname = stripLocaleFromPath(pathname);
  const { isAuthenticated } = useAuth();
  const accountBoxRef = useRef<HTMLDivElement>(null);
  const { cartCount, likedCount } = useHeaderCounts();
  const { isScrolled, phase } = useHeaderScrollState(forceScrolled);

  const [isAccountBoxVisible, setIsAccountBoxVisible] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isLikedModalOpen, setIsLikedModalOpen] = useState(false);

  const navigationItems = useMemo(
    () =>
      HEADER_NAV_ITEMS.map(item => ({
        id: item.id,
        label: t(item.labelKey),
        href: getLocalizedPath(item.href),
        isActive: isHeaderNavItemActive(
          strippedPathname,
          search,
          item.navKey
        ),
      })),
    [getLocalizedPath, search, strippedPathname, t]
  );

  const toggleAccountBox = () => {
    setIsAccountBoxVisible(previousValue => !previousValue);
  };

  const closeAccountBox = () => {
    setIsAccountBoxVisible(false);
  };

  const handleLogoClick = () => {
    navigateLocalized('/');
  };

  const openLoginPopup = () => {
    setIsLoginPopupOpen(true);
  };

  const closeLoginPopup = () => {
    setIsLoginPopupOpen(false);
  };

  const openRegisterPopup = () => {
    setIsRegisterPopupOpen(true);
  };

  const closeRegisterPopup = () => {
    setIsRegisterPopupOpen(false);
  };

  const openCartModal = () => {
    setIsLikedModalOpen(false);
    setIsCartModalOpen(true);
  };

  const closeCartModal = () => {
    setIsCartModalOpen(false);
  };

  const toggleCartModal = () => {
    if (isCartModalOpen) {
      closeCartModal();
      return;
    }

    openCartModal();
  };

  const clearWishlistDialogQuery = () => {
    if (!hasWishlistDialogQuery(search)) {
      return;
    }

    const nextPath = clearWishlistDialogPath(pathname, search);
    router.replace(nextPath, { scroll: false });
  };

  const openLikedModal = () => {
    setIsCartModalOpen(false);
    setIsLikedModalOpen(true);
  };

  const closeLikedModal = () => {
    setIsLikedModalOpen(false);
    clearWishlistDialogQuery();
  };

  const toggleLikedModal = () => {
    if (isLikedModalOpen) {
      closeLikedModal();
      return;
    }

    openLikedModal();
  };

  const handleOpenRegisterFromLogin = () => {
    closeLoginPopup();
    openRegisterPopup();
  };

  const handleOpenLoginFromRegister = () => {
    closeRegisterPopup();
    openLoginPopup();
  };

  useEffect(() => {
    if (isAuthenticated) {
      closeAccountBox();
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (!hasWishlistDialogQuery(search)) {
      return;
    }

    openLikedModal();
  }, [search]);

  useDismissibleLayer(isAccountBoxVisible, accountBoxRef, closeAccountBox);

  return (
    <HeaderContainer $isScrolled={isScrolled} id="site-header">
      <HeaderShell $isScrolled={isScrolled}>
        <HeaderMainContainer $isScrolled={isScrolled}>
          <HeaderBalance />
          <HeaderLogo onClick={handleLogoClick} aria-label="Jasmine Crafted">
            <AnimatedLogo $phase={phase}>
              <ReactSVG
                src="/assets/logobig.svg"
                beforeInjection={applyCurrentColorToLogo}
              />
            </AnimatedLogo>
          </HeaderLogo>
          <HeaderActions>
            <ActionWrapper>
              <NavActionButton
                onClick={toggleLikedModal}
                aria-label={t('wishlist.name')}
                active={isLikedModalOpen}
                count={likedCount}
                isScrolled={isScrolled}
                tone="wishlist"
                icon={
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                }
              />
              <LikedModal isOpen={isLikedModalOpen} onClose={closeLikedModal} />
            </ActionWrapper>
            <ActionWrapper>
              <NavActionButton
                onClick={toggleCartModal}
                aria-label={t('shoppingBag.name')}
                active={isCartModalOpen}
                count={cartCount}
                isScrolled={isScrolled}
                tone="shoppingBag"
                icon={
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                  </svg>
                }
              />
              <CartModal isOpen={isCartModalOpen} onClose={closeCartModal} />
            </ActionWrapper>
            <ActionWrapper ref={accountBoxRef}>
              <UserIconButton
                onClick={toggleAccountBox}
                $isScrolled={isScrolled}
                aria-label="Account"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </UserIconButton>
              {isAccountBoxVisible ? (
                <ProfileCard
                  onClose={closeAccountBox}
                  isScrolled={isScrolled}
                  onOpenLogin={openLoginPopup}
                  onOpenRegister={openRegisterPopup}
                />
              ) : null}
            </ActionWrapper>
          </HeaderActions>
        </HeaderMainContainer>

        <Navigation isScrolled={isScrolled} items={navigationItems} />
      </HeaderShell>

      {isLoginPopupOpen ? (
        <LoginPopup
          onClose={closeLoginPopup}
          onOpenRegister={handleOpenRegisterFromLogin}
        />
      ) : null}
      {isRegisterPopupOpen ? (
        <RegisterPopup
          onClose={closeRegisterPopup}
          onOpenLogin={handleOpenLoginFromRegister}
        />
      ) : null}
    </HeaderContainer>
  );
}

export default Header;
