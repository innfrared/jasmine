import Link from 'next/link';
import styled from 'styled-components';
import { typography } from '@/shared/styles/typography';
import type { EditorialImageSizeVariant } from './editorial.types';

type GridEditorialImageProps = {
  $desktopPosition: string;
  $mobilePosition: string;
};

type GridEditorialTileProps = {
  $sizeVariant?: EditorialImageSizeVariant;
};

export const GridEditorialSection = styled.section`
  width: 100%;
  padding: clamp(4.5rem, 8vw, 7rem) 0 clamp(6rem, 9vw, 8.5rem);
  background: linear-gradient(
    180deg,
    rgba(248, 244, 238, 0.8) 0%,
    rgba(248, 244, 238, 0.34) 32%,
    #ffffff 100%
  );
`;

export const GridEditorialInner = styled.div`
  width: min(1440px, calc(100vw - 72px));
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 900px) {
    width: calc(100vw - 32px);
    gap: 1.5rem;
  }
`;

export const GridEditorialHeader = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const GridEditorialHeading = styled.h2`
  ${typography.editorialScriptHeading};
  font-size: clamp(4rem, 3.6vw + 1.4rem, 6rem);
  line-height: 0.84;
  margin: 0;
`;

export const GridEditorialTiles = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const GridEditorialTile = styled(Link)<GridEditorialTileProps>`
  position: relative;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  min-height: ${({ $sizeVariant }) =>
    $sizeVariant === 'short' ? '28rem' : '37rem'};
  background: #ede5db;

  &:hover img,
  &:focus-visible img {
    transform: scale(1.03);
  }

  &:focus-visible {
    outline: none;
  }

  @media (max-width: 768px) {
    min-height: ${({ $sizeVariant }) =>
      $sizeVariant === 'thumbnail' ? '22rem' : '30rem'};
  }
`;

export const GridEditorialImage = styled.img<GridEditorialImageProps>`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: ${({ $desktopPosition }) => $desktopPosition};
  transition: transform 0.55s ease;

  @media (max-width: 768px) {
    object-position: ${({ $mobilePosition }) => $mobilePosition};
  }
`;

export const GridEditorialTileOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(17, 12, 9, 0) 45%,
    rgba(17, 12, 9, 0.22) 100%
  );
`;

export const GridEditorialTileLabel = styled.span`
  ${typography.label};
  position: relative;
  z-index: 1;
  color: rgba(247, 241, 232, 0.95);
  margin: 0 0 1.4rem 1.4rem;
`;
