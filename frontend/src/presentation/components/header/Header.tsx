'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { useHeaderModel } from './HeaderModel';
import RegisterPopup from '../registerPopup/RegisterPopup';
import LoginPopup from '../loginPopup/LoginPopup';
import CartModal from '../cartModal/CartModal';
import LikedModal from '../likedModal/LikedModal';
import ProfileCard from '../profileCard/ProfileCard';
import { useAuth } from '../../../context/AuthContext';
import { normalizeLocale, withLocale } from '../../../utils/locale';

import {
  HeaderContainer,
  HeaderMainContainer,
  HeaderDetails,
  HeaderActions,
  HeaderLogo,
  AnimatedLogoWrapper,
  UserIconWrapper,
  UserIconButton,
  LikedIconWrapper,
  LikedButton,
  LikedBadge,
  CartIconWrapper,
  CartButton,
  CartBadge,
  NavigationBar,
  NavContainer,
  NavLinks,
  NavLink,
  NavItem,
  NavLinkDivider,
} from './Header.styles';
import CurrencyDropdown from '../../../ui/styles/dropdown/CurrencyDropdown';

type HeaderProps = {
  primaryColor: string;
  secondaryColor: string;
};

const Header: React.FC<HeaderProps> = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams<{ locale?: string }>();
  const locale = normalizeLocale(params?.locale);
  const normalizedPath =
    pathname && pathname.startsWith(`/${locale}`)
      ? pathname.replace(`/${locale}`, '') || '/'
      : pathname || '/';
  const forceScrolled = normalizedPath !== '/';
  const { categories } = useHeaderModel();

  const bagsCategory = categories.find(category => category.id === 1000);
  const bagsSubcategories = bagsCategory?.subcategories || [];

  const headerRef = useRef<HTMLDivElement>(null);

  const [isAccountBoxVisible, setIsAccountBoxVisible] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isLikedModalOpen, setIsLikedModalOpen] = useState(false);
  const { isAuthenticated } = useAuth();
  const [cartCount, setCartCount] = useState(0);
  const [likedCount, setLikedCount] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [phase, setPhase] = useState<
    'idle' | 'animating-out' | 'done' | 'animating-in'
  >('idle');
  const accountBoxRef = useRef<HTMLDivElement>(null);

  const toggleAccountBox = () => {
    setIsAccountBoxVisible(prev => !prev);
  };

  useEffect(() => {
    if (isAuthenticated) {
      setIsAccountBoxVisible(false);
    }
  }, [isAuthenticated]);

  const closeAccountBox = () => setIsAccountBoxVisible(false);
  const openLoginPopup = () => setIsLoginPopupOpen(true);
  const closeLoginPopup = () => setIsLoginPopupOpen(false);
  const openRegisterPopup = () => setIsRegisterPopupOpen(true);
  const closeRegisterPopup = () => setIsRegisterPopupOpen(false);
  const toggleCartModal = () => setIsCartModalOpen(prev => !prev);
  const closeCartModal = () => setIsCartModalOpen(false);
  const toggleLikedModal = () => setIsLikedModalOpen(prev => !prev);
  const closeLikedModal = () => setIsLikedModalOpen(false);

  useEffect(() => {
    if (!isAccountBoxVisible) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        accountBoxRef.current &&
        !accountBoxRef.current.contains(event.target as Node)
      ) {
        closeAccountBox();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeAccountBox();
      }
    };

    window.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isAccountBoxVisible]);

  useEffect(() => {
    if (forceScrolled) return;
    const animLockRef = { current: false };
    let ticking = false;
    let latestY = window.scrollY;

    const updateScrollState = () => {
      const atTop = latestY <= 2;
      setIsScrolled(!atTop);

      if (animLockRef.current) return;

      if (!atTop && phase === 'idle') {
        animLockRef.current = true;
        setPhase('animating-out');
        setTimeout(() => {
          setPhase('done');
          animLockRef.current = false;
        }, 500);
      } else if (atTop && phase === 'done') {
        animLockRef.current = true;
        setPhase('animating-in');
        setTimeout(() => {
          setPhase('idle');
          animLockRef.current = false;
        }, 500);
      }
    };

    const onScroll = () => {
      latestY = window.scrollY;
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          updateScrollState();
          ticking = false;
        });
      }
    };

    updateScrollState();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [phase, forceScrolled]);

  useEffect(() => {
    if (forceScrolled) {
      setIsScrolled(true);
      setPhase('done');
    }
  }, [forceScrolled]);

  useEffect(() => {
    const updateCartCount = () => {
      const storedCart = localStorage.getItem('cartProducts');
      try {
        const cartData = storedCart ? JSON.parse(storedCart) : [];
        if (Array.isArray(cartData)) {
          if (
            cartData.length > 0 &&
            cartData[0].bagId &&
            cartData[0].quantity
          ) {
            setCartCount(
              cartData.reduce(
                (sum: number, item: { quantity?: number }) =>
                  sum + (item.quantity || 1),
                0
              )
            );
          } else {
            setCartCount(cartData.length);
          }
        } else {
          setCartCount(0);
        }
      } catch {
        setCartCount(0);
      }
    };

    const updateLikedCount = () => {
      const storedLiked = localStorage.getItem('likedProducts');
      try {
        const likedData = storedLiked ? JSON.parse(storedLiked) : [];
        setLikedCount(Array.isArray(likedData) ? likedData.length : 0);
      } catch {
        setLikedCount(0);
      }
    };

    updateCartCount();
    updateLikedCount();
    window.addEventListener('storage', updateCartCount);
    window.addEventListener('cartUpdated', updateCartCount);
    window.addEventListener('storage', updateLikedCount);
    window.addEventListener('likedUpdated', updateLikedCount);

    return () => {
      window.removeEventListener('storage', updateCartCount);
      window.removeEventListener('cartUpdated', updateCartCount);
      window.removeEventListener('storage', updateLikedCount);
      window.removeEventListener('likedUpdated', updateLikedCount);
    };
  }, []);

  return (
    <HeaderContainer $isScrolled={isScrolled} ref={headerRef}>
      <HeaderMainContainer>
        <HeaderDetails>
          <CurrencyDropdown isScrolled={isScrolled} />
        </HeaderDetails>
        <HeaderLogo onClick={() => router.push(withLocale(locale, '/'))}>
        <AnimatedLogoWrapper
          $phase={phase}
          onClick={() => router.push(withLocale(locale, '/'))}
        >
          <img src="/assets/logobig.svg" alt="Logo" />
        </AnimatedLogoWrapper>
        </HeaderLogo>
        <HeaderActions>
          <LikedIconWrapper>
            <LikedButton
              onClick={toggleLikedModal}
              $isScrolled={isScrolled}
              aria-label="Liked"
            >
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
              {likedCount > 0 && <LikedBadge>{likedCount}</LikedBadge>}
            </LikedButton>
            <LikedModal
              isOpen={isLikedModalOpen}
              onClose={closeLikedModal}
              isScrolled={isScrolled}
            />
          </LikedIconWrapper>
          <CartIconWrapper>
            <CartButton
              onClick={toggleCartModal}
              $isScrolled={isScrolled}
              aria-label="Cart"
            >
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
              {cartCount > 0 && <CartBadge>{cartCount}</CartBadge>}
            </CartButton>
            <CartModal
              isOpen={isCartModalOpen}
              onClose={closeCartModal}
              isScrolled={isScrolled}
            />
          </CartIconWrapper>
          <UserIconWrapper ref={accountBoxRef}>
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
            {isAccountBoxVisible && (
              <ProfileCard
                onClose={closeAccountBox}
                isScrolled={isScrolled}
                onOpenLogin={openLoginPopup}
                onOpenRegister={openRegisterPopup}
              />
            )}
          </UserIconWrapper>
        </HeaderActions>
      </HeaderMainContainer>
      <NavigationBar $isScrolled={isScrolled}>
        <NavContainer>
          <NavLinks>
            {bagsSubcategories.map((subcategory, index) => (
              <React.Fragment key={subcategory.id}>
                <NavItem>
                  <NavLink
                    onClick={() =>
                      router.push(
                        withLocale(
                          locale,
                          `/products?category_id=1000&subcategory_id=${subcategory.id}`
                        )
                      )
                    }
                    $isScrolled={isScrolled}
                    aria-haspopup="false"
                  >
                    {subcategory.name}
                  </NavLink>
                </NavItem>
                {index < bagsSubcategories.length - 1 && <NavLinkDivider />}
              </React.Fragment>
            ))}
          </NavLinks>
        </NavContainer>
      </NavigationBar>

      {isLoginPopupOpen && (
        <LoginPopup
          onClose={closeLoginPopup}
          onOpenRegister={() => {
            closeLoginPopup();
            openRegisterPopup();
          }}
        />
      )}
      {isRegisterPopupOpen && (
        <RegisterPopup
          onClose={closeRegisterPopup}
          onOpenLogin={() => {
            closeRegisterPopup();
            openLoginPopup();
          }}
        />
      )}
    </HeaderContainer>
  );
};

export default Header;
