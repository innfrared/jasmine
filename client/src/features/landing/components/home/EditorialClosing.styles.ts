import styled from 'styled-components';
import { down, media, up } from '@/shared/styles/breakpoints';
import { uiColors, uiMotion } from '@/shared/ui/tokens';
import { typography } from '@/shared/styles/typography';

const closingText = 'rgb(238 242 248)';
const closingTextSoft = 'rgba(228, 234, 242, 0.8)';
const closingTextMuted = 'rgba(210, 218, 228, 0.62)';
const closingAccent = '#9eb0c4';

export const Section = styled.section`
  width: 100%;
  padding: clamp(5rem, 9vw, 8rem) clamp(0.75rem, 2vw, 1.5rem)
    clamp(6rem, 11vw, 9.5rem);
  ${down.laptop} {
    padding: clamp(4rem, 8vw, 6rem) clamp(0.75rem, 2vw, 1.5rem)
      clamp(4.5rem, 9vw, 7rem);
  }
  ${down.tablet} {
    padding: clamp(3.5rem, 9vw, 5rem) clamp(0.75rem, 2vw, 1.25rem)
      clamp(4rem, 10vw, 6rem);
  }
  background:
    radial-gradient(
      circle at top center,
      rgba(130, 155, 185, 0.08) 0%,
      rgba(130, 155, 185, 0) 38%
    ),
    linear-gradient(
      180deg,
      ${uiColors.surfaceHomeDarkElevated} 0%,
      ${uiColors.surfaceHomeDark} 100%
    );
  color: ${closingText};
`;

export const Inner = styled.div`
  width: min(1480px, 100%);
  margin: 0 auto;
`;

export const TriptychIntro = styled.header`
  margin: 0 0 clamp(2.75rem, 6.5vw, 4.75rem);
  max-width: 100%;
  ${down.laptop} {
    margin: 0 0 clamp(2rem, 5vw, 3.5rem);
  }

  ${up.laptop} {
    width: min(54rem, 58%);
    margin-left: clamp(1rem, 4vw, 3rem);
  }
`;

export const ClosingEyebrow = styled.p`
  ${typography.label}
  margin: 0 0 0.9rem;
  color: ${closingAccent};
  opacity: 0.9;
`;

export const ClosingHeadline = styled.h2`
  ${typography.editorialDisplay}
  margin: 0;
  color: ${closingText};
  max-width: 14ch;
  text-wrap: balance;

  font-size: 2.5rem;
  ${up.tablet} {
    font-size: 3.05rem;
  }
  ${up.laptop} {
    min-width: 24ch;
    font-size: 3.75rem;
  }
  ${up.wide} {
    font-size: 4.65rem;
  }
`;

export const TriptychGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 0.65rem;

  ${up.tablet} {
    grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.08fr) minmax(0, 0.95fr);
    gap: 0.65rem;
    align-items: end;
  }
`;

export const TriptychPanel = styled.figure<{ $emphasis?: boolean }>`
  margin: 0;
  position: relative;
  background: rgba(255, 255, 255, 0.03);
  overflow: hidden;
  aspect-ratio: 4 / 5;

  ${up.tablet} {
    ${({ $emphasis }) =>
      $emphasis
        ? `
      transform: translateY(-0.85rem);
    `
        : ''}
  }

  ${down.laptop} {
    aspect-ratio: 6 / 7;
    ${({ $emphasis }) =>
      $emphasis
        ? `
      transform: translateY(-0.45rem);
    `
        : ''}
  }

  ${down.tablet} {
    aspect-ratio: 7 / 8;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(18, 22, 30, 0.12) 100%
    );
    opacity: 0;
    transition: opacity ${uiMotion.hoverSlow};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    display: block;
    transform-origin: center center;
    transition:
      transform ${uiMotion.hoverSlow},
      opacity ${uiMotion.hoverSlow};
  }

  &:hover img {
    transform: scale(1.018);
    opacity: 0.97;
  }

  &:hover::after {
    opacity: 1;
  }

  ${media.motionReduce} {
    &:hover img {
      transform: none;
      opacity: 1;
    }

    &:hover::after {
      opacity: 0;
    }
  }
`;

export const TriptychCopy = styled.div`
  margin-top: clamp(3.5rem, 8vw, 6rem);
  ${down.laptop} {
    margin-top: clamp(2.5rem, 6vw, 4.5rem);
  }
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 1.5rem;

  ${up.laptop} {
    grid-template-columns: minmax(0, 0.28fr) minmax(0, 0.72fr);
    gap: clamp(2rem, 5vw, 5rem);
    align-items: start;
  }
`;

export const ClosingNote = styled.p`
  ${typography.bodySmall}
  margin: 0;
  color: ${closingTextMuted};
  max-width: 17rem;
`;

export const ClosingTextBlock = styled.div`
  max-width: 42rem;
`;

export const ClosingSupporting = styled.p`
  ${typography.body}
  margin: 0;
  color: ${closingTextSoft};
  max-width: 38rem;

  & + & {
    margin-top: 1rem;
  }
`;

export const ClosingCtaRow = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: flex-start;

  .closing-cta-subtle {
    min-height: auto;
    padding: 0.2rem 0;
    color: ${closingAccent};
    opacity: 0.95;

    &:hover:not(:disabled) {
      color: ${closingText};
      opacity: 1;
    }
  }
`;

export const StatementBlock = styled.div`
  text-align: center;
  max-width: 28rem;
  margin: 0 auto;
`;

export const StatementHeadline = styled.h2`
  ${typography.pageHeading}
  margin: 0 0 1rem;
  color: ${closingText};
`;

export const StatementLine = styled.p`
  ${typography.bodySmall}
  margin: 0 0 1.75rem;
  color: ${closingTextSoft};
`;