import styled from 'styled-components';
import { down } from '@/shared/styles/breakpoints';
import { typography } from '@/shared/styles/typography';

export const PlaceholderPageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #fbf7f1;
`;

export const PlaceholderContent = styled.main`
  flex: 1;
  width: min(880px, calc(100vw - 48px));
  margin: 0 auto;
  padding: 11rem 0 6rem;

  ${down.tablet} {
    width: calc(100vw - 32px);
    padding: 8.5rem 0 4rem;
  }
`;

export const PlaceholderEyebrow = styled.span`
  ${typography.label};
  display: inline-flex;
  color: rgba(34, 24, 19, 0.54);
  margin-bottom: 1.25rem;
`;

export const PlaceholderTitle = styled.h1`
  ${typography.pageHeading};
  color: #1a1411;
  margin: 0 0 1.35rem;
`;

export const PlaceholderDescription = styled.p`
  ${typography.body};
  color: rgba(34, 24, 19, 0.72);
  max-width: 40rem;
  margin: 0;
`;
