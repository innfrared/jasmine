import styled, { css, keyframes } from 'styled-components';
import { uiColors, uiFocusRing, uiRadii, uiShadows, uiTypography } from '../tokens';
import type {
  ButtonIconPlacement,
  ButtonSize,
  ButtonVariant,
} from './button.types';

type ButtonBaseProps = {
  $variant: ButtonVariant;
  $size: ButtonSize;
  $fullWidth: boolean;
  $iconPlacement: ButtonIconPlacement;
  $isLoading: boolean;
};

type IconProps = {
  $size: ButtonSize;
  $iconPlacement: ButtonIconPlacement;
};

const loadingSpin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const sizeStyles: Record<ButtonSize, ReturnType<typeof css>> = {
  sm: css`
    min-height: 38px;
    padding: 0.72rem 1rem;
    font-size: 0.76rem;
    gap: 0.45rem;
  `,
  md: css`
    min-height: 44px;
    padding: 0.85rem 1.2rem;
    font-size: 0.84rem;
    gap: 0.55rem;
  `,
  lg: css`
    min-height: 50px;
    padding: 0.95rem 1.4rem;
    font-size: 0.92rem;
    gap: 0.65rem;
  `,
};

export const ButtonBase = styled.button<ButtonBaseProps>`
  position: relative;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  border-radius: ${({ $variant }) =>
    $variant === 'link' ? '0' : uiRadii.sm};
  border: 1px solid transparent;
  background: transparent;
  color: ${uiColors.inkStrong};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-family: ${uiTypography.sans};
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease,
    opacity 0.2s ease;

  ${({ $size }) => sizeStyles[$size]}

  ${({ $variant }) =>
    $variant === 'primary' &&
    css`
      background: ${uiColors.navySoft};
      border-color: ${uiColors.navySoft};
      color: ${uiColors.inkInverse};

      &:hover:not(:disabled) {
        transform: translateY(-1px);
        background: ${uiColors.navyElevated};
        border-color: ${uiColors.navyElevated};
        box-shadow: ${uiShadows.button};
      }
    `}

  ${({ $variant }) =>
    $variant === 'secondary' &&
    css`
      background: ${uiColors.surfaceWarm};
      border-color: ${uiColors.borderCool};
      color: ${uiColors.navyInk};

      &:hover:not(:disabled) {
        transform: translateY(-1px);
        background: ${uiColors.surfaceWarmStrong};
        border-color: ${uiColors.borderCoolStrong};
        box-shadow: ${uiShadows.buttonSoft};
      }
    `}

  ${({ $variant }) =>
    $variant === 'ghost' &&
    css`
      background: transparent;
      color: ${uiColors.navyInk};

      &:hover:not(:disabled) {
        transform: translateY(-1px);
        background: rgba(49, 68, 89, 0.06);
        color: ${uiColors.navyElevated};
      }
    `}

  ${({ $variant }) =>
    $variant === 'link' &&
    css`
      min-height: auto;
      padding: 0.35rem 0;
      color: ${uiColors.navySoft};
      gap: 0.45rem;
      letter-spacing: 0.12em;

      &:hover:not(:disabled) {
        color: ${uiColors.navyElevated};
      }

      &::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 1px;
        background: currentColor;
        transform: scaleX(0);
        transform-origin: left center;
        transition: transform 0.24s ease;
      }

      &:hover::after {
        transform: scaleX(1);
      }
    `}

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

export const ButtonContent = styled.span<{
  $iconPlacement: ButtonIconPlacement;
  $isLoading: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ $iconPlacement }) => ($iconPlacement === 'top' ? '0.32rem' : 'inherit')};
  flex-direction: ${({ $iconPlacement }) =>
    $iconPlacement === 'top' ? 'column' : 'row'};
  opacity: ${({ $isLoading }) => ($isLoading ? 0 : 1)};
`;

export const ButtonLabel = styled.span<{
  $iconPlacement: ButtonIconPlacement;
}>`
  font-size: inherit;
  line-height: ${({ $iconPlacement }) =>
    $iconPlacement === 'top' ? '1.18' : '1'};
  text-align: center;
  white-space: ${({ $iconPlacement }) =>
    $iconPlacement === 'top' ? 'normal' : 'nowrap'};
`;

export const ButtonIcon = styled.span<IconProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${({ $size, $iconPlacement }) => {
    if ($iconPlacement === 'top') {
      return $size === 'lg' ? '1.35rem' : '1.15rem';
    }

    return $size === 'lg' ? '1.15rem' : '1rem';
  }};
  height: ${({ $size, $iconPlacement }) => {
    if ($iconPlacement === 'top') {
      return $size === 'lg' ? '1.35rem' : '1.15rem';
    }

    return $size === 'lg' ? '1.15rem' : '1rem';
  }};

  svg,
  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: contain;
  }
`;

export const ButtonLoader = styled.span`
  position: absolute;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: 1.8px solid currentColor;
  border-top-color: transparent;
  animation: ${loadingSpin} 0.75s linear infinite;
`;
