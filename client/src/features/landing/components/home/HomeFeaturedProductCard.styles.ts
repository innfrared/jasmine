import Link from 'next/link';
import styled from 'styled-components';
import { down } from '@/shared/styles/breakpoints';
import { uiColors, uiMotion } from '@/shared/ui/tokens';
import { typography } from '@/shared/styles/typography';

const hoverScale = `
  transition: transform ${uiMotion.hover}, opacity ${uiMotion.hover};
`;

export const CardLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: inherit;

  &:focus-visible {
    outline: 2px solid ${uiColors.inkSoft};
    outline-offset: 3px;
  }
`;

export const ImageWrap = styled.div<{ $variant: 'featured' | 'support' }>`
  position: relative;
  width: 100%;
  aspect-ratio: ${({ $variant }) =>
    $variant === 'featured' ? '5 / 6' : '3 / 4'};
  overflow: hidden;
  background: rgba(44, 31, 20, 0.04);

  ${down.laptop} {
    aspect-ratio: ${({ $variant }) =>
      $variant === 'featured' ? '6 / 7' : '4 / 5'};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    display: block;
    ${hoverScale}
  }

  ${CardLink}:hover img,
  ${CardLink}:focus-visible img {
    transform: scale(1.025);
    opacity: 0.96;
  }
`;

export const Meta = styled.div<{ $variant: 'featured' | 'support' }>`
  margin-top: ${({ $variant }) =>
    $variant === 'featured'
      ? 'clamp(0.85rem, 1.8vw, 1.15rem)'
      : 'clamp(0.55rem, 1.2vw, 0.8rem)'};
  padding: 0 0.15rem;
`;

export const Title = styled.span`
  ${typography.bodySmallCaps}
  display: block;
  color: ${uiColors.inkElevated};
`;

export const PriceLine = styled.span`
  ${typography.utility}
  display: block;
  margin-top: 0.3rem;
  color: ${uiColors.inkSubtle};
`;
