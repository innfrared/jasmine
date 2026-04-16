'use client';

import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '@/shared/layout/header/Header';
import GridEditorial from '@/features/landing/components/editorial/GridEditorial';
import HeroEditorial from '@/features/landing/components/editorial/HeroEditorial';
import SplitEditorial from '@/features/landing/components/editorial/SplitEditorial';
import HeroSlide from '@/features/landing/components/heroSlide/HeroSlide';
import { buildLandingEditorialContent } from '@/shared/config/landingEditorial';
import { useLocalizedRouting } from '@/shared/routing/localeRouting';
import { LandingScreenContainer } from './LandingScreen.styles';

function LandingScreen() {
  const { t } = useTranslation<'translation'>();
  const { getLocalizedPath } = useLocalizedRouting();
  const editorialContent = useMemo(
    () => buildLandingEditorialContent(t, getLocalizedPath),
    [getLocalizedPath, t]
  );

  return (
    <LandingScreenContainer>
      <Header primaryColor="#CC0C5C" secondaryColor="#F2A800" />
      <HeroSlide />
      <SplitEditorial {...editorialContent.split} />
      <HeroEditorial {...editorialContent.hero} />
      <GridEditorial {...editorialContent.grid} />
    </LandingScreenContainer>
  );
}

export default LandingScreen;
