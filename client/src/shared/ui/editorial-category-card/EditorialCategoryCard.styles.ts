import Link from 'next/link';
import styled from 'styled-components';
import { media, up } from '@/shared/styles/breakpoints';
import { fontFamilies } from '@/shared/styles/typography';
import { uiColors, uiMotion } from '@/shared/ui/tokens';

const imageHover = `
  transition: transform ${uiMotion.hover};
  will-change: transform;
`;

const cardOverlayGradient = `
  background: linear-gradient(
    to top,
    ${uiColors.overlayNeutral042} 0%,
    ${uiColors.overlayNeutral014} 38%,
    ${uiColors.overlayNeutral002} 100%
  );
`;

const cardOverlayGradientSecondary = `
  background: linear-gradient(
    to top,
    ${uiColors.overlayNeutral028} 0%,
    ${uiColors.overlayNeutral008} 38%,
    ${uiColors.overlayNeutral002} 100%
  );
`;

export const CardLink = styled(Link)<{ $overlayVariant: 'default' | 'lighter' }>`
  position: relative;
  display: block;
  overflow: hidden;
  width: 100%;
  aspect-ratio: 4 / 5;
  text-decoration: none;
  color: inherit;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;
    ${({ $overlayVariant }) =>
      $overlayVariant === 'lighter'
        ? cardOverlayGradientSecondary
        : cardOverlayGradient};
  }

  &:focus-visible {
    outline: 2px solid ${uiColors.inkSoft};
    outline-offset: 4px;
  }

  ${media.motionOk} {
    &:hover img,
    &:focus-visible img {
      transform: scale(1.03);
    }
  }
`;

export const CardMedia = styled.div<{
  $mobilePosition: string;
  $desktopPosition: string;
}>`
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: ${({ $mobilePosition }) => $mobilePosition};
    transform-origin: center center;
    ${imageHover}

    ${media.motionReduce} {
      transition: none;
    }
  }

  ${up.tablet} {
    img {
      object-position: ${({ $desktopPosition }) => $desktopPosition};
    }
  }
`;

export const CardLabel = styled.span`
  position: absolute;
  left: 22px;
  bottom: 22px;
  z-index: 2;
  display: block;
  max-width: calc(100% - 44px);
  font-family: ${fontFamilies.sans};
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${uiColors.white};
`;

export const CardLabelText = styled.span`
  display: inline-block;
  font-size: 0.8125rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
  transition: font-size ${uiMotion.hover};

  ${media.motionReduce} {
    transition: none;
  }

  ${CardLink}:hover &,
  ${CardLink}:focus-visible & {
    font-size: 1.0625rem;
  }
`;
