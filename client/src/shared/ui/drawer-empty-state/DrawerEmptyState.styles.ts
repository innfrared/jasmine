import styled from 'styled-components';
import Button from '../button';
import { uiColors, uiShadows, uiTypography } from '../tokens';

export const DrawerEmptyStateShell = styled.div`
  flex: 1;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.6rem 2.4rem;
  text-align: center;
`;

export const DrawerEmptyStateVisual = styled.div<{
  $variant: 'wishlist' | 'shoppingBag';
}>`
  position: relative;
  width: 168px;
  height: 168px;
  display: grid;
  place-items: center;
  margin-bottom: 1.45rem;

  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    transition: transform 0.25s ease;
  }

  &::before {
    border: 1px solid
      ${({ $variant }) =>
        $variant === 'wishlist'
          ? 'rgba(140, 47, 77, 0.18)'
          : 'rgba(72, 58, 44, 0.14)'};
    border-radius: ${({ $variant }) =>
      $variant === 'wishlist' ? '50%' : '34px'};
    transform: ${({ $variant }) =>
      $variant === 'wishlist' ? 'scale(1)' : 'rotate(-6deg)'};
  }

  &::after {
    inset: 18px;
    border-radius: ${({ $variant }) =>
      $variant === 'wishlist' ? '50%' : '28px'};
    background:
      linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.82),
        rgba(249, 242, 233, 0.96)
      ),
      #fffaf4;
    box-shadow:
      0 24px 32px rgba(44, 31, 20, 0.08),
      inset 0 0 0 1px rgba(44, 31, 20, 0.04);
  }
`;

export const DrawerEmptyStateAccent = styled.div<{
  $variant: 'wishlist' | 'shoppingBag';
}>`
  position: absolute;
  width: ${({ $variant }) => ($variant === 'wishlist' ? '132px' : '120px')};
  height: ${({ $variant }) => ($variant === 'wishlist' ? '132px' : '120px')};
  border-radius: ${({ $variant }) =>
    $variant === 'wishlist' ? '50%' : '26px'};
  border: 1px solid
    ${({ $variant }) =>
      $variant === 'wishlist'
        ? 'rgba(140, 47, 77, 0.12)'
        : 'rgba(72, 58, 44, 0.1)'};
  transform: ${({ $variant }) =>
    $variant === 'wishlist' ? 'translateY(2px)' : 'rotate(8deg)'};
  z-index: 1;
`;

export const DrawerEmptyStateIconWrap = styled.div<{
  $variant: 'wishlist' | 'shoppingBag';
}>`
  position: relative;
  z-index: 2;
  width: 86px;
  height: 86px;
  border-radius: ${({ $variant }) =>
    $variant === 'wishlist' ? '50%' : '24px'};
  background: ${({ $variant }) =>
    $variant === 'wishlist'
      ? 'rgba(255, 243, 248, 0.9)'
      : 'rgba(247, 241, 232, 0.9)'};
  color: ${({ $variant }) =>
    $variant === 'wishlist' ? uiColors.wishlist : '#3f3026'};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow:
    0 16px 28px rgba(44, 31, 20, 0.08),
    inset 0 0 0 1px rgba(255, 255, 255, 0.42);
`;

export const DrawerEmptyStateLabel = styled.span`
  margin-bottom: 0.65rem;
  color: #8e7863;
  font-family: ${uiTypography.sans};
  font-size: 0.68rem;
  letter-spacing: 0.24em;
  line-height: 1;
  text-transform: uppercase;
`;

export const DrawerEmptyStateTitle = styled.h3`
  max-width: 10ch;
  margin: 0;
  color: ${uiColors.inkStrong};
  font-family: ${uiTypography.serif};
  font-size: clamp(1.95rem, 3vw, 2.35rem);
  font-weight: 400;
  line-height: 0.98;
  letter-spacing: 0.02em;
`;

export const DrawerEmptyStateDescription = styled.p`
  max-width: 300px;
  margin: 0.85rem 0 1.5rem;
  color: ${uiColors.inkMuted};
  font-family: ${uiTypography.sans};
  font-size: 0.92rem;
  line-height: 1.65;
`;

export const DrawerEmptyStateButton = styled(Button).attrs({
  variant: 'primary',
  size: 'md',
})`
  width: auto;
  min-width: 218px;
  min-height: 48px;
  padding-inline: 1.65rem;
  font-size: 0.78rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  box-shadow: ${uiShadows.button};
`;
