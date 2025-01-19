import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from './ProductsNew.module.css';
import {Category, useCategories} from '../../../types/CategoryTypes';
import ProductCell from "../../../ui/styles/productCell/ProductCell";

const ProductsNew = () => {
    const { t } = useTranslation<'translation'>();
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const categories: Category[] = useCategories();

    const handleScroll = () => {
        if (containerRef.current) {
            const scrollWidth = containerRef.current.scrollWidth - containerRef.current.clientWidth;
            const scrollLeft = containerRef.current.scrollLeft;
            const progress = (scrollLeft / scrollWidth) * 100;
            setScrollProgress(progress);
        }
    };

    const scroll = (direction: "left" | "right") => {
        if (containerRef.current) {
            const scrollAmount = direction === "left" ? -200 : 200;
            containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <div className={styles.bestsellerCarousel}>
            <p className={styles.bestsellerTitle}>{t('newProducts')}</p>
            <button
                className={`${styles.arrowButton} ${styles.left}`}
                onClick={() => scroll("left")}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={styles.arrowSvg}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>
            <div className={styles.scrollableSwiper} ref={containerRef} onScroll={handleScroll}>
                {categories.map((category) => (
                    <ProductCell/>
                ))}
            </div>
            <button
                className={`${styles.arrowButton} ${styles.right}`}
                onClick={() => scroll("right")}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={styles.arrowSvg}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5L15.75 12l-7.5 7.5"/>
                </svg>
            </button>
        </div>
    );
};

export default ProductsNew;