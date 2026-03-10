'use client';

import { useEffect, useState, type ComponentType } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';

import Header from '../../components/header/Header';
import HeroSlide from '../../components/heroSlide/HeroSlide';
import Footer from '../../components/footer/Footer';
import ProductsTrending from '../../components/productsTrending/ProductsTrending';
import CategoryHero from '../../components/categoryHero/CategoryHero';
import TemplateSection from '../../components/templateSection/TemplateSection';
import WhyJasmineCrafted from './WhyJasmineCrafted';

import { LandingScreenContainer } from './LandingScreen.styles';
import { useThemeColors } from '../../hooks/useThemeColors';

import { listProducts } from '../../../service/productsService';
import { Product } from '../../../model/productModel';
import { mapProductDtosToModels } from '../../../utils/productMapper';
import { normalizeLocale, withLocale } from '../../../utils/locale';
import { PRODUCT_CARD_FIELDS } from '../../../utils/productFields';

type HeaderProps = {
  primaryColor: string;
  secondaryColor: string;
};

const HeaderComponent = Header as ComponentType<HeaderProps>;

type LandingScreenProps = {
  initialTrendingBagsProducts?: Product[];
  initialTrendingDressProducts?: Product[];
};

export default function LandingScreen({
  initialTrendingBagsProducts = [],
  initialTrendingDressProducts = [],
}: LandingScreenProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = useParams<{ locale?: string }>();
  const locale = normalizeLocale(params?.locale);

  const { primaryColor, secondaryColor } = useThemeColors();

  const [trendingBagsProducts, setTrendingBagsProducts] = useState(initialTrendingBagsProducts);
  const [trendingDressProducts, setTrendingDressProducts] = useState(initialTrendingDressProducts);

  useEffect(() => {
    const section = searchParams.get('scrollTo');
    if (!section) return;

    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      router.replace(withLocale(locale, '/'));
    }
  }, [searchParams, router, locale]);

  useEffect(() => {
    const hasInitialData =
      initialTrendingBagsProducts.length > 0 || initialTrendingDressProducts.length > 0;

    if (hasInitialData) return;

    const loadProducts = async () => {
      try {
        const [bagsResponse, dressesResponse] = await Promise.all([
          listProducts({
            page: 1,
            page_size: 10,
            fields: PRODUCT_CARD_FIELDS,
          }),
          listProducts({
            page: 1,
            page_size: 10,
            fields: PRODUCT_CARD_FIELDS,
          }),
        ]);

        setTrendingBagsProducts(mapProductDtosToModels(bagsResponse.items));
        setTrendingDressProducts(mapProductDtosToModels(dressesResponse.items));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    loadProducts();
  }, [initialTrendingBagsProducts, initialTrendingDressProducts]);

  return (
    <LandingScreenContainer>
      <HeaderComponent
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
      />

      <HeroSlide />
      <WhyJasmineCrafted />

      <section id="bestsellers">
        <CategoryHero
          categoryTagline="Carry Elegance"
          categoryDescription="Discover our curated collection of premium bags and accessories that blend style with functionality."
          featuredProducts={trendingBagsProducts.slice(0, 4)}
          mainImage="/assets/bag2.jpg"
          mainImageAlt="Premium bag collection"
          categoryLabel="Featured Collection"
          ctaText="Shop Bags"
          onCtaClick={() => router.push(withLocale(locale, '/products'))}
        />
      </section>

      <section id="deals">
        <ProductsTrending
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          productType="in Bags"
          data={trendingBagsProducts}
        />
      </section>

      <TemplateSection
        title="Handmade"
        description="Every stitch tells a story, crafted by hand with care and patience."
      />

      <section id="new">
        <ProductsTrending
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          productType="in Dresses and Matching Sets"
          data={trendingDressProducts}
        />
      </section>

      <Footer />
    </LandingScreenContainer>
  );
}