'use client';

import type { MouseEvent } from 'react';
import { ReactSVG } from 'react-svg';
import { useTranslation } from 'react-i18next';
import { applyCurrentColorToLogo } from '../header/Header.helpers';
import CurrencyDropdown from '@/shared/ui/dropdown/CurrencyDropdown';
import Languages from '../languages/languages';
import {
  FOOTER_CLIENT_SERVICE_LINKS,
  FOOTER_EXPLORE_LINKS,
  FOOTER_LEGAL_LINKS,
  FOOTER_SOCIAL_LINKS,
  type FooterLinkConfig,
} from '@/shared/config/footer';
import { useLocalizedRouting } from '@/shared/routing/localeRouting';
import {
  FooterBottom,
  FooterBottomText,
  FooterBrandLine,
  FooterBrandMark,
  FooterBrandRow,
  FooterContainer,
  FooterDivider,
  FooterExternalLink,
  FooterInner,
  FooterLink,
  FooterLinkList,
  FooterPreferenceControls,
  FooterPreferenceGroup,
  FooterPreferenceLabel,
  FooterSection,
  FooterSectionTitle,
  FooterSocialIcon,
  FooterSocialLink,
  FooterSocialList,
  FooterUpper,
} from './Footer.styles';

const FOOTER_LOGO_SRC = '/assets/logobig.svg';

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="5.25"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="12" r="4.1" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.15" cy="6.85" r="1.05" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M13.15 20.25V12.95H15.6L15.95 10.1H13.15V8.28C13.15 7.45 13.39 6.88 14.57 6.88H16.05V4.33C15.79 4.29 14.91 4.2 13.88 4.2C11.74 4.2 10.28 5.47 10.28 7.82V10.1H7.95V12.95H10.28V20.25H13.15Z"
        fill="currentColor"
      />
    </svg>
  );
}

function getSocialIcon(linkId: FooterLinkConfig['id']) {
  switch (linkId) {
    case 'instagram':
      return <InstagramIcon />;
    case 'facebook':
      return <FacebookIcon />;
    default:
      return null;
  }
}

function handleFooterLogoBeforeInjection(svg: SVGElement) {
  applyCurrentColorToLogo(svg);
}

function shouldSkipScrollReset(event: MouseEvent<HTMLAnchorElement>) {
  return (
    event.button !== 0 ||
    event.metaKey ||
    event.altKey ||
    event.ctrlKey ||
    event.shiftKey
  );
}

function Footer() {
  const { t } = useTranslation<'translation'>();
  const { getLocalizedPath } = useLocalizedRouting();

  function handleFooterNavigationClick(event: MouseEvent<HTMLAnchorElement>) {
    if (shouldSkipScrollReset(event)) {
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }

  function renderFooterLink(link: FooterLinkConfig) {
    if (link.kind === 'external') {
      return (
        <FooterExternalLink
          href={link.href}
          target="_blank"
          rel="noreferrer"
          onClick={handleFooterNavigationClick}
        >
          {t(link.labelKey)}
        </FooterExternalLink>
      );
    }

    return (
      <FooterLink
        href={getLocalizedPath(link.href)}
        onClick={handleFooterNavigationClick}
      >
        {t(link.labelKey)}
      </FooterLink>
    );
  }

  function renderFooterLinkItem(link: FooterLinkConfig) {
    return <li key={link.id}>{renderFooterLink(link)}</li>;
  }

  function renderFooterSocialLink(link: FooterLinkConfig) {
    return (
      <li key={link.id}>
        <FooterSocialLink
          href={link.href}
          target="_blank"
          rel="noreferrer"
          aria-label={t(link.labelKey)}
          onClick={handleFooterNavigationClick}
        >
          <FooterSocialIcon>{getSocialIcon(link.id)}</FooterSocialIcon>
        </FooterSocialLink>
      </li>
    );
  }

  return (
    <FooterContainer>
      <FooterInner>
        <FooterBrandRow>
          <FooterBrandMark>
            <ReactSVG
              src={FOOTER_LOGO_SRC}
              beforeInjection={handleFooterLogoBeforeInjection}
            />
          </FooterBrandMark>
          <FooterBrandLine>{t('slogan')}</FooterBrandLine>
        </FooterBrandRow>

        <FooterDivider />

        <FooterUpper>
          <FooterSection>
            <FooterSectionTitle>
              {t('footer.sections.explore')}
            </FooterSectionTitle>
            <FooterLinkList>
              {FOOTER_EXPLORE_LINKS.map(renderFooterLinkItem)}
            </FooterLinkList>
          </FooterSection>

          <FooterSection>
            <FooterSectionTitle>
              {t('footer.sections.clientServices')}
            </FooterSectionTitle>
            <FooterLinkList>
              {FOOTER_CLIENT_SERVICE_LINKS.map(renderFooterLinkItem)}
            </FooterLinkList>
          </FooterSection>

          <FooterSection>
            <FooterSectionTitle>
              {t('footer.sections.legalPreferencesSocial')}
            </FooterSectionTitle>
            <FooterLinkList>
              {FOOTER_LEGAL_LINKS.map(renderFooterLinkItem)}
            </FooterLinkList>

            <FooterPreferenceGroup>
              <FooterPreferenceLabel>
                {t('footer.links.changeLocationLanguage')}
              </FooterPreferenceLabel>
              <FooterPreferenceControls>
                <Languages
                  isScrolled={false}
                  width="128px"
                  menuMinWidth="144px"
                  showLabel
                  labelMode="full"
                />
                <CurrencyDropdown isScrolled={false} width="88px" />
              </FooterPreferenceControls>
            </FooterPreferenceGroup>

            <FooterSocialList>
              {FOOTER_SOCIAL_LINKS.map(renderFooterSocialLink)}
            </FooterSocialList>
          </FooterSection>
        </FooterUpper>

        <FooterBottom>
          <FooterBottomText>{t('copyrightNotice')}</FooterBottomText>
          <FooterBottomText>{t('footer.bottom.signature')}</FooterBottomText>
        </FooterBottom>
      </FooterInner>
    </FooterContainer>
  );
}

export default Footer;
