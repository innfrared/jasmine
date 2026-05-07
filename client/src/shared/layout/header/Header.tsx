'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import HeaderActionButtons from './HeaderActionButtons';
import HeaderDialogs from './HeaderDialogs';
import HeaderLogoButton from './HeaderLogoButton';
import MobileNavDrawer from './MobileNavDrawer';
import MobileMenuButton from './MobileMenuButton';
import Navigation from './Navigation';
import { useAuth } from '../../../context/AuthContext';
import {
  HEADER_NAV_ITEMS,
  isHeaderNavItemActive,
} from '@/shared/config/navigation';
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
  useIsBelowTablet,
  useRestoreFocusAfterClose,
} from './Header.hooks';
import type { AuthDialog, CommerceDialog } from './headerState';
import {
  HeaderBalance,
  HeaderContainer,
  HeaderLeadingSlot,
  HeaderMainContainer,
  HeaderShell,
} from './Header.styles';

const MOBILE_NAV_PANEL_ID = 'mobile-primary-nav';

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

  const { isAuthenticated, isLoading: isAuthLoading } = useAuth();
  const accountMenuRef = useRef<HTMLDivElement>(null);
  const burgerButtonRef = useRef<HTMLButtonElement>(null);

  const { cartCount, likedCount } = useHeaderCounts();
  const { isScrolled, phase } = useHeaderScrollState(forceScrolled);
  const isBelowTablet = useIsBelowTablet();

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
  const [authDialog, setAuthDialog] = useState<AuthDialog>(null);
  const [commerceDialog, setCommerceDialog] = useState<CommerceDialog>(null);

  const navigationItems = useMemo(() => {
    return HEADER_NAV_ITEMS.map(item => ({
      id: item.id,
      label: t(item.labelKey),
      href: getLocalizedPath(item.href),
      isActive: isHeaderNavItemActive(strippedPathname, search, item.navKey),
    }));
  }, [getLocalizedPath, search, strippedPathname, t]);

  const closeMobileNav = () => setIsMobileNavOpen(false);

  const toggleMobileNav = () => {
    if (!isBelowTablet) {
      return;
    }

    setIsMobileNavOpen(value => !value);
  };

  const closeAccountMenu = () => setIsAccountMenuOpen(false);

  const toggleAccountMenu = () => setIsAccountMenuOpen(value => !value);

  const openLoginDialog = () => setAuthDialog('login');

  const openRegisterDialog = () => setAuthDialog('register');

  const closeAuthDialog = () => setAuthDialog(null);

  const switchAuthDialogToRegister = () => setAuthDialog('register');

  const switchAuthDialogToLogin = () => setAuthDialog('login');

  const toggleCartDialog = () =>
    setCommerceDialog(current => (current === 'cart' ? null : 'cart'));

  const toggleLikedDialog = () =>
    setCommerceDialog(current => (current === 'liked' ? null : 'liked'));

  const closeCartDialog = () => setCommerceDialog(null);

  const removeWishlistDialogQueryFromUrl = () => {
    if (!hasWishlistDialogQuery(search)) {
      return;
    }

    const nextPath = clearWishlistDialogPath(pathname, search);
    router.replace(nextPath, { scroll: false });
  };

  const closeLikedDialog = () => {
    setCommerceDialog(null);
    removeWishlistDialogQueryFromUrl();
  };

  const handleLogoClick = () => navigateLocalized('/');

  useEffect(() => {
    if (isAuthenticated) {
      closeAccountMenu();
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (!hasWishlistDialogQuery(search)) {
      return;
    }

    if (isAuthLoading) {
      return;
    }

    if (isAuthenticated) {
      setCommerceDialog('liked');
      return;
    }

    router.replace(clearWishlistDialogPath(pathname, search), {
      scroll: false,
    });
  }, [isAuthenticated, isAuthLoading, pathname, router, search]);

  useDismissibleLayer(isAccountMenuOpen, accountMenuRef, closeAccountMenu);

  useEffect(() => {
    setIsMobileNavOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isBelowTablet) {
      setIsMobileNavOpen(false);
    }
  }, [isBelowTablet]);

  useEffect(() => {
    if (commerceDialog !== null || isAccountMenuOpen) {
      setIsMobileNavOpen(false);
    }
  }, [commerceDialog, isAccountMenuOpen]);

  useRestoreFocusAfterClose(isMobileNavOpen, burgerButtonRef);

  return (
    <HeaderContainer $isScrolled={isScrolled} id="site-header">
      <HeaderShell $isScrolled={isScrolled}>
        <HeaderMainContainer $isScrolled={isScrolled}>
          <HeaderLeadingSlot>
            <MobileMenuButton
              ref={burgerButtonRef}
              ariaLabelClose={t('navigation.closeMenu')}
              ariaLabelOpen={t('navigation.openMenu')}
              isNavOpen={isMobileNavOpen}
              isScrolled={isScrolled}
              panelId={MOBILE_NAV_PANEL_ID}
              onToggle={toggleMobileNav}
            />
            <HeaderBalance />
          </HeaderLeadingSlot>

          <HeaderLogoButton onClick={handleLogoClick} phase={phase} />

          <HeaderActionButtons
            accountMenuRef={accountMenuRef}
            actions={{
              closeAccountMenu,
              closeCartDialog,
              closeLikedDialog,
              openLoginDialog,
              openRegisterDialog,
              toggleAccountMenu,
              toggleCartDialog,
              toggleLikedDialog,
            }}
            commerceDialog={commerceDialog}
            counts={{ cart: cartCount, liked: likedCount }}
            isAccountMenuOpen={isAccountMenuOpen}
            isScrolled={isScrolled}
            labels={{
              cart: t('shoppingBag.name'),
              wishlist: t('wishlist.name'),
            }}
          />
        </HeaderMainContainer>

        <Navigation isScrolled={isScrolled} items={navigationItems} />
      </HeaderShell>

      {isBelowTablet ? (
        <MobileNavDrawer
          ariaLabelClose={t('navigation.closeMenu')}
          isOpen={isMobileNavOpen}
          items={navigationItems}
          isScrolled={isScrolled}
          panelId={MOBILE_NAV_PANEL_ID}
          onClose={closeMobileNav}
        />
      ) : null}

      <HeaderDialogs
        authDialog={authDialog}
        onCloseAuthDialog={closeAuthDialog}
        onSwitchFromLoginToRegister={switchAuthDialogToRegister}
        onSwitchFromRegisterToLogin={switchAuthDialogToLogin}
      />
    </HeaderContainer>
  );
}

export default Header;
