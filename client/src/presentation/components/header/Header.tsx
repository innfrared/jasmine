import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useHeaderModel } from '../header/HeaderModel';
import RegisterPopup from '../registerPopup/RegisterPopup';
import LoginPopup from '../loginPopup/LoginPopup';
import CartModal from '../cartModal/CartModal';
import LikedModal from '../likedModal/LikedModal';
import { mockCategories } from '../../../mocks/categoriesMock';
import { Product } from '../../../model/productModel';

import {
  HeaderContainer,
  HeaderMainContainer,
  HeaderDetails,
  HeaderActions,
  HeaderLogo,
  AnimatedLogo,
  UserIconWrapper,
  UserIconButton,
  UserModal,
  UserModalItem,
  UserModalMessage,
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
} from './Header.styles';
import CurrencyDropdown from '../../../ui/styles/dropdown/CurrencyDropdown';

type HeaderProps = {
  primaryColor: string;
  secondaryColor: string;
};

const Header: React.FC<HeaderProps> = ({ secondaryColor }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const forceScrolled = location.pathname !== '/';
  const { categories } = useHeaderModel();
  
  // Get main three categories (Bags and Purses, Dresses, Accessories)
  const mainCategories = mockCategories.filter(cat => cat.parent_id === null).slice(0, 3);

  const headerRef = useRef<HTMLDivElement>(null);

  const [isAccountBoxVisible, setIsAccountBoxVisible] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isLikedModalOpen, setIsLikedModalOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [likedCount, setLikedCount] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [phase, setPhase] = useState<
    'idle' | 'animating-out' | 'done' | 'animating-in'
  >('idle');

  const toggleAccountBox = () => setIsAccountBoxVisible(prev => !prev);
  const closeAccountBox = () => setIsAccountBoxVisible(false);
  const openLoginPopup = () => setIsLoginPopupOpen(true);
  const closeLoginPopup = () => setIsLoginPopupOpen(false);
  const openRegisterPopup = () => setIsRegisterPopupOpen(true);
  const closeRegisterPopup = () => setIsRegisterPopupOpen(false);
  const toggleCartModal = () => setIsCartModalOpen(prev => !prev);
  const closeCartModal = () => setIsCartModalOpen(false);
  const toggleLikedModal = () => setIsLikedModalOpen(prev => !prev);
  const closeLikedModal = () => setIsLikedModalOpen(false);

  const handleCategoryNavigation = (category: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(`/products/category/${encodeURIComponent(category)}`);
  };

  useEffect(() => {
    if (forceScrolled) return;
    const animLockRef = { current: false };

    const onScroll = () => {
      const y = window.scrollY;
      const atTop = y <= 2;
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

    onScroll();
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
          // Check if it's new format (CartItem[]) or old format (Product[])
          if (cartData.length > 0 && cartData[0].bagId && cartData[0].quantity) {
            // New format: sum quantities
            setCartCount(cartData.reduce((sum: number, item: any) => sum + (item.quantity || 1), 0));
          } else {
            // Old format: count items
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
    <HeaderContainer
      secondaryColor={secondaryColor}
      isScrolled={isScrolled}
      ref={headerRef}
    >
      <HeaderMainContainer>
        <HeaderDetails>
          <CurrencyDropdown isScrolled={isScrolled} />
        </HeaderDetails>
        <HeaderLogo onClick={() => navigate('/')}>
          <AnimatedLogo
            src="/assets/logobig.svg"
            $phase={phase}
            beforeInjection={(svg: SVGElement) => {
              svg
                .querySelectorAll('[stroke]')
                .forEach((el: Element) => el.setAttribute('stroke', 'currentColor'));
            }}
            onClick={() => navigate('/')}
          />
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
          <UserIconWrapper>
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
              <UserModal>
                <UserModalMessage>You are not logged in</UserModalMessage>
                <UserModalItem onClick={() => { closeAccountBox(); openLoginPopup(); }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                    <polyline points="10 17 15 12 10 7" />
                    <line x1="15" y1="12" x2="3" y2="12" />
                  </svg>
                  <span>Login</span>
                </UserModalItem>
                <UserModalItem onClick={() => { closeAccountBox(); openRegisterPopup(); }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <line x1="20" y1="8" x2="20" y2="14" />
                    <line x1="23" y1="11" x2="17" y2="11" />
                  </svg>
                  <span>Sign Up</span>
                </UserModalItem>
              </UserModal>
            )}
          </UserIconWrapper>
        </HeaderActions>
      </HeaderMainContainer>
      <NavigationBar $isScrolled={isScrolled}>
        <NavContainer>
          <NavLinks>
            {mainCategories.map(category => (
              <NavLink
                key={category.id}
                onClick={() => category.url && handleCategoryNavigation(category.url)}
                $isScrolled={isScrolled}
              >
                {category.name}
              </NavLink>
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
