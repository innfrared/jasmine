'use client';

import { useTranslation } from 'react-i18next';
import Header from '@/shared/layout/header/Header';
import { useLocalizedRouting } from '@/shared/routing/localeRouting';
import {
  AboutActions,
  AboutCollectionLink,
  AboutIntro,
  AboutLabel,
  AboutLead,
  AboutPageContainer,
  AboutPageInner,
  AboutPageMain,
  AboutParagraph,
  AboutQuote,
  AboutRow,
  AboutRowContent,
  AboutRowQuoteBlock,
  AboutTitle,
} from './AboutJasmineScreen.styles';

function AboutJasmineScreen() {
  const { t } = useTranslation<'translation'>();
  const { getLocalizedPath } = useLocalizedRouting();

  return (
    <AboutPageContainer>
      <Header primaryColor="#CC0C5C" secondaryColor="#F2A800" />

      <AboutPageMain>
        <AboutPageInner>
          <AboutLead>
            <AboutLabel>{t('aboutJasmine.label')}</AboutLabel>
            <AboutTitle>{t('aboutJasmine.title')}</AboutTitle>
          </AboutLead>

          <AboutRow>
            <AboutRowContent>
              <AboutIntro>
                <AboutParagraph>
                  {t('aboutJasmine.introParagraphOne')}
                </AboutParagraph>
                <AboutParagraph>
                  {t('aboutJasmine.introParagraphTwo')}
                </AboutParagraph>
              </AboutIntro>
            </AboutRowContent>

            <AboutRowQuoteBlock $align="right">
              <AboutQuote $variant="hero">
                {t('aboutJasmine.quoteOne')}
              </AboutQuote>
            </AboutRowQuoteBlock>
          </AboutRow>

          <AboutRow>
            <AboutRowQuoteBlock $align="left">
              <AboutQuote $variant="aside">
                {t('aboutJasmine.quoteTwo')}
              </AboutQuote>

              <AboutActions $align="left">
                <AboutCollectionLink href={getLocalizedPath('/bags')}>
                  {t('aboutJasmine.cta')}
                </AboutCollectionLink>
              </AboutActions>
            </AboutRowQuoteBlock>

            <AboutRowContent>
              <AboutIntro>
                <AboutParagraph>
                  {t('aboutJasmine.storyParagraphOne')}
                </AboutParagraph>
                <AboutParagraph>
                  {t('aboutJasmine.storyParagraphTwo')}
                </AboutParagraph>
                <AboutParagraph>
                  {t('aboutJasmine.storyParagraphThree')}
                </AboutParagraph>
                <AboutParagraph>
                  {t('aboutJasmine.storyParagraphFour')}
                </AboutParagraph>
              </AboutIntro>
            </AboutRowContent>
          </AboutRow>
        </AboutPageInner>
      </AboutPageMain>
    </AboutPageContainer>
  );
}

export default AboutJasmineScreen;
