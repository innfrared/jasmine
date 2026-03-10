'use client';

import React, { useRef, useState } from 'react';
import { Category, useCategories } from '../../../types/CategoryTypes';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import {
  CarouselContainer,
  ScrollProgress,
  ScrollProgressIndicator,
  ArrowButton,
  ArrowSvg,
  ScrollableSwiper,
  SwiperCell,
  ArrowTopRight,
} from './CategoryCarousel.styles';
import { normalizeLocale, withLocale } from '../../../utils/locale';

const CustomScrollableSwiper = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const categories: Category[] = useCategories();
  const router = useRouter();
  const params = useParams<{ locale?: string }>();
  const locale = normalizeLocale(params?.locale);

  const handleScroll = () => {
    if (containerRef.current) {
      const scrollWidth =
        containerRef.current.scrollWidth - containerRef.current.clientWidth;
      const scrollLeft = containerRef.current.scrollLeft;
      const progress = (scrollLeft / scrollWidth) * 100;
      setScrollProgress(progress);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleCategoryNavigation = (categoryId: number) => {
    router.push(withLocale(locale, `/products?category_id=${categoryId}`));
  };

  return (
    <CarouselContainer>
      <ScrollProgress>
        <ScrollProgressIndicator style={{ width: `${scrollProgress}%` }} />
      </ScrollProgress>
      <ArrowButton $direction="left" onClick={() => scroll('left')}>
        <ArrowSvg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#001f3f"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </ArrowSvg>
      </ArrowButton>
      <ScrollableSwiper ref={containerRef} onScroll={handleScroll}>
        {categories.map(category => (
          <SwiperCell
            key={category.id}
            onClick={() => handleCategoryNavigation(category.id)}
          >
            <ArrowTopRight
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7M5 12h10"
              />
            </ArrowTopRight>
            <Image
              src={category.svg}
              alt={category.name}
              width={160}
              height={160}
              loading="lazy"
            />
            <p>{category.name}</p>
          </SwiperCell>
        ))}
      </ScrollableSwiper>
      <ArrowButton $direction="right" onClick={() => scroll('right')}>
        <ArrowSvg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#001f3f"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5L15.75 12l-7.5 7.5"
          />
        </ArrowSvg>
      </ArrowButton>
    </CarouselContainer>
  );
};

export default CustomScrollableSwiper;
