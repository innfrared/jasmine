import React, { useRef, useState } from 'react';
import styles from './CategoryCarousel.module.css';
import { Category, useCategories } from '../../../types/CategoryTypes';
import { useNavigate } from 'react-router-dom';

const CustomScrollableSwiper = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const categories: Category[] = useCategories();
  const navigate = useNavigate();

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

  const handleCategoryNavigation = (category: string) => {
    navigate(`products/category/${encodeURIComponent(category)}`);
  };

  return (
    <div className={styles.categoryCarousel}>
      <div className={styles.scrollProgress}>
        <div
          className={styles.scrollProgressIndicator}
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
      <button
        className={`${styles.arrowButton} ${styles.left}`}
        onClick={() => scroll('left')}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#001f3f"
          className={styles.arrowSvg}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <div
        className={styles.scrollableSwiper}
        ref={containerRef}
        onScroll={handleScroll}
      >
        {categories.map(category => (
          <div
            className={styles.swiperCell}
            key={category.id}
            onClick={() => handleCategoryNavigation(category.url)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={styles.arrowTopRight}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7M5 12h10"
              />
            </svg>
            <img src={category.svg} alt={category.name} />
            <p>{category.name}</p>
          </div>
        ))}
      </div>
      <button
        className={`${styles.arrowButton} ${styles.right}`}
        onClick={() => scroll('right')}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#001f3f"
          className={styles.arrowSvg}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5L15.75 12l-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default CustomScrollableSwiper;
