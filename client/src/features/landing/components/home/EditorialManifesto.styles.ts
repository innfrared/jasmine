import styled from 'styled-components';
import { up } from '@/shared/styles/breakpoints';
import { uiColors, uiMotion } from '@/shared/ui/tokens';
import { typography } from '@/shared/styles/typography';

export const Section = styled.section`
  width: 100%;
  background: ${uiColors.surfaceHomeLightB};
  display: block;
  padding: 0.5rem 1.25rem;
  ${up.laptop} {
    padding: 4.5rem 3.5rem;
  }
`;

export const Inner = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: min(1120px, 100%);
  margin: 0 auto 2rem;
  ${up.laptop} {
    gap: 2.75rem;
    margin-bottom: 2rem;
  }
`;

export const Figure = styled.figure`
  margin: 0;
  position: relative;
  overflow: hidden;
  width: 100%;
  aspect-ratio: 10 / 2;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
    transform-origin: center;
    transition: transform ${uiMotion.hover};
  }
`;

export const CopyBlock = styled.div`
  max-width: 50rem;
  width: 100%;
  text-align: center;
  & > p,
  & > h2 {
    text-align: center;
  }
`;

export const Headline = styled.h2`
  ${typography.editorialDisplay}
  color: ${uiColors.ink};
  margin: 0 0 0.5rem;
`;

export const Line = styled.p`
  ${typography.body}
  color: ${uiColors.inkMuted};
  max-width: 100%;
  margin: 0 auto 1.65rem;
`;

export const CtaWrap = styled.div`
  margin-top: 0.35rem;
  display: flex;
  justify-content: center;
`;

export const ProductRow = styled.div`
  width: min(1120px, 100%);
  margin: 0 auto;
  padding-top: 1.5rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  ${up.tablet} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.5rem;
    padding-top: 2rem;
  }
`;
