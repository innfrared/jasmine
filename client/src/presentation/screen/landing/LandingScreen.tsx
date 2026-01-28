import Header from '../../components/header/Header';
import HeroSlide from '../../components/heroSlide/HeroSlide';
import Footer from '../../components/footer/Footer';
import ProductsTrending from '../../components/productsTrending/ProductsTrending';
import CategoryHero from '../../components/categoryHero/CategoryHero';
import { useEffect, useRef, useState, type ComponentType } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { listProducts } from '../../../service/productService';
import { Product } from '../../../model/productModel';
import { LandingScreenContainer } from './LandingScreen.styles';
import WhyJasmineCrafted from './WhyJasmineCrafted';
import TemplateSection from '../../components/templateSection/TemplateSection';

type HeaderProps = {
  primaryColor: string;
  secondaryColor: string;
};

const HeaderComponent = Header as ComponentType<HeaderProps>;

const getColorsFromStorage = () => {
  if (typeof window !== 'undefined') {
    const primaryColor =
      localStorage.getItem('theme_primary') ||
      'linear-gradient(135deg, #a67c00 0%, #bf9b30 25%, #ffd700 50%, #d4af37 75%, #b8860b 100%)';
    const secondaryColor = localStorage.getItem('theme_secondary') || '#001f3f';
    return { primaryColor, secondaryColor };
  }
  return {
    primaryColor: 'linear-gradient(135deg, #c39a37 0%, #b8860b 100%)',
    secondaryColor: '#001f3f',
  };
};

export default function LandingScreen() {
  const location = useLocation();
  const navigate = useNavigate();
  const [trendingBagsProducts, setTrendingBagsProducts] = useState<Product[]>(
    []
  );
  const [trendingDressProducts, setTrendingDressProducts] = useState<Product[]>(
    []
  );

  const bestSellersRef = useRef<HTMLDivElement>(null);
  const bestDealsRef = useRef<HTMLDivElement>(null);
  const newProductsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollMap: Record<string, React.RefObject<HTMLDivElement>> = {
      bestsellers: bestSellersRef,
      deals: bestDealsRef,
      new: newProductsRef,
    };

    const section = location.state?.scrollTo;

    if (section && scrollMap[section]?.current) {
      const y =
        scrollMap[section].current!.getBoundingClientRect().top +
        window.scrollY -
        50;
      window.scrollTo({ top: y, behavior: 'smooth' });

      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  useEffect(() => {
    const getDeals = async () => {
      try {
        const bagsResponse = await listProducts({ page: 1, page_size: 10 });
        const dressesResponse = await listProducts({ page: 1, page_size: 10 });
        setTrendingBagsProducts(bagsResponse.items as Product[]);
        setTrendingDressProducts(dressesResponse.items as Product[]);
      } catch (error) {
        console.error('Error fetching best deals:', error);
      }
    };

    getDeals();
  }, []);

  const { primaryColor, secondaryColor } = getColorsFromStorage();

  return (
    <LandingScreenContainer>
      <HeaderComponent
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
      />
      <HeroSlide />
      <WhyJasmineCrafted />

      <CategoryHero
        categoryTagline="Carry Elegance"
        categoryDescription="Discover our curated collection of premium bags and accessories that blend style with functionality."
        featuredProducts={trendingBagsProducts.slice(0, 4)}
        mainImage="/assets/bag2.jpg"
        mainImageAlt="Premium bag collection"
        categoryLabel="Featured Collection"
        ctaText="Shop Bags"
        onCtaClick={() => navigate('/products')}
      />

      <ProductsTrending
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        productType={'in Bags'}
        data={trendingBagsProducts}
      />
      <TemplateSection
        title="Handmade"
        description="Every stitch tells a story, crafted by hand with care and patience."
      />
      <ProductsTrending
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        productType={'in Dresses and Matching Sets'}
        data={trendingDressProducts}
      />
      <Footer />
    </LandingScreenContainer>
  );
}
