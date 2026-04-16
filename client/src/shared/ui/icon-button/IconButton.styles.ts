import styled, { css } from 'styled-components';
import { uiColors, uiFocusRing, uiRadii, uiShadows } from '../tokens';

export type IconButtonTone = 'default' | 'wishlist' | 'shoppingBag';
export type IconButtonSize = 'sm' | 'md' | 'lg';
export type IconButtonSurface = 'soft' | 'ghost';

type IconButtonBaseProps = {
  $tone: IconButtonTone;
  $size: IconButtonSize;
  $surface: IconButtonSurface;
  $rotateOnHover: boolean;
};

const sizeStyles: Record<IconButtonSize, ReturnType<typeof css>> = {
  sm: css`
    width: 34px;
    height: 34px;
  `,
  md: css`
    width: 38px;
    height: 38px;
  `,
  lg: css`
    width: 42px;
    height: 42px;
  `,
};

const toneColors: Record<IconButtonTone, string> = {
  default: uiColors.inkSoft,
  wishlist: uiColors.wishlist,
  shoppingBag: uiColors.gold,
};

const toneHoverColors: Record<IconButtonTone, string> = {
  default: uiColors.inkStrong,
  wishlist: uiColors.wishlistHover,
  shoppingBag: uiColors.gold,
};

export const IconButtonBase = styled.button<IconButtonBaseProps>`
  border: 1px solid ${uiColors.borderSoft};
  border-radius: ${uiRadii.pill};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ $tone }) => toneColors[$tone]};
  transition:
    transform 0.2s ease,
    background-color 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    color 0.2s ease;

  ${({ $size }) => sizeStyles[$size]}

  ${({ $surface }) =>
    $surface === 'ghost'
      ? css`
          background: transparent;
          border-color: transparent;
          box-shadow: none;
        `
      : css`
          background: ${uiColors.surfaceGlass};
          box-shadow: ${uiShadows.buttonSoft};
        `}

  &:hover:not(:disabled) {
    color: ${({ $tone }) => toneHoverColors[$tone]};
    background: ${({ $surface }) =>
      $surface === 'ghost'
        ? 'rgba(26, 20, 17, 0.06)'
        : uiColors.surfaceStronger};
    border-color: ${uiColors.border};
    box-shadow: ${({ $surface }) =>
      $surface === 'ghost' ? 'none' : uiShadows.buttonSoft};
    transform: ${({ $rotateOnHover }) =>
      $rotateOnHover ? 'rotate(90deg) translateY(-1px)' : 'translateY(-1px)'};
  }

  &:active:not(:disabled) {
    transform: ${({ $rotateOnHover }) =>
      $rotateOnHover ? 'rotate(90deg) scale(0.96)' : 'translateY(0)'};
  }

  &:focus-visible {
    outline: none;
    box-shadow: ${uiFocusRing};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.56;
    transform: none;
    box-shadow: none;
  }
`;

export const IconButtonInner = styled.span`
  width: 18px;
  height: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg,
  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: contain;
  }
`;
