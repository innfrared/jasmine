import styled from 'styled-components';
import { down } from '@/shared/styles/breakpoints';
import { typography } from '@/shared/styles/typography';
import Button from '../button';
import IconButton from '../icon-button';
import { uiColors, uiShadows } from '../tokens';

export const DrawerProductCard = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid ${uiColors.borderSoft};
  box-shadow: ${uiShadows.card};
  backdrop-filter: blur(10px);
  transition:
    transform 0.24s ease,
    border-color 0.24s ease,
    box-shadow 0.24s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(44, 31, 20, 0.14);
    box-shadow: ${uiShadows.cardHover};
  }
`;

export const DrawerProductCardButton = styled.button`
  display: grid;
  grid-template-columns: 92px minmax(0, 1fr);
  gap: 1rem;
  padding: 0;
  padding-right: 2.8rem;
  border: none;
  background: none;
  text-align: left;
  cursor: pointer;

  &:hover img {
    transform: scale(1.04);
  }

  ${down.tablet} {
    grid-template-columns: 82px minmax(0, 1fr);
    gap: 0.85rem;
  }
`;

export const DrawerProductMedia = styled.div`
  width: 92px;
  height: 114px;
  overflow: hidden;
  border-radius: 18px;
  background:
    linear-gradient(
      180deg,
      rgba(243, 235, 224, 0.76),
      rgba(237, 227, 214, 0.96)
    ),
    #f1e9de;
  box-shadow: inset 0 0 0 1px rgba(44, 31, 20, 0.04);

  ${down.tablet} {
    width: 82px;
    height: 104px;
  }
`;

export const DrawerProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.35s ease;
`;

export const DrawerProductContent = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.32rem;
  padding-top: 0.15rem;
`;

export const DrawerProductEyebrow = styled.span`
  ${typography.utility}
  color: #89715c;
`;

export const DrawerProductTitle = styled.h3`
  ${typography.sectionHeading}
  margin: 0;
  color: ${uiColors.ink};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const DrawerProductMeta = styled.span`
  ${typography.bodySmall}
  color: ${uiColors.inkMuted};
`;

export const DrawerProductPrice = styled.span`
  ${typography.label}
  margin-top: 0.22rem;
  color: ${uiColors.inkStrong};
`;

export const DrawerProductRailAction = styled(IconButton).attrs<{
  $variant: 'wishlist' | 'remove';
}>(({ $variant }) => ({
  tone: $variant === 'wishlist' ? 'wishlist' : 'default',
  size: 'md',
  surface: 'soft',
}))`
  position: absolute;
  top: 0.9rem;
  right: 0.9rem;
`;

export const DrawerProductFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

export const DrawerProductActionGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.65rem;
  flex: 1;
  width: 100%;

  ${down.tablet} {
    flex-wrap: wrap;
  }
`;

export const DrawerProductActionButton = styled(Button)`
  flex: 1 1 auto;
  min-height: 44px;
`;

export const DrawerProductQuantityControl = styled.div`
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  gap: 0;
  border-radius: 999px;
  border: 1px solid rgba(44, 31, 20, 0.12);
  background: rgba(255, 255, 255, 0.82);
  overflow: hidden;
  box-shadow: 0 12px 20px rgba(44, 31, 20, 0.05);
`;

export const DrawerProductQuantityStep = styled.button`
  ${typography.bodyStrong}
  width: 40px;
  height: 44px;
  border: none;
  background: transparent;
  color: #3f3026;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;

  &:hover {
    background: rgba(44, 31, 20, 0.06);
    color: ${uiColors.ink};
  }
`;

export const DrawerProductQuantityValue = styled.span`
  ${typography.label}
  min-width: 86px;
  padding-inline: 0.35rem;
  color: ${uiColors.ink};
  text-align: center;
`;
