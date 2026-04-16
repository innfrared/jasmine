import Link from 'next/link';
import styled from 'styled-components';
import { uiColors } from '@/shared/ui/tokens';
import { typography } from '@/shared/styles/typography';

export const FooterContainer = styled.footer`
  position: sticky;
  bottom: 0;
  z-index: 1;
  flex-shrink: 0;
  width: 100%;
  background: ${uiColors.navy};
  color: rgba(247, 241, 232, 0.9);
  padding: 4.75rem 0 1.65rem;
`;

export const FooterInner = styled.div`
  width: min(1380px, calc(100vw - 72px));
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media (max-width: 900px) {
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

  @media (max-width: 900px) {
    gap: 0.75rem;
    padding-bottom: 0.5rem;
  }
`;

export const FooterUpper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 3rem;
  align-items: start;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const FooterBrand = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  color: ${uiColors.gold};
`;

export const FooterLogo = styled.div`
  width: 110px;
  display: block;

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
`;

export const FooterLinkItem = styled.li`
  display: flex;
`;

const sharedLinkStyles = `
  ${typography.bodySmall};
  color: rgba(247, 241, 232, 0.82);
  transition: color 0.22s ease;

  &:hover,
  &:focus-visible {
    color: ${uiColors.gold};
    outline: none;
  }
`;

export const FooterLink = styled(Link)`
  ${sharedLinkStyles}
`;

export const FooterExternalLink = styled.a`
  ${sharedLinkStyles}
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
  gap: 0.75rem;
`;

export const FooterSocialLink = styled.a`
  width: 2.5rem;
  height: 2.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  border: 1px solid rgba(247, 241, 232, 0.18);
  color: rgba(247, 241, 232, 0.82);
  background: rgba(247, 241, 232, 0.02);
  transition:
    color 0.22s ease,
    border-color 0.22s ease,
    background-color 0.22s ease;

  &:hover,
  &:focus-visible {
    color: ${uiColors.gold};
    border-color: rgba(196, 154, 108, 0.45);
    background: rgba(247, 241, 232, 0.05);
    outline: none;
  }
`;

export const FooterSocialIcon = styled.span`
  width: 1rem;
  height: 1rem;
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

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const FooterBottomText = styled.p`
  ${typography.bodySmall};
  color: rgba(247, 241, 232, 0.58);
  margin: 0;
`;
