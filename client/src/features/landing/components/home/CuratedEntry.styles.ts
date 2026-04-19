import Link from 'next/link';
import styled from 'styled-components';
import { down, up } from '@/shared/styles/breakpoints';
import { uiColors, uiMotion } from '@/shared/ui/tokens';
import { typography } from '@/shared/styles/typography';

const imageHover = `
  transition: transform ${uiMotion.hover};
  will-change: transform;
`;

const coverCenter = `
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
`;

export const VisuallyHiddenHeading = styled.h2`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

export const Section = styled.section`
  width: 100%;
  padding: clamp(4.5rem, 10vw, 7.25rem) clamp(1.25rem, 5vw, 3.5rem)
    clamp(5rem, 11vw, 8rem);
  ${down.laptop} {
    padding: clamp(4rem, 9vw, 6rem) clamp(1.25rem, 5vw, 3.5rem)
      clamp(4.25rem, 10vw, 6.5rem);
  }
  background: ${uiColors.surfaceHomeLightA};
`;

export const Inner = styled.div`
  width: min(1480px, 100%);
  margin: 0 auto;
`;

export const ComposeGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: clamp(0.75rem, 1.8vw, 1rem);

  ${up.laptop} {
    grid-template-columns: minmax(0, 0.72fr) minmax(0, 0.28fr);
    grid-template-rows: repeat(3, minmax(0, auto));
    align-items: start;
    gap: 0.5rem 0.75rem;
  }
`;

export const DominantLink = styled(Link)`
  position: relative;
  display: block;
  overflow: hidden;
  width: 100%;
  aspect-ratio: 4 / 5;
  ${down.laptop} {
    aspect-ratio: 6 / 7;
  }
  text-decoration: none;
  color: inherit;
  grid-row: 1;

  ${up.laptop} {
    grid-column: 1;
    grid-row: 1 / -1;
  }

  &:focus-visible {
    outline: 2px solid ${uiColors.inkSoft};
    outline-offset: 4px;
  }
`;

export const DominantMedia = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;

  img {
    ${coverCenter}
    transform-origin: center center;
    ${imageHover}
  }

  ${DominantLink}:hover img,
  ${DominantLink}:focus-visible img {
    transform: scale(1.03);
  }
`;

export const DominantLabel = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: clamp(1.75rem, 4vw, 2.75rem);
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(26, 20, 17, 0.5) 48%,
    rgba(26, 20, 17, 0.78) 100%
  );
`;

export const DominantTitle = styled.span`
  ${typography.pageHeading}
  color: ${uiColors.ivory};
  display: block;
`;

export const DominantDescriptor = styled.span`
  ${typography.bodySmall}
  display: block;
  margin-top: 0.5rem;
  max-width: 18rem;
  color: rgba(248, 244, 238, 0.78);
`;

export const SupportStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(0.55rem, 1.4vw, 0.75rem);

  ${up.laptop} {
    grid-column: 2;
    grid-row: 1 / -1;
    justify-content: flex-start;
    padding-top: 0.25rem;
    transform: translateY(2.25rem);
  }

  ${down.wide} {
    ${up.laptop} {
      transform: translateY(1.5rem);
    }
  }
`;

export const SupportLink = styled(Link)`
  position: relative;
  display: block;
  overflow: hidden;
  width: 100%;
  aspect-ratio: 6 / 7;
  ${down.laptop} {
    aspect-ratio: 7 / 8;
  }
  flex-shrink: 0;
  text-decoration: none;
  color: inherit;
  opacity: 0.94;

  &:focus-visible {
    outline: 2px solid ${uiColors.inkSoft};
    outline-offset: 2px;
  }
`;

export const SupportMedia = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;

  img {
    ${coverCenter}
    ${imageHover}
  }

  ${SupportLink}:hover img,
  ${SupportLink}:focus-visible img {
    transform: scale(1.022);
  }
`;

export const SupportLabel = styled.span`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: clamp(0.55rem, 1.5vw, 0.85rem) clamp(0.65rem, 1.8vw, 0.95rem);
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(26, 20, 17, 0.35) 50%,
    rgba(26, 20, 17, 0.55) 100%
  );
  ${typography.utility}
  color: rgba(248, 244, 238, 0.82);
  border-top: 1px solid rgba(248, 244, 238, 0.12);
`;
