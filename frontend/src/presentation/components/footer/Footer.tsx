'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
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
} from './Footer.styles';
import { footerLinksData } from '../../../types/footerLinks';
import { normalizeLocale, withLocale } from '../../../utils/locale';
import { useThemeColors } from '../../hooks/useThemeColors';

export default function Footer() {
  const { t } = useTranslation<'translation'>();
  const params = useParams<{ locale?: string }>();
  const locale = normalizeLocale(params?.locale);
  const { secondaryColor } = useThemeColors({ secondaryColor: '#ffffff' });

  return (
    <FooterContainer $secondaryColor={secondaryColor}>
      <FooterContent>
        <FooterLinkSection>
          {footerLinksData.map((section, idx) => (
            <LinksSection key={idx}>
              <SectionTitle $color={secondaryColor}>
                {t(section.title)}
              </SectionTitle>
              <LinksList>
                {section.links.map((link, index) => (
                  <LinkItem key={index} $color={secondaryColor}>
                    {link.href.startsWith('http') ? (
                      <a href={link.href} target="_blank" rel="noreferrer">
                        {link.label}
                      </a>
                    ) : (
                      <Link href={withLocale(locale, link.href)}>
                        {link.label}
                      </Link>
                    )}
                  </LinkItem>
                ))}
              </LinksList>
            </LinksSection>
          ))}
        </FooterLinkSection>
        <LogoSection>
          <Logo>
            <Image
              src="/assets/logo.png"
              alt="Logo"
              fill
              sizes="(max-width: 768px) 110px, 150px"
            />
          </Logo>
          <LogoDescription>{t('slogan')}</LogoDescription>
        </LogoSection>
      </FooterContent>
      <FooterBottom>
        <p>
          &copy; {new Date().getFullYear()} {t('copyrightNotice')}
        </p>
      </FooterBottom>
    </FooterContainer>
  );
}
