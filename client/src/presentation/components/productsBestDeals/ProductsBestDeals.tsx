import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './ProductsBestDeals.module.css';
import ProductCell from '../../../ui/styles/productCell/ProductCell';
import { Product } from 'model/productModel';
import { fetchBestDeals } from '../../../service/productService';

const ProductsBestDeals = () => {
  const { t } = useTranslation<'translation'>();
  const containerRef = useRef<HTMLDivElement>(null);
  const [, setScrollProgress] = useState(0);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getDeals = async () => {
      try {
        const data = await fetchBestDeals();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching best deals:', error);
      }
    };

    getDeals();
  }, []);

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

  return (
    <div className={styles.bestsellerCarousel}>
      <p className={styles.bestsellerTitle}>{t('bestDeals')}</p>
      <button
        className={`${styles.arrowButton} ${styles.left}`}
        onClick={() => scroll('left')}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
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
        {products.map(product => (
          <ProductCell key={product.id} product={product} />
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
          stroke="currentColor"
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

export default ProductsBestDeals;
