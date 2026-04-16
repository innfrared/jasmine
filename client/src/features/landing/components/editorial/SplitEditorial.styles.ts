import styled from 'styled-components';
import { typography } from '@/shared/styles/typography';

type EditorialImageProps = {
  $desktopPosition: string;
  $mobilePosition: string;
  $aspectRatio?: string;
  $minHeight?: string;
};

export const SplitEditorialSection = styled.section`
  width: 100%;
  padding: clamp(5.5rem, 9vw, 8rem) 0;
`;

export const SplitEditorialInner = styled.div`
  width: min(1440px, calc(100vw - 72px));
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media (max-width: 900px) {
    width: calc(100vw - 32px);
    gap: 1.5rem;
  }
`;

export const SplitEditorialPrimaryRow = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: clamp(1.5rem, 2vw, 2.5rem);
  align-items: end;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
`;

export const SplitEditorialHeading = styled.h2`
  ${typography.editorialScriptHeading};
  grid-column: 4 / span 4;
  font-size: clamp(4.2rem, 4vw + 1.5rem, 6.6rem);
  line-height: 0.84;
  margin: 0;
  padding-bottom: clamp(0.8rem, 1.4vw, 1.5rem);
  max-width: min(100%, calc(8.5ch + 72px));
  justify-self: end;
  text-align: right;
  transform: translateY(clamp(-1.25rem, -1.8vw, -2rem));

  @media (max-width: 900px) {
    grid-column: auto;
    font-size: clamp(3.7rem, 10vw, 5.2rem);
    padding-bottom: 0;
    max-width: min(100%, calc(7.5ch + 32px));
    justify-self: start;
    text-align: left;
    transform: none;
  }
`;

export const SplitEditorialMainImage = styled.div`
  grid-column: 8 / span 5;
  justify-self: center;
  width: min(100%, 34rem);

  @media (max-width: 900px) {
    grid-column: auto;
    width: 100%;
  }
`;

export const SplitEditorialPrimaryImage = styled.img<EditorialImageProps>`
  width: 100%;
  aspect-ratio: ${({ $aspectRatio }) => $aspectRatio ?? '4 / 5'};
  min-height: ${({ $minHeight }) => $minHeight ?? 'auto'};
  object-fit: cover;
  object-position: ${({ $desktopPosition }) => $desktopPosition};
  display: block;

  @media (max-width: 768px) {
    object-position: ${({ $mobilePosition }) => $mobilePosition};
  }
`;

export const SplitEditorialSecondaryRow = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 1rem;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const SplitEditorialSecondaryGrid = styled.div`
  grid-column: 1 / span 7;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  max-width: min(100%, 50rem);

  @media (max-width: 900px) {
    grid-column: auto;
    grid-template-columns: 1fr;
    max-width: none;
  }
`;

export const SplitEditorialSecondaryImage = styled.img<EditorialImageProps>`
  width: 100%;
  aspect-ratio: ${({ $aspectRatio }) => $aspectRatio ?? '6 / 7'};
  min-height: ${({ $minHeight }) => $minHeight ?? 'auto'};
  object-fit: cover;
  object-position: ${({ $desktopPosition }) => $desktopPosition};
  display: block;

  @media (max-width: 768px) {
    object-position: ${({ $mobilePosition }) => $mobilePosition};
  }
`;

export const SplitEditorialInfo = styled.div`
  grid-column: 8 / span 3;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-self: start;
  gap: 1.35rem;
  max-width: 22rem;
  margin-left: clamp(-1.45rem, -2vw, -2.15rem);
  padding: clamp(1rem, 1.8vw, 1.5rem) 0 0 0;

  @media (max-width: 900px) {
    grid-column: auto;
    max-width: none;
    margin-left: 0;
    padding: 0.25rem 0 0;
  }
`;

export const SplitEditorialInfoBody = styled.p`
  ${typography.body};
  margin: 0;
  max-width: 26rem;
  color: rgba(26, 20, 17, 0.7);
`;
