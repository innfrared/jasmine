import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  FooterContainer,
  FooterLinkSection,
  LogoSection,
  Logo,
  LogoDescription,
  LinksSection,
  SectionTitle,
  LinksList,
  LinkItem,
  FooterBottom,
  FooterContent,
  FooterLine,
} from './Footer.styles';
import { footerLinksData } from '../../../types/footerLinks';

const getColorsFromStorage = () => {
  if (typeof window !== 'undefined') {
    const primaryColor =
      localStorage.getItem('theme_primary') ||
      'linear-gradient(135deg, #a67c00 0%, #bf9b30 25%, #ffd700 50%, #d4af37 75%, #b8860b 100%)';
    const primaryColorFlat =
      localStorage.getItem('theme_primary_flat') || '#d4af37';
    const secondaryColor = localStorage.getItem('theme_secondary') || '#001f3f';
    return { primaryColor, primaryColorFlat, secondaryColor };
  }
  return {
    primaryColor: '#d4af37',
    primaryColorFlat: '#d4af37',
    secondaryColor: '#001f3f',
  };
};

export default function Footer() {
  const { t } = useTranslation<'translation'>();
  const { primaryColorFlat, secondaryColor } = getColorsFromStorage();

  return (
    <FooterContainer secondaryColor={secondaryColor}>
      <FooterContent>
        <FooterLinkSection>
          {footerLinksData.map((section, idx) => (
            <LinksSection key={idx}>
              <SectionTitle color={primaryColorFlat}>
                {t(section.title)}
              </SectionTitle>
              <LinksList>
                {section.links.map((link, index) => (
                  <LinkItem key={index} color={secondaryColor}>
                    <a href={link.href}>{link.label}</a>
                  </LinkItem>
                ))}
              </LinksList>
            </LinksSection>
          ))}
        </FooterLinkSection>
        <LogoSection>
          <Logo src="/assets/logo.png" alt="Logo" />
          <LogoDescription>{t('slogan')}</LogoDescription>
        </LogoSection>
      </FooterContent>
      <FooterLine color={secondaryColor}></FooterLine>
      <FooterBottom>
        <p>
          &copy; {new Date().getFullYear()} {t('copyrightNotice')}
        </p>
      </FooterBottom>
    </FooterContainer>
  );
}
