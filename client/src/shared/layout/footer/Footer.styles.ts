import Link from 'next/link';
import styled, { css } from 'styled-components';
import { down } from '@/shared/styles/breakpoints';
import { uiColors } from '@/shared/ui/tokens';
import { typography } from '@/shared/styles/typography';

const linkHover = css`
  ${typography.bodySmall};
  color: rgba(247, 241, 232, 0.82);
  transition:
    color 0.22s ease,
    opacity 0.22s ease;

  &:hover,
  &:focus-visible {
    color: ${uiColors.gold};
    opacity: 1;
    outline: none;
    text-decoration: underline;
    text-decoration-color: rgba(212, 175, 55, 0.45);
    text-underline-offset: 0.2em;
  }
`;

export const FooterContainer = styled.footer`
  position: relative;
  z-index: 1;
  width: 100%;
  min-height: 650px;
  background: ${uiColors.footerReveal};
  color: rgba(247, 241, 232, 0.9);
  padding: 4.75rem 0 1.65rem;

  ${down.tablet} {
    min-height: auto;
  }
`;

export const FooterInner = styled.div`
  width: min(1380px, calc(100vw - 72px));
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  ${down.laptop} {
    width: calc(100vw - 32px);
    gap: 2rem;
  }
`;

export const FooterBrandRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.9rem;
  padding-bottom: 1.15rem;
  text-align: center;

  ${down.laptop} {
    gap: 0.75rem;
    padding-bottom: 0.5rem;
  }
`;

export const FooterBrandMark = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  width: 110px;
  color: ${uiColors.gold};

  & svg {
    width: 100%;
    height: auto;
    display: block;
  }
`;

export const FooterBrandLine = styled.p`
  ${typography.body};
  color: rgba(247, 241, 232, 0.72);
  margin: 0;
  max-width: 24rem;
`;

export const FooterUpper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 3rem;
  align-items: start;

  ${down.laptop} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${down.tablet} {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const FooterSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FooterSectionTitle = styled.h3`
  ${typography.label};
  color: rgba(247, 241, 232, 0.52);
  margin: 0;
`;

export const FooterLinkList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.88rem;

  & > li {
    display: flex;
  }
`;

export const FooterLink = styled(Link)`
  ${linkHover}
`;

export const FooterExternalLink = styled.a`
  ${linkHover}
`;

export const FooterPreferenceGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin: 0.65rem 0 0.35rem;
`;

export const FooterPreferenceLabel = styled.span`
  ${typography.bodySmall};
  color: rgba(247, 241, 232, 0.82);
`;

export const FooterPreferenceControls = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  align-items: center;
`;

export const FooterSocialList = styled.ul`
  list-style: none;
  margin: 0.45rem 0 0;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const FooterSocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  color: rgba(247, 241, 232, 0.78);
  background: transparent;
  opacity: 0.88;
  transition:
    color 0.22s ease,
    opacity 0.22s ease;

  &:hover,
  &:focus-visible {
    color: ${uiColors.gold};
    opacity: 1;
    outline: none;
  }
`;

export const FooterSocialIcon = styled.span`
  width: 1.1rem;
  height: 1.1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  & svg {
    width: 100%;
    height: 100%;
    display: block;
  }
`;

export const FooterDivider = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(247, 241, 232, 0.12);
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  border-top: 1px solid rgba(247, 241, 232, 0.12);

  ${down.laptop} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const FooterBottomText = styled.p`
  ${typography.bodySmall};
  color: rgba(247, 241, 232, 0.58);
  margin: 0;
`;
