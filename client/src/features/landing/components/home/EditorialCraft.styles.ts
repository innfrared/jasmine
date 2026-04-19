import styled, { keyframes } from 'styled-components';
import { down, media, up } from '@/shared/styles/breakpoints';
import { uiColors, uiMotion } from '@/shared/ui/tokens';
import { typography } from '@/shared/styles/typography';

const craftDrift = keyframes`
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.045);
  }
`;

const imgBase = `
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  display: block;
  transform-origin: center center;
  transition: transform ${uiMotion.hover};
`;

export const Section = styled.section`
  width: 100%;
  padding: clamp(4.75rem, 11vw, 8rem) clamp(1.25rem, 5vw, 3.5rem);
  ${down.laptop} {
    padding: clamp(4rem, 8.5vw, 6.5rem) clamp(1.25rem, 5vw, 3.5rem);
  }
  background: ${uiColors.surfaceHomeDark};
  color: ${uiColors.ivory};
  box-shadow: inset 0 1px 0 ${uiColors.surfaceHomeDarkElevated};
`;

export const Inner = styled.div`
  width: min(1180px, 100%);
  margin: 0 auto;
`;

export const Kicker = styled.p`
  ${typography.utility}
  color: rgba(248, 244, 238, 0.45);
  margin: 0 0 clamp(2rem, 4.5vw, 2.75rem);
  text-align: left;
  max-width: 20rem;
`;

export const Triptych = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: clamp(0.5rem, 1.2vw, 0.65rem);

  ${up.tablet} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.55rem 0.6rem;
    align-items: end;
  }
`;

export const CraftPanel = styled.figure<{ $emphasis?: boolean }>`
  margin: 0;
  position: relative;
  overflow: hidden;
  width: 100%;
  aspect-ratio: 4 / 5;
  background: ${uiColors.surfaceHomeDarkElevated};

  ${up.tablet} {
    ${({ $emphasis }) =>
      $emphasis
        ? `
      transform: translateY(-0.45rem);
    `
        : ''}
  }

  ${down.laptop} {
    aspect-ratio: 6 / 7;
    ${({ $emphasis }) =>
      $emphasis
        ? `
      transform: translateY(-0.28rem);
    `
        : ''}
  }

  ${down.tablet} {
    aspect-ratio: 7 / 8;
  }

  img {
    ${imgBase}

    ${media.motionReduce} {
      animation: none;
    }

    ${media.motionOk} {
      animation: ${craftDrift} ${uiMotion.drift} infinite alternate;
    }
  }

  &:hover img {
    ${media.motionOk} {
      animation-play-state: paused;
    }
    transform: scale(1.02);
  }
`;

export const CraftPanelDelayed = styled(CraftPanel)<{
  $delay: 'a' | 'b' | 'c';
}>`
  img {
    animation-delay: ${({ $delay }) =>
      $delay === 'a' ? '0s' : $delay === 'b' ? '0.8s' : '1.6s'};
  }
`;
