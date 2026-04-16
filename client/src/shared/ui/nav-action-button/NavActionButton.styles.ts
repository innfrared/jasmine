import styled from 'styled-components';
import { uiColors, uiFocusRing, uiTypography } from '../tokens';

export type NavActionTone = 'default' | 'wishlist' | 'shoppingBag';

type NavActionButtonBaseProps = {
  $tone: NavActionTone;
  $isScrolled: boolean;
  $active: boolean;
  $hasLabel: boolean;
};

const toneColors: Record<NavActionTone, string> = {
  default: uiColors.inkStrong,
  wishlist: '#cc0c5c',
  shoppingBag: uiColors.gold,
};

const toneBackgrounds: Record<NavActionTone, string> = {
  default: 'rgba(26, 20, 17, 0.08)',
  wishlist: 'rgba(204, 12, 92, 0.1)',
  shoppingBag: 'rgba(212, 175, 55, 0.1)',
};

export const NavActionButtonBase = styled.button<NavActionButtonBaseProps>`
  position: relative;
  width: ${({ $hasLabel }) => ($hasLabel ? 'auto' : '40px')};
  min-width: 40px;
  height: 40px;
  padding: ${({ $hasLabel }) => ($hasLabel ? '0 0.8rem' : '0.5rem')};
  border: none;
  border-radius: 999px;
  background: none;
  color: ${({ $tone, $active, $isScrolled }) => {
    if ($active) {
      return toneColors[$tone];
    }

    return $isScrolled ? uiColors.inkStrong : uiColors.white;
  }};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  cursor: pointer;
  transition:
    transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 999px;
    background: ${({ $tone, $active, $isScrolled }) => {
      if ($active || $isScrolled) {
        return toneBackgrounds[$tone];
      }

      return uiColors.whiteSoft;
    }};
    opacity: ${({ $active }) => ($active ? 1 : 0)};
    transform: scale(0.8);
    transition:
      opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),
      transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover:not(:disabled) {
    background: ${({ $tone, $isScrolled }) =>
      $isScrolled ? toneBackgrounds[$tone] : uiColors.whiteSoft};
    color: ${({ $tone }) => toneColors[$tone]};
    transform: scale(1.08);
  }

  &:hover::before {
    opacity: 1;
    transform: scale(1);
  }

  &:active:not(:disabled) {
    transform: scale(1.05);
  }

  &:focus-visible {
    outline: none;
    box-shadow: ${uiFocusRing};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.56;
  }
`;

export const NavActionIcon = styled.span`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  transition: transform 0.2s ease;

  svg,
  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: contain;
  }

  ${NavActionButtonBase}:hover & {
    transform: scale(1.1);
  }
`;

export const NavActionLabel = styled.span`
  position: relative;
  z-index: 1;
  font-family: ${uiTypography.sans};
  font-size: 0.74rem;
  font-weight: 500;
  line-height: 1;
`;

export const NavActionBadge = styled.span`
  position: absolute;
  top: 2px;
  right: 2px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: ${uiColors.gold};
  color: ${uiColors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${uiTypography.sans};
  font-size: 0.7rem;
  font-weight: 600;
  line-height: 1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 2;
`;

