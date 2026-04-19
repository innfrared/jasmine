'use client';

import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import type { ListingProduct } from '@/entities/catalog/listingProduct';
import CuratedEntry from '@/features/landing/components/home/CuratedEntry';
import EditorialClosing from '@/features/landing/components/home/EditorialClosing';
import EditorialCraft from '@/features/landing/components/home/EditorialCraft';
import EditorialManifesto from '@/features/landing/components/home/EditorialManifesto';
import FeaturedProducts from '@/features/landing/components/home/FeaturedProducts';
import MixedCommerce from '@/features/landing/components/home/MixedCommerce';
import Header from '@/shared/layout/header/Header';
import HeroSlide from '@/features/landing/components/heroSlide/HeroSlide';
import { buildLandingHomeContent } from '@/shared/config/landingHome';
import { useLocalizedRouting } from '@/shared/routing/localeRouting';
import { LandingScreenContainer } from './LandingScreen.styles';

type LandingScreenProps = {
  featuredProducts: ListingProduct[];
};

function LandingScreen({ featuredProducts }: LandingScreenProps) {
  const { t } = useTranslation<'translation'>();
  const { getLocalizedPath } = useLocalizedRouting();
  const homeContent = useMemo(
    () => buildLandingHomeContent(t, getLocalizedPath),
    [getLocalizedPath, t]
  );

  return (
    <LandingScreenContainer>
      <Header primaryColor="#CC0C5C" secondaryColor="#F2A800" />
      <HeroSlide />
      <CuratedEntry {...homeContent.curatedEntry} />
      <EditorialManifesto {...homeContent.editorialManifesto} />
      <FeaturedProducts products={featuredProducts} />
      <EditorialCraft slides={homeContent.editorialCraft.slides} />
      <MixedCommerce {...homeContent.mixedCommerce} />
      <EditorialClosing {...homeContent.editorialClosing} />
    </LandingScreenContainer>
  );
}

export default LandingScreen;
