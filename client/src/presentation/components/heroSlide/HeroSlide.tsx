import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  HeroContainer,
  CentralText,
  Title,
  Line,
  Subtitle,
} from './HeroSlide.styles';

type HeroSlideProps = {
  primaryColor: string;
  secondaryColor: string;
};

const HeroSlide: React.FC<HeroSlideProps> = ({ secondaryColor }) => {
  const { t } = useTranslation<'translation'>();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <HeroContainer>
      <CentralText isLoaded={isLoaded}>
        <Title secondaryColor={secondaryColor}>{t('slogan_part_1')}</Title>
        <Line isLoaded={isLoaded} secondaryColor={secondaryColor} />
        <Subtitle secondaryColor={secondaryColor}>
          {t('slogan_part_2')}
        </Subtitle>
      </CentralText>
    </HeroContainer>
  );
};

export default HeroSlide;
