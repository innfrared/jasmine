'use client';

import { useTranslation } from 'react-i18next';
import Header from '@/shared/layout/header/Header';
import type { PlaceholderPageConfig } from '@/shared/config/placeholders';
import {
  PlaceholderContent,
  PlaceholderDescription,
  PlaceholderEyebrow,
  PlaceholderPageContainer,
  PlaceholderTitle,
} from './PlaceholderPage.styles';

type PlaceholderPageScreenProps = {
  page: PlaceholderPageConfig;
};

function PlaceholderPageScreen({ page }: PlaceholderPageScreenProps) {
  const { t } = useTranslation<'translation'>();

  return (
    <PlaceholderPageContainer>
      <Header primaryColor="#CC0C5C" secondaryColor="#F2A800" />
      <PlaceholderContent>
        <PlaceholderEyebrow>{t('footer.brand.eyebrow')}</PlaceholderEyebrow>
        <PlaceholderTitle>{t(page.titleKey)}</PlaceholderTitle>
        <PlaceholderDescription>
          {t(page.descriptionKey)}
        </PlaceholderDescription>
      </PlaceholderContent>
    </PlaceholderPageContainer>
  );
}

export default PlaceholderPageScreen;
