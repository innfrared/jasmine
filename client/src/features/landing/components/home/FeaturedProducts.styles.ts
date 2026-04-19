import styled from 'styled-components';
import { down, up } from '@/shared/styles/breakpoints';
import { uiColors } from '@/shared/ui/tokens';
import { typography } from '@/shared/styles/typography';

export const Section = styled.section`
  width: 100%;
  padding: clamp(5rem, 11.5vw, 8.5rem) clamp(1.25rem, 5vw, 3.5rem)
    clamp(5.25rem, 12vw, 9rem);
  ${down.laptop} {
    padding: clamp(4rem, 10vw, 6.5rem) clamp(1.25rem, 5vw, 3.5rem)
      clamp(4.25rem, 10vw, 7rem);
  }
  ${down.tablet} {
    padding: clamp(3.5rem, 9vw, 5.5rem) clamp(1.25rem, 5vw, 3.5rem)
      clamp(4rem, 10vw, 6rem);
  }
  background: linear-gradient(180deg, #fffefe 0%, #dedfed 100%);
`;

export const Inner = styled.div`
  width: min(1320px, 100%);
  margin: 0 auto;
`;

export const Intro = styled.div`
  margin-bottom: clamp(2.75rem, 5.5vw, 4rem);
  ${down.laptop} {
    margin-bottom: clamp(2rem, 4.5vw, 3rem);
  }
  max-width: 20rem;
`;

export const Eyebrow = styled.p`
  ${typography.utility}
  color: ${uiColors.inkSubtle};
  margin: 0 0 0.75rem;
`;

export const EditorialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(1.1rem, 2.6vw, 1.65rem) clamp(0.95rem, 2.2vw, 1.5rem);

  ${down.laptop} {
    & > *:nth-child(1) {
      grid-column: 1 / -1;
    }
  }

  ${up.laptop} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: clamp(1.25rem, 2.8vw, 1.85rem) clamp(1rem, 2.2vw, 1.5rem);

    & > *:nth-child(1) {
      grid-column: 1 / 3;
      grid-row: 1 / 3;
    }
    & > *:nth-child(2) {
      grid-column: 3;
      grid-row: 1;
    }
    & > *:nth-child(3) {
      grid-column: 4;
      grid-row: 1;
    }
    & > *:nth-child(4) {
      grid-column: 3;
      grid-row: 2;
    }
    & > *:nth-child(5) {
      grid-column: 4;
      grid-row: 2;
    }
  }
`;

export const ProductCell = styled.div<{ $stagger: 'up' | 'down' | 'none' }>`
  ${up.laptop} {
    transform: ${({ $stagger }) =>
      $stagger === 'up'
        ? 'translateY(-0.85rem)'
        : $stagger === 'down'
          ? 'translateY(1.1rem)'
          : 'none'};
  }

  ${down.wide} {
    ${up.laptop} {
      transform: ${({ $stagger }) =>
        $stagger === 'up'
          ? 'translateY(-0.45rem)'
          : $stagger === 'down'
            ? 'translateY(0.65rem)'
            : 'none'};
    }
  }

  &:nth-child(1) {
    transform: none;
  }
`;

export const Heading = styled.h2`
  ${typography.sectionHeading}
  margin: 0;
  color: ${uiColors.ink};
`;

export const EmptyState = styled.p`
  ${typography.bodySmall}
  color: ${uiColors.inkMuted};
  margin: 0;
  max-width: 26rem;
`;
