import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useHeaderModel } from '../header/HeaderModel';
import AccountBox from '../accountBox/AccountBox';
import RegisterPopup from '../registerPopup/RegisterPopup';
import LoginPopup from '../loginPopup/LoginPopup';
import Button from '../../../ui/styles/button/Button';

import {
  HeaderContainer,
  HeaderMainContainer,
  HeaderDetails,
  HeaderActions,
  CategoryContainer,
  MenuIcon,
  SearchContent,
  CatalogContent,
  SearchBar,
  SearchIconLarge,
  SearchInput,
  CategoryList,
  CategoryItem,
  CategoryArrow,
  CatalogCategories,
  SwiperCell,
  VerticalLine,
  SubcategoryList,
  SubcategoryItem,
  HeaderLogo,
  MobileMenuContent,
  MobileMenuCard,
  MobileMenuLabel,
  MobileMenuLinks,
  MobileMenuLink,
  MobileMenuIcon,
  ProductCategories,
  ProductCategory,
  ProductCategoryName,
  CurrencySwitcher,
  CurrencyText,
  CurrencyArrow,
  CountrySwitcher,
  CountryFlag,
  CountryText,
  Contacts,
  ContactItem,
  ContactIcon,
  ContactText,
} from './Header.styles';

type HeaderProps = {
  primaryColor: string;
  secondaryColor: string;
};

const Header: React.FC<HeaderProps> = ({ secondaryColor }) => {
  const navigate = useNavigate();
  const { categories, subcategories, hoveredCategory, handleCategoryHover: handleCategoryHoverFromModel } =
    useHeaderModel();

  const headerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isExpanded, setIsExpanded] = useState(false);
  const [isCatalogExpanded, setIsCatalogExpanded] = useState(false);
  const [isAccountBoxVisible, setIsAccountBoxVisible] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [visibleCategories, setVisibleCategories] = useState<number>(0);
  const [, setCartCount] = useState(0);
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleAccountBox = () => setIsAccountBoxVisible(prev => !prev);
  const closeAccountBox = () => setIsAccountBoxVisible(false);
  const openLoginPopup = () => setIsLoginPopupOpen(true);
  const closeLoginPopup = () => setIsLoginPopupOpen(false);
  const openRegisterPopup = () => setIsRegisterPopupOpen(true);
  const closeRegisterPopup = () => setIsRegisterPopupOpen(false);
  const handleCollapse = () => {
    setIsExpanded(false);
    setIsCatalogExpanded(false);
    setVisibleCategories(0);
  };

  const handleProductCategoryHover = () => {
    setIsMobileMenuVisible(true);
  };

  const handleProductCategoryLeave = () => {
    setIsMobileMenuVisible(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuVisible(false);
  };

  const handleSubcategoryClick = (subcategoryName: string) => {
    if (!hoveredCategory) return;
    setIsCatalogExpanded(false);
    setTimeout(() => {
      navigate(`/products/category/${hoveredCategory.name}/${subcategoryName}`);
    }, 100);
  };

  const handleCategoryNavigation = (category: string) => {
    navigate(`/products/category/${encodeURIComponent(category)}`);
  };

  const handleCartNavigation = () => navigate('/cart');
  const handleHomeNavigation = () => navigate('/');

  useEffect(() => {
    const updateCartCount = () => {
      const storedCart = localStorage.getItem('cartProducts');
      try {
        const productsCart = storedCart ? JSON.parse(storedCart) : [];
        setCartCount(Array.isArray(productsCart) ? productsCart.length : 0);
      } catch {
        setCartCount(0);
      }
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    updateCartCount();
    window.addEventListener('storage', updateCartCount);
    window.addEventListener('cartUpdated', updateCartCount);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('storage', updateCartCount);
      window.removeEventListener('cartUpdated', updateCartCount);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isExpanded) {
      let timeoutId: NodeJS.Timeout;
      categories.forEach((_, index) => {
        timeoutId = setTimeout(() => {
          setVisibleCategories(prev => prev + 1);
        }, index * 100);
      });
      return () => clearTimeout(timeoutId);
    }
  }, [isExpanded, categories]);

  return (
    <HeaderContainer
      expanded={isExpanded}
      secondaryColor={secondaryColor}
      isScrolled={isScrolled}
      onMouseLeave={handleCollapse}
      ref={headerRef}
    >
      <HeaderMainContainer>
        <HeaderDetails>
          <CurrencySwitcher>
            <CurrencyText>USD</CurrencyText>
            <CurrencyArrow>▼</CurrencyArrow>
          </CurrencySwitcher>
          <CountrySwitcher>
            <CountryFlag>🇺🇸</CountryFlag>
            <CountryText>USA</CountryText>
          </CountrySwitcher>
          <Contacts>
            <ContactItem href="tel:+1234567890">
              <ContactIcon>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </ContactIcon>
            </ContactItem>
            <ContactItem href="mailto:info@example.com">
              <ContactIcon>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </ContactIcon>
            </ContactItem>
          </Contacts>
        </HeaderDetails>

        <HeaderLogo>
          <img
            src="/assets/logo.png"
            alt="logo"
            width="180px"
            onClick={handleHomeNavigation}
          />
        </HeaderLogo>

        <HeaderActions>
          <Button
            variant="tertiary"
            icon={<img src="/assets/heart.svg" alt="cart" />}
            onClick={handleCartNavigation}
          >
            Liked
          </Button>
          <Button
            variant="tertiary"
            icon={<img src="/assets/cart.svg" alt="cart" />}
            badgeContent={5}
            onClick={handleCartNavigation}
          >
            Cart
          </Button>
          <Button
            variant="tertiary"
            icon={<img src="/assets/account.svg" alt="account" />}
            onClick={toggleAccountBox}
          >
            Profile
          </Button>

          {isAccountBoxVisible && (
            <AccountBox
              isVisible={isAccountBoxVisible}
              onCloseAccountBox={closeAccountBox}
              onOpenLoginPopup={openLoginPopup}
              onOpenRegisterPopup={openRegisterPopup}
            />
          )}
          {isLoginPopupOpen && <LoginPopup onClose={closeLoginPopup} />}
          {isRegisterPopupOpen && (
            <RegisterPopup onClose={closeRegisterPopup} />
          )}
        </HeaderActions>
      </HeaderMainContainer>
      <ProductCategories
        onMouseEnter={handleProductCategoryHover}
        onMouseLeave={handleProductCategoryLeave}
      >
        <ProductCategory>
          <ProductCategoryName>Bags and Purses</ProductCategoryName>
        </ProductCategory>
        <ProductCategory>
          <ProductCategoryName>Dresses</ProductCategoryName>
        </ProductCategory>
        <ProductCategory>
          <ProductCategoryName>Accessories</ProductCategoryName>
        </ProductCategory>
      </ProductCategories>
      <SearchContent visible={isExpanded}>
        <SearchBar>
          <SearchIconLarge
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#cc0c5c"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="16" y1="16" x2="20" y2="20" />
          </SearchIconLarge>
          <SearchInput type="text" placeholder="Search categories..." />
        </SearchBar>

        <CategoryList>
          {categories.slice(0, visibleCategories).map((category, index) => (
            <CategoryItem key={index}>
              <CategoryArrow
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path d="M8.25 4.5L15.75 12l-7.5 7.5" />
              </CategoryArrow>
              <p>{category.name}</p>
            </CategoryItem>
          ))}
        </CategoryList>
      </SearchContent>

      <CatalogContent
        visible={isCatalogExpanded}
        onMouseEnter={() => setIsCatalogExpanded(true)}
        onMouseLeave={() => setIsCatalogExpanded(false)}
      >
        <CatalogCategories ref={containerRef}>
          {categories
            .filter(category => !category.parent_id)
            .map(category => (
              <SwiperCell
                key={category.id}
                onMouseEnter={() => handleCategoryHoverFromModel(category)}
                onClick={() =>
                  category.url && handleCategoryNavigation(category.url)
                }
              >
                <img src={category.svg} alt={category.name} />
                <p>{category.name}</p>
              </SwiperCell>
            ))}
        </CatalogCategories>

        {/* <VerticalLine /> */}

        {subcategories.length > 0 && (
          <SubcategoryList>
            {subcategories.map(sub => (
              <SubcategoryItem
                key={sub.id}
                onClick={() => sub.name && handleSubcategoryClick(sub.name)}
              >
                <p>{sub.name}</p>
              </SubcategoryItem>
            ))}
          </SubcategoryList>
        )}
      </CatalogContent>

      <MobileMenuContent isVisible={isMobileMenuVisible}>
        {categories.map((category, index) => {
          const backgroundImages = [
            '/assets/bag1.webp',
            '/assets/dress1.webp', 
            '/assets/bag2.jpg',
            '/assets/bag3.webp',
            '/assets/bag4.webp',
            '/assets/dress2.webp',
            '/assets/dress3.webp',
            '/assets/dress4.webp',
            '/assets/dress5.webp',
            '/assets/dress6.webp',
            '/assets/dress7.webp',
            '/assets/bg.webp',
            '/assets/fridgeSample.jpeg',
            '/assets/logo.png'
          ];
          
          return (
            <MobileMenuCard
              key={category.id}
              bgImage={backgroundImages[index % backgroundImages.length]}
              textColor="white"
              onClick={() => {
                if (category.url) {
                  handleCategoryNavigation(category.url);
                  closeMobileMenu();
                }
              }}
            >
              <MobileMenuLabel>{category.name}</MobileMenuLabel>
              <MobileMenuLinks>
                <MobileMenuLink
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (category.url) {
                      handleCategoryNavigation(category.url);
                      closeMobileMenu();
                    }
                  }}
                  aria-label={`View ${category.name} products`}
                >
                  View
                  <MobileMenuIcon>↗</MobileMenuIcon>
                </MobileMenuLink>
                <MobileMenuLink
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleCartNavigation();
                    closeMobileMenu();
                  }}
                  aria-label="Go to cart"
                >
                  Cart
                  <MobileMenuIcon>↗</MobileMenuIcon>
                </MobileMenuLink>
              </MobileMenuLinks>
            </MobileMenuCard>
          );
        })}
      </MobileMenuContent>
    </HeaderContainer>
  );
};

export default Header;
