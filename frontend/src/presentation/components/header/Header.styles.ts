import styled, { css } from 'styled-components';
import { keyframes } from 'styled-components';

export const HeaderContainer = styled.div<{
  $isScrolled: boolean;
}>`
  width: 100%;
  background-color: ${({ $isScrolled }) =>
    $isScrolled ? '#ffffff' : 'transparent'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  transition: background-color 0.3s ease-in-out;
  overflow: visible;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;
const HEADER_CENTER_VH = 1.5;

const toHeaderDesktop = keyframes`
  0% {
    top: 30vh;
    width: 40vw;
    transform: translateX(-50%) scale(1);;
    opacity: 1;
  }
  100% {
    top: ${HEADER_CENTER_VH}vh;
    width: 120px;
    transform: translateX(-50%) scale(1);
    opacity: 1;
  }
`;

const fromHeaderDesktop = keyframes`
  0% {
    top: ${HEADER_CENTER_VH}vh;
    width: 120px;
    transform: translateX(-50%);
    opacity: 1;
  }
  100% {
    top: 30vh;
    width: 40vw;
    transform: translateX(-50%);
    opacity: 1;
  }
`;

const toHeaderMobile = keyframes`
  0% {
    top: 30vh;
    width: 70vw;
    transform: translateX(-50%);
    opacity: 1;
  }
  100% {
    top: ${HEADER_CENTER_VH}vh;
    width: 20vw;
    transform: translateX(-50%);
    opacity: 1;
  }
`;

const fromHeaderMobile = keyframes`
  0% {
    top: ${HEADER_CENTER_VH}vh;
    width: 20vw;
    transform: translateX(-50%);
    opacity: 1;
  }
  100% {
    top: 30vh;
    width: 70vw;
    transform: translateX(-50%);
    opacity: 1;
  }
`;

export const AnimatedLogoWrapper = styled.div<{
  $phase: 'idle' | 'animating-out' | 'done' | 'animating-in';
}>`
  left: 50%;
  pointer-events: none;
  z-index: 9999;
  color: ${({ $phase }) =>
    $phase === 'done' || $phase === 'animating-out' ? '#9A8300' : '#ffffff'};
  transition: color 0.5s ease;
  transform-origin: top center;

  & img {
    width: 100%;
    height: auto;
    display: block;
  }

  ${({ $phase }) => {
    switch ($phase) {
      case 'idle':
        return css`
          position: fixed;
          top: 30vh;
          width: 40vw;
          transform: translateX(-50%);
          opacity: 1;

          @media (max-width: 768px) {
            width: 70vw;
          }
        `;
      case 'animating-out':
        return css`
          position: fixed;
          animation: ${toHeaderDesktop} 0.5s ease forwards;

          @media (max-width: 768px) {
            animation: ${toHeaderMobile} 0.5s ease forwards;
          }
        `;
      case 'animating-in':
        return css`
          position: fixed;
          animation: ${fromHeaderDesktop} 0.5s ease forwards;

          @media (max-width: 768px) {
            animation: ${fromHeaderMobile} 0.5s ease forwards;
          }
        `;
      case 'done':
        return css`
          position: fixed;
          top: 33%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 120px;
          z-index: 2;

          @media (max-width: 768px) {
            width: 20vw;
          }
        `;
    }
  }}
`;

export const HeaderMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 75vw;
  justify-content: space-between;
  min-height: 80px;
  align-items: center;
`;

export const HeaderLogo = styled.div`
  position: relative;
  overflow: visible;
  width: 120px;
  height: 60px;
  cursor: pointer;
  margin-left: 0;
`;

export const HeaderDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const HeaderActions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const CategoryContainer = styled.div<{ open?: boolean }>`
  border-radius: 10px;
  mix-blend-mode: luminosity;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${({ open }) =>
    open &&
    css`
      background-color: #e3e3e3;
    `}

  &:hover {
    background-color: #e3e3e3;
  }
`;

export const CategoryText = styled.p`
  margin: 0 10px 0 5px;

  @media (max-width: 480px) {
    display: none;
  }
`;

export const MenuIcon = styled.button`
  width: 32px;
  height: 32px;
  padding: 4px 5px;
  border: none;
  border-radius: 5px;
  background: none;
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    display: block;
    width: 100%;
    height: 0.125rem;
    border-radius: 2px;
    background-color: black;
    position: relative;
    transition: all 0.4s ease;
  }

  span + span {
    margin-top: 0.375rem;
  }
`;

export const SearchContent = styled.div<{ visible: boolean }>`
  border-radius: 0 0 10px 10px;
  z-index: 1000;
  overflow: hidden;
  max-height: ${({ visible }) => (visible ? '600px' : '0')};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition:
    max-height 0.5s ease,
    opacity 0.5s ease;
  padding: ${({ visible }) => (visible ? '15px' : '0')};
`;

export const CatalogContent = styled.div<{ visible: boolean }>`
  border-radius: 0 0 10px 10px;
  z-index: 1000;
  overflow: hidden;
  max-height: ${({ visible }) => (visible ? '600px' : '0')};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition:
    max-height 0.5s ease,
    opacity 0.5s ease;
  padding: ${({ visible }) => (visible ? '15px' : '0')};
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  margin-bottom: 10px;
  position: relative;
`;

export const SearchIconLarge = styled.svg`
  width: 36px;
  height: 36px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

export const SearchInput = styled.input`
  font-size: 18px;
  padding: 5px;
  border: none;
  outline: none;
  width: 100%;
  background: none;
  border-bottom: 2px solid transparent;
  transition: border-color 0.2s ease;

  &:focus,
  &:hover {
    border-bottom: 2px solid #cc0c5c;
  }

  &::placeholder {
    color: #888;
    font-weight: bold;
  }
`;

export const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 400px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #cc0c5c transparent;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #cc0c5c;
    border-radius: 10px;
  }
`;

export const CategoryItem = styled.li`
  display: flex;
  align-items: center;
  padding: 8px 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f9f9f9;
  }
`;

export const CategoryArrow = styled.svg`
  width: 16px;
  height: 16px;
  stroke: #a4a4a4;
  transition: transform 0.3s ease;

  ${CategoryItem}:hover & {
    transform: translateX(5px);
    stroke: #cc0c5c;
  }
`;

export const CatalogCategories = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-sizing: border-box;
  padding: 0 20px;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: #cc0c5c darkgrey;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: pink;
    border-radius: 10px;
    border: 2px solid transparent;
    background-clip: content-box;
  }
`;

export const SwiperCell = styled.div`
  position: relative;
  flex: 0 0 auto;
  width: inherit;
  display: flex;
  flex-direction: row;
  border-radius: 15px;
  background: linear-gradient(135deg, #ffffff, #f7f7f7);
  border: 1px solid #e5e5e5;
  cursor: pointer;
  transition:
    transform 0.2s,
    box-shadow 0.3s,
    background 0.3s;
  padding: 10px 13px;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  img {
    width: 30px;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    background: linear-gradient(135deg, #cc0c5c, #ff3366);

    p {
      color: #ffffff;
    }

    img {
      filter: brightness(0) invert(1);
    }
  }

  p {
    margin: 0;
    text-align: start;
    font-size: 14px;
    padding-left: 10px;
  }
`;

export const VerticalLine = styled.div`
  background-color: #cc0c5c;
  width: 2px;
  height: 600px;
  margin-left: 20px;
`;

export const SubcategoryList = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0 30px;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: #cc0c5c darkgrey;
`;

export const SubcategoryItem = styled.div`
  color: #cc0c5c;
  text-align: start;
  padding: 0 15px;
  cursor: pointer;

  &:hover {
    background-color: #efefef;
    border-radius: 20px;
    font-weight: bold;
    text-decoration-color: #cc0c5c;
  }
`;

export const AccountIcon = styled.div`
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
    filter: none;
    color: #cc0c5c;
  }

  svg path {
    transition: fill 0.3s ease;
  }

  &:hover svg path {
    stroke: #cc0c5c;
  }
`;

export const ScaleButton = styled.div`
  position: relative;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
    filter: none;
    color: #cc0c5c;

    svg path {
      stroke: #cc0c5c;
    }
  }
`;

export const CountBadge = styled.span`
  position: absolute;
  top: -3px;
  right: -5px;
  background-color: greenyellow;
  color: black;
  font-size: 10px;
  font-weight: bold;
  border-radius: 50%;
  width: 13px;
  height: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MobileMenuContent = styled.div<{ isVisible: boolean }>`
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  background: white;
  border-radius: 0 0 10px 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  pointer-events: ${({ isVisible }) => (isVisible ? 'auto' : 'none')};
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) =>
    isVisible ? 'translateY(0)' : 'translateY(-10px)'};
  transition: all 0.3s ease;
  z-index: 1000;
  max-height: 500px;
  overflow-y: auto;

  @media (max-width: 768px) {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    border-radius: 0;
    max-height: calc(100vh - 60px);
    grid-template-columns: 1fr;
  }
`;

export const MobileMenuCard = styled.div<{
  bgImage?: string;
  textColor?: string;
}>`
  background: ${({ bgImage }) =>
    bgImage
      ? `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bgImage})`
      : 'linear-gradient(135deg, #ffffff, #f7f7f7)'};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: ${({ textColor }) => textColor || '#333'};
  border-radius: 8px;
  padding: 12px 16px;
  border: 1px solid #e5e5e5;
  cursor: pointer;
  transition: all 0.3s ease;
  min-height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const MobileMenuLabel = styled.div`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 8px;
  letter-spacing: -0.5px;
  color: white;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
`;

export const MobileMenuLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-top: auto;
`;

export const MobileMenuLink = styled.a`
  font-size: 12px;
  color: white;
  text-decoration: none;
  padding: 4px 8px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 4px;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-1px);
  }
`;

export const MobileMenuIcon = styled.span`
  font-size: 12px;
  transform: rotate(45deg);
`;

export const ProductCategories = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0;
  margin: 0;
  justify-content: center;
  align-items: center;
`;

export const ProductCategory = styled.div`
  padding: 4px 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  border-left: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;

  &:first-child {
    border-left: none;
  }
`;

export const ProductCategoryName = styled.span`
  color: #000;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: color 0.3s ease;

  ${ProductCategory}:hover & {
    color: #666;
  }
`;

export const CurrencySwitcher = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 20px;
  background: #f5f5f5;
  transition: all 0.3s ease;

  &:hover {
    background: #e0e0e0;
  }
`;

export const CurrencyText = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #333;
`;

export const CurrencyArrow = styled.span`
  font-size: 12px;
  color: #666;
  transition: transform 0.3s ease;

  ${CurrencySwitcher}:hover & {
    transform: rotate(180deg);
  }
`;

export const CountrySwitcher = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 20px;
  background: #f5f5f5;
  transition: all 0.3s ease;

  &:hover {
    background: #e0e0e0;
  }
`;

export const CountryFlag = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  overflow: hidden;
  border: 2px solid #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const CountryText = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #333;
`;

export const Contacts = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  border-radius: 20px;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: #e0e0e0;
    transform: translateY(-1px);
  }
`;

export const ContactIcon = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #666;
`;

export const ContactText = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: #333;
`;

export const UserIconWrapper = styled.div`
  position: relative;
  display: inline-flex;
`;

export const UserIconButton = styled.button<{ $isScrolled: boolean }>`
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: ${({ $isScrolled }) => ($isScrolled ? '#1a1a1a' : '#ffffff')};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  border-radius: 50%;
  width: 40px;
  height: 40px;

  &:hover {
    background: ${({ $isScrolled }) =>
      $isScrolled ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.1)'};
    color: #d4af37;
    transform: scale(1.1);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const UserModal = styled.div`
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  background: white;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  min-width: 200px;
  padding: 1rem;
  z-index: 10001;
  animation: slideDown 0.2s ease-out;
  border: 1px solid rgba(0, 0, 0, 0.08);
  white-space: nowrap;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    right: 0;
    left: auto;
  }
`;

export const UserModalMessage = styled.p`
  font-size: 0.9rem;
  color: #666;
  text-align: center;
  margin: 0 0 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #e0e0e0;
  font-family: 'Questrial', sans-serif;
`;

export const UserModalItem = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #1a1a1a;
  font-size: 0.95rem;
  font-weight: 500;
  font-family: 'Questrial', sans-serif;
  border-radius: 8px;
  transition: all 0.2s ease;
  text-align: left;

  &:hover {
    background: #f5f5f5;
    color: #d4af37;
  }

  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  }

  span {
    flex: 1;
  }
`;

export const LikedIconWrapper = styled.div`
  position: relative;
  display: inline-flex;
`;

export const LikedButton = styled.button<{ $isScrolled: boolean }>`
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: ${({ $isScrolled }) => ($isScrolled ? '#1a1a1a' : '#ffffff')};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: ${({ $isScrolled }) =>
      $isScrolled ? 'rgba(204, 12, 92, 0.1)' : 'rgba(204, 12, 92, 0.15)'};
    opacity: 0;
    transform: scale(0.8);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    background: ${({ $isScrolled }) =>
      $isScrolled ? 'rgba(204, 12, 92, 0.08)' : 'rgba(255, 255, 255, 0.12)'};
    color: #cc0c5c;
    transform: scale(1.08);
  }

  &:hover::before {
    opacity: 1;
    transform: scale(1);
  }

  &:active {
    transform: scale(1.05);
  }

  svg {
    width: 20px;
    height: 20px;
    position: relative;
    z-index: 1;
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`;

export const LikedBadge = styled.span`
  position: absolute;
  top: 2px;
  right: 2px;
  background: #cc0c5c;
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 600;
  font-family: 'Questrial', sans-serif;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 10;
`;

export const CartIconWrapper = styled.div`
  position: relative;
  display: inline-flex;
`;

export const CartButton = styled.button<{ $isScrolled: boolean }>`
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: ${({ $isScrolled }) => ($isScrolled ? '#1a1a1a' : '#ffffff')};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: ${({ $isScrolled }) =>
      $isScrolled ? 'rgba(212, 175, 55, 0.1)' : 'rgba(212, 175, 55, 0.15)'};
    opacity: 0;
    transform: scale(0.8);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    background: ${({ $isScrolled }) =>
      $isScrolled ? 'rgba(212, 175, 55, 0.08)' : 'rgba(255, 255, 255, 0.12)'};
    color: #d4af37;
    transform: scale(1.08);
  }

  &:hover::before {
    opacity: 1;
    transform: scale(1);
  }

  &:active {
    transform: scale(1.05);
  }

  svg {
    width: 20px;
    height: 20px;
    position: relative;
    z-index: 1;
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`;

export const CartBadge = styled.span`
  position: absolute;
  top: 2px;
  right: 2px;
  background: #d4af37;
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 600;
  font-family: 'Questrial', sans-serif;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 10;
`;

export const NavigationBar = styled.nav<{ $isScrolled: boolean }>`
  width: 100%;
  background: ${({ $isScrolled }) => ($isScrolled ? '#001f3f' : 'transparent')};
  transition: background 0.3s ease;
  border-top: ${({ $isScrolled }) =>
    $isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'};
  padding: 0.5rem 0;
  margin-top: 0;

  @media (max-width: 968px) {
    display: none;
  }
`;

export const NavContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
  padding: 0 1rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;

  @media (max-width: 1200px) {
    gap: 1.25rem;
  }
`;

export const NavItem = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;

  &:hover button::after,
  &:focus-within button::after {
    width: 100%;
  }
`;

export const Submenu = styled.div`
  position: absolute;
  top: calc(100% + 0.6rem);
  left: 50%;
  transform: translate(-50%, 8px);
  background: #ffffff;
  border-radius: 12px;
  padding: 0.75rem 0.9rem;
  min-width: 220px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition:
    opacity 0.2s ease,
    transform 0.2s ease,
    visibility 0.2s ease;
  z-index: 2000;

  ${NavItem}:hover &,
  ${NavItem}:focus-within & {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    transform: translate(-50%, 0);
  }
`;

export const SubmenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

export const SubmenuItem = styled.li`
  width: 100%;
`;

export const SubmenuLink = styled.button`
  width: 100%;
  text-align: left;
  border: none;
  background: none;
  padding: 0.4rem 0.35rem;
  border-radius: 8px;
  color: #001f3f;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition:
    background 0.2s ease,
    color 0.2s ease;

  &:hover,
  &:focus-visible {
    background: rgba(0, 31, 63, 0.08);
    color: #d4af37;
    outline: none;
  }
`;

export const NavLinkDivider = styled.span`
  width: 1px;
  height: 20px;
  background: #9a8300;
  flex-shrink: 0;
`;

export const NavLink = styled.button<{ $isScrolled: boolean }>`
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 500;
  font-family: 'Questrial', sans-serif;
  cursor: pointer;
  padding: 0.5rem 0;
  position: relative;
  transition: color 0.2s ease;
  text-transform: capitalize;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #d4af37;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #d4af37;

    &::after {
      width: 100%;
    }
  }

  @media (max-width: 1200px) {
    font-size: 0.95rem;
  }
`;
