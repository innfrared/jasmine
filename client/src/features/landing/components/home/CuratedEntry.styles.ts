import styled from 'styled-components';
import { down, up } from '@/shared/styles/breakpoints';
import { typography } from '@/shared/styles/typography';
import { uiColors } from '@/shared/ui/tokens';

export const Section = styled.section`
  width: 100%;
  box-sizing: border-box;
  padding: 80px 104px 96px;
  background: ${uiColors.surfaceHomeLightB};

  ${down.tablet} {
    padding: 52px 36px 72px;
  }
`;

export const Inner = styled.div`
  width: 100%;
  max-width: 1020px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  ${up.wide} {
    max-width: min(1100px, 100%);
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 36px;

  ${down.tablet} {
    margin-bottom: 22px;
  }
`;

export const Title = styled.h2`
  margin: 0;
  ${typography.sectionHeading}
  color: ${uiColors.ink};
`;

export const Description = styled.p`
  margin: 6px 0 0;
  ${typography.body}
  color: ${uiColors.inkMuted};

  ${down.tablet} {
    max-width: 300px;
  }
`;
