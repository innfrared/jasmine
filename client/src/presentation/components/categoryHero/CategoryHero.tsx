import React from 'react';
import {
  HeroWrapper,
  HeroInner,
  LeftPanel,
  MainImage,
  RightPanel,
  SuperTitle,
  Description,
  ProductsStrip,
  CTARow,
  Eyebrow,
  InfoRow,
} from './CategoryHero.styles';

import Button from '../../../ui/styles/button/Button';
import ProductCell from '../../../ui/styles/productCell/ProductCell';
import { Product } from '../../../model/productModel';

export interface CategoryHeroProps {
  categoryTagline: string;
  categoryDescription: string;
  featuredProducts: Product[];
  mainImage: string;
  mainImageAlt?: string;
  onCtaClick?: () => void;
  ctaText?: string;
  categoryLabel?: string;
  className?: string;
}

const CategoryHero: React.FC<CategoryHeroProps> = ({
  categoryTagline,
  categoryDescription,
  featuredProducts,
  mainImage,
  mainImageAlt = 'Category hero image',
  onCtaClick = () => {},
  ctaText = 'Shop now',
  categoryLabel,
  className,
}) => {
  return (
    <HeroWrapper className={className}>
      <HeroInner>
        <LeftPanel>
          {categoryLabel ? <Eyebrow>{categoryLabel}</Eyebrow> : null}
          <MainImage src={mainImage} alt={mainImageAlt} />
        </LeftPanel>

        <RightPanel>
          <InfoRow>
            <SuperTitle>{categoryTagline}</SuperTitle>
            <Description>{categoryDescription}</Description>
          </InfoRow>

          <ProductsStrip>
            {(featuredProducts || []).slice(0, 4).map(product => (
              <ProductCell key={String(product.id)} product={product} />
            ))}
          </ProductsStrip>

          <CTARow>
            <Button variant={'link'} onClick={() => window.history.back()}>
              {ctaText}
            </Button>
          </CTARow>
        </RightPanel>
      </HeroInner>
    </HeroWrapper>
  );
};

export default CategoryHero;
