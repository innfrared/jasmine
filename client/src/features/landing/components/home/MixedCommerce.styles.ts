import Link from 'next/link';
import styled from 'styled-components';
import { down, up } from '@/shared/styles/breakpoints';
import { uiColors, uiMotion } from '@/shared/ui/tokens';
import { typography } from '@/shared/styles/typography';

const imgEase = `
  transition: transform ${uiMotion.hover};
`;

export const Section = styled.section`
  width: 100%;
  padding: clamp(5rem, 11.5vw, 8.75rem) clamp(1.25rem, 5vw, 3.5rem);
  ${down.laptop} {
    padding: clamp(4rem, 9vw, 6.75rem) clamp(1.25rem, 5vw, 3.5rem);
  }
  background: ${uiColors.surfaceHomeLightA};
`;

export const Inner = styled.div`
  width: min(1320px, 100%);
  margin: 0 auto;
`;

export const Eyebrow = styled.p`
  ${typography.utility}
  color: ${uiColors.inkSubtle};
  margin: 0 0 clamp(2.25rem, 4.5vw, 3rem);
  max-width: 18rem;
`;

export const StoryGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: clamp(1.35rem, 3vw, 1.95rem);

  ${up.laptop} {
    grid-template-columns: minmax(0, 0.66fr) minmax(0, 0.34fr);
    gap: clamp(1.35rem, 2.2vw, 1.85rem);
    align-items: start;
  }
`;

export const SignatureArticle = styled(Link)`
  position: relative;
  display: block;
  text-decoration: none;
  color: inherit;
  overflow: hidden;
  width: 100%;
  aspect-ratio: 4 / 5;
  ${down.laptop} {
    aspect-ratio: 6 / 7;
  }

  ${up.laptop} {
    transform: translateY(-1.75rem);
  }

  ${down.wide} {
    ${up.laptop} {
      transform: translateY(-1.1rem);
    }
  }

  &:focus-visible {
    outline: 2px solid ${uiColors.inkSoft};
    outline-offset: 3px;
  }
`;

export const SignatureMedia = styled.div`
  position: absolute;
  inset: 0;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(26, 20, 17, 0.08) 0%,
      rgba(26, 20, 17, 0.28) 100%
    );
    opacity: 0.85;
    transition: opacity ${uiMotion.hover};
    pointer-events: none;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    ${imgEase}
  }

  ${SignatureArticle}:hover &::after,
  ${SignatureArticle}:focus-visible &::after {
    opacity: 0.95;
  }

  ${SignatureArticle}:hover img,
  ${SignatureArticle}:focus-visible img {
    transform: scale(1.03);
  }
`;

export const SignatureCopy = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: clamp(2.25rem, 5.5vw, 3.25rem);
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(26, 20, 17, 0.42) 42%,
    rgba(26, 20, 17, 0.82) 100%
  );
`;

export const SignatureTitle = styled.span`
  ${typography.pageHeading}
  display: block;
  color: ${uiColors.ivory};
`;

export const SignatureSubtitle = styled.span`
  ${typography.bodySmall}
  display: block;
  margin-top: 0.75rem;
  max-width: 22rem;
  color: rgba(248, 244, 238, 0.78);
`;

export const SupportingList = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(0.95rem, 2vw, 1.25rem);

  ${up.laptop} {
    transform: translateY(2.25rem);
  }

  ${down.wide} {
    ${up.laptop} {
      transform: translateY(1.5rem);
    }
  }
`;

export const SupportArticle = styled(Link)`
  position: relative;
  display: block;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  width: 100%;
  aspect-ratio: 5 / 6;
  ${down.laptop} {
    aspect-ratio: 6 / 7;
  }
  opacity: 0.97;

  &:focus-visible {
    outline: 2px solid ${uiColors.inkSoft};
    outline-offset: 2px;
  }
`;

export const SupportMedia = styled.div`
  position: absolute;
  inset: 0;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(26, 20, 17, 0.12);
    opacity: 0.88;
    transition: opacity ${uiMotion.hover};
    pointer-events: none;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    ${imgEase}
  }

  ${SupportArticle}:hover &::after,
  ${SupportArticle}:focus-visible &::after {
    opacity: 1;
  }

  ${SupportArticle}:hover img,
  ${SupportArticle}:focus-visible img {
    transform: scale(1.025);
  }
`;

export const SupportTitle = styled.span`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: clamp(0.65rem, 1.8vw, 1rem);
  ${typography.utility}
  color: rgba(248, 244, 238, 0.88);
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(26, 20, 17, 0.65) 100%
  );
`;
