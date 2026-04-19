import styled from 'styled-components';
import { down } from '@/shared/styles/breakpoints';
import { typography } from '@/shared/styles/typography';

export const PolicyPageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #fafafa;
`;

export const PolicyContent = styled.div`
  flex: 1;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  padding: 10rem 1.5rem 6rem;
  box-sizing: border-box;

  ${down.tablet} {
    padding: 2rem 1rem 3rem;
  }
`;

export const PolicyTitle = styled.h1`
  ${typography.pageHeading};
  color: #1a1a1a;
  margin: 0 0 1.75rem;
`;

export const PolicySection = styled.section`
  background: white;
  border-radius: 20px;
  padding: 2.25rem;
  box-shadow: 0 12px 28px rgba(24, 16, 12, 0.05);
  color: #333;

  p,
  li {
    ${typography.body};
    color: rgba(34, 24, 19, 0.74);
  }

  h2 {
    ${typography.sectionHeading};
    margin-top: 1.75rem;
    margin-bottom: 0.85rem;
    color: #1a1411;
  }

  ul {
    margin: 0.5rem 0 0 1.25rem;
  }
`;
