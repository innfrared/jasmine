import styled, { css } from 'styled-components';
import { down, media, up } from '@/shared/styles/breakpoints';
import { uiColors, uiMotion } from '@/shared/ui/tokens';
import { typography } from '@/shared/styles/typography';

export const Section = styled.section<{ $layout: 'centered' | 'offset' }>`
  width: 100%;
  padding: clamp(5.25rem, 12.5vw, 9.5rem) clamp(1.25rem, 5vw, 3.5rem);
  ${down.laptop} {
    padding: clamp(4.25rem, 10vw, 7.5rem) clamp(1.25rem, 5vw, 3.5rem);
  }
  background: ${uiColors.surfaceHomeLightB};
  ${({ $layout }) =>
    $layout === 'offset'
      ? css`
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          gap: clamp(2.25rem, 5vw, 3.25rem);

          ${up.laptop} {
            grid-template-columns: minmax(0, 0.58fr) minmax(0, 0.42fr);
            align-items: stretch;
            gap: clamp(1.75rem, 3.5vw, 2.75rem);
          }
        `
      : css`
          display: block;
        `}
`;

export const Inner = styled.div<{ $layout: 'centered' | 'offset' }>`
  width: min(1120px, 100%);
  margin: 0 auto;
  ${({ $layout }) =>
    $layout === 'centered'
      ? css`
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: clamp(2rem, 4vw, 2.75rem);
        `
      : css`
          display: contents;
        `}
`;

export const Figure = styled.figure<{ $layout: 'centered' | 'offset' }>`
  margin: 0;
  position: relative;
  overflow: hidden;
  width: 100%;
  aspect-ratio: 5 / 3;
  ${down.laptop} {
    aspect-ratio: 8 / 5;
  }
  ${({ $layout }) =>
    $layout === 'centered'
      ? css`
          max-width: min(520px, 100%);
          margin-left: auto;
          margin-right: auto;
        `
      : css`
          align-self: start;
          ${up.laptop} {
            align-self: end;
          }
        `}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center bottom;
    display: block;
    transform-origin: center bottom;
    transition: transform ${uiMotion.hover};
  }

  ${({ $layout }) =>
    $layout === 'offset'
      ? css`
          ${media.motionOk} {
            &:hover img {
              transform: scale(1.02);
            }
          }
        `
      : undefined}
`;

export const CopyBlock = styled.div<{ $layout: 'centered' | 'offset' }>`
  ${({ $layout }) =>
    $layout === 'centered'
      ? css`
          max-width: 32rem;
          padding: 0 0.5rem;
        `
      : css`
          padding-bottom: clamp(1rem, 2vw, 2rem);
          max-width: 22rem;

          ${up.laptop} {
            padding-left: clamp(0.85rem, 2.5vw, 1.25rem);
            padding-top: clamp(2.5rem, 5vw, 4rem);
            transform: translateY(1.5rem);
            padding-bottom: clamp(2rem, 4vw, 3.25rem);
          }
          ${down.wide} {
            ${up.laptop} {
              padding-top: clamp(1.75rem, 4vw, 2.75rem);
              transform: translateY(0.85rem);
              padding-bottom: clamp(1.5rem, 3.5vw, 2.5rem);
            }
          }
        `}
`;

export const Kicker = styled.p`
  ${typography.utility}
  color: ${uiColors.inkSubtle};
  margin: 0 0 1.35rem;
`;

export const Headline = styled.h2`
  ${typography.editorialDisplay}
  color: ${uiColors.ink};
  margin: 0 0 1.35rem;
`;

export const Line = styled.p`
  ${typography.bodySmall}
  color: ${uiColors.inkMuted};
  margin: 0 0 1.65rem;
  max-width: 20rem;
`;

export const CtaWrap = styled.div`
  margin-top: 0.35rem;
`;
