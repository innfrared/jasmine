import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import ProductCell from '../../../ui/styles/productCell/ProductCell';
import { Product } from 'model/productModel';
import {
  BestsellerCarousel,
  TitleContainer,
  ScrollableSwiper,
  ArrowButton,
  ArrowSvg,
  BestsellerTitle,
  ProductType,
} from './ProductsTrending.styles';

type ProductsTrendingProps = {
  primaryColor: string;
  secondaryColor: string;
  productType: string;
  data: Product[];
};

const ProductsTrending: React.FC<ProductsTrendingProps> = ({
  productType,
  primaryColor,
  secondaryColor,
  data,
}) => {
  const { t } = useTranslation<'translation'>();
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <BestsellerCarousel>
      <TitleContainer>
        <BestsellerTitle secondaryColor={secondaryColor}>
          {t('trending')}
        </BestsellerTitle>
        <ProductType secondaryColor={secondaryColor}>{productType}</ProductType>
      </TitleContainer>

      <ArrowButton
        direction="left"
        onClick={() => scroll('left')}
        primaryColor={primaryColor}
        style={{ marginLeft: '8rem' }}
      >
        <ArrowSvg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </ArrowSvg>
      </ArrowButton>

      <ScrollableSwiper ref={containerRef}>
        {data.map(product => (
          <ProductCell key={product.id} product={product} />
        ))}
      </ScrollableSwiper>

      <ArrowButton
        direction="right"
        onClick={() => scroll('right')}
        primaryColor={primaryColor}
        style={{ marginRight: '8rem' }}
      >
        <ArrowSvg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5L15.75 12l-7.5 7.5"
          />
        </ArrowSvg>
      </ArrowButton>
    </BestsellerCarousel>
  );
};

export default ProductsTrending;
