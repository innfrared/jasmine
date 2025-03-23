import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Header.module.css";
import { Category, useCategories } from "../../../types/CategoryTypes";
import AccountBox from "../accountBox/AccountBox";
import RegisterPopup from "../registerPopup/RegisterPopup";
import LoginPopup from "../loginPopup/LoginPopup";
import {useNavigate} from "react-router-dom";
import {useHeaderModel} from "../header/HeaderModel";

export default function Header() {
    const { t } = useTranslation<'translation'>();
    const containerRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const [isExpanded, setIsExpanded] = useState(false);
    const [isAccountBoxVisible, setIsAccountBoxVisible] = useState(false);
    const [visibleCategories, setVisibleCategories] = useState<number>(0);
    const headerRef = useRef<HTMLDivElement>(null);
    const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
    const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
    const [headerTop, setHeaderTop] = useState("5vh");
    const [comparisonCount, setComparisonCount] = useState(0);
    const [isCatalogExpanded, setIsCatalogExpanded] = useState(false);
    const { categories, subcategories, hoveredCategory, handleCategoryHover } = useHeaderModel();
    const [activeCategoryId, setActiveCategoryId] = useState<number | null>(null);

    const toggleAccountBox = () => {
        setIsAccountBoxVisible((prev) => !prev);
    };

    const handleCategoryClick = (categoryId: number) => {
        setActiveCategoryId(prev => (prev === categoryId ? null : categoryId));
    };

    const closeAccountBox = () => {
        setIsAccountBoxVisible(false);
    };

    const openLoginPopup = () => {
        setIsLoginPopupOpen(true);
    };

    const closeLoginPopup = () => {
        setIsLoginPopupOpen(false);
    };

    const openRegisterPopup = () => {
        setIsRegisterPopupOpen(true);
    };

    const closeRegisterPopup = () => {
        setIsRegisterPopupOpen(false);
    };

    const handleExpand = () => {
        setIsExpanded(true);
    };

    const handleCatalogExpand = () => {
        setIsCatalogExpanded(true);
    };

    const handleCollapse = () => {
        setIsExpanded(false);
        setIsCatalogExpanded(false)
        setVisibleCategories(0); // Reset visible categories on collapse
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (
            headerRef.current &&
            !headerRef.current.contains(event.target as Node)
        ) {
            setIsAccountBoxVisible(false);
        }
    };

    const handleSubcategoryClick = (subcategoryName: string) => {
        if (!hoveredCategory) return;
        setIsCatalogExpanded(false);
        setTimeout(() => {
            navigate(`/products/category/${hoveredCategory.name}/${subcategoryName}`);
        }, 100);    };

    const handleCategoryNavigation = (category: string) => {
        navigate(`/products/category/${encodeURIComponent(category)}`);
    };

    useEffect(() => {
        const updateCount = () => {
            const stored = localStorage.getItem("compareProducts");
            try {
                const products = stored ? JSON.parse(stored) : [];
                setComparisonCount(Array.isArray(products) ? products.length : 0);
            } catch (e) {
                setComparisonCount(0);
            }
        };

        // Initial load
        updateCount();

        // Listen for changes in localStorage (in case updates come from other tabs)
        window.addEventListener("storage", updateCount);

        // Listen for custom "compareUpdated" event dispatched after toggle
        window.addEventListener("compareUpdated", updateCount);

        return () => {
            window.removeEventListener("storage", updateCount);
            window.removeEventListener("compareUpdated", updateCount);
        };
    }, []);

    useEffect(() => {
        if (isExpanded) {
            let timeoutId: NodeJS.Timeout;
            categories.forEach((_, index) => {
                timeoutId = setTimeout(() => {
                    setVisibleCategories((prev) => prev + 1);
                }, index * 100); // Stagger by 100ms per category
            });
            return () => clearTimeout(timeoutId);
        }
    }, [isExpanded, categories]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setHeaderTop("2vh"); // Reduce top position on scroll
            } else {
                setHeaderTop("5vh"); // Reset to default when at the top
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleProductsNavigation = () => {
        navigate("/allProducts"); // Adjust the path as per your route setup
    };
    const handleHomeNavigation = () => {
        navigate("/"); // Adjust the path as per your route setup
    };

    const handleComparisonNavigation = () => {
        navigate("/comparison"); // Adjust the path as per your route setup
    };

    const getComparisonCount = () => {
        const stored = localStorage.getItem("compareProducts");
        if (!stored) return 0;
        try {
            const products = JSON.parse(stored);
            return Array.isArray(products) ? products.length : 0;
        } catch (e) {
            return 0;
        }
    };

    return (
        <div
            className={`${styles.header} ${isExpanded ? styles.expanded : ""}`}
            onMouseLeave={handleCollapse}
            // onMouseLeave={() => setIsCatalogOpen(false)}
            style={{top: headerTop}}
            ref={headerRef}
        >
            <div className={styles.headerMainContainer}>
                <div className={styles.header_details}>
                    <img src={"/assets/logo.png"} alt={""} width={"180px"} onClick={handleHomeNavigation}/>
                    <div
                        className={`${styles.categoryContainer} ${isCatalogExpanded ? styles.open : ""}`}
                        onMouseEnter={handleCatalogExpand}
                    >
                        <button className={styles.menu__icon}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <p className={styles.categoryText}>
                            {t('catalog')} </p>
                    </div>
                </div>
                <div className={styles.header_actions}>
                <div className={styles.scaleButton} onClick={handleComparisonNavigation}>
                        <svg
                            width="25px"
                            height="25px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="SVGRepo_iconCarrier" transform="scale(1)">
                                <path
                                    d="M3.99923 21H19.9992M11.9992 21V7M11.9992 7C13.1038 7 13.9992 6.10457 13.9992 5M11.9992 7C10.8947 7 9.99923 6.10457 9.99923 5M13.9992 5C13.9992 3.89543 13.1038 3 11.9992 3C10.8947 3 9.99923 3.89543 9.99923 5M13.9992 5H19.9992M9.99923 5H3.99923M5.99923 17C7.51177 17 8.76287 16.1584 8.96934 14.7513C8.98242 14.6621 8.98897 14.6175 8.98385 14.5186C8.98031 14.4503 8.95717 14.3256 8.93599 14.2605C8.90531 14.1664 8.86812 14.1003 8.79375 13.968L5.99923 9L3.2047 13.968C3.13575 14.0906 3.10128 14.1519 3.06939 14.2584C3.04977 14.3239 3.02706 14.4811 3.02735 14.5494C3.02781 14.6606 3.03453 14.6899 3.04799 14.7486C3.30295 15.86 4.5273 17 5.99923 17ZM17.9992 17C19.5118 17 20.7629 16.1584 20.9693 14.7513C20.9824 14.6621 20.989 14.6175 20.9838 14.5186C20.9803 14.4503 20.9572 14.3256 20.936 14.2605C20.9053 14.1664 20.8681 14.1003 20.7937 13.968L17.9992 9L15.2047 13.968C15.1358 14.0906 15.1013 14.1519 15.0694 14.2584C15.0498 14.3239 15.0271 14.4811 15.0273 14.5494C15.0278 14.6606 15.0345 14.6899 15.048 14.7486C15.303 15.86 16.5273 17 17.9992 17Z"
                                    stroke="#000000"
                                    strokeWidth="1"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                            </g>
                        </svg>
                        <span className={styles.count}>{comparisonCount}</span>
                    </div>
                    <div className={styles.searchIcon} onClick={handleExpand}>
                        <svg
                            width="25px"
                            height="25px"
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#000000"
                        >
                            <g fill="none" fillRule="evenodd">
                                <g transform="translate(-256.000000, -1139.000000)" fill="#000000">
                                    <path
                                        d="M269.46,1163.45 C263.17,1163.45 258.071,1158.44 258.071,1152.25 C258.071,1146.06 263.17,1141.04 269.46,1141.04 C275.75,1141.04 280.85,1146.06 280.85,1152.25 C280.85,1158.44 275.75,1163.45 269.46,1163.45 L269.46,1163.45 Z M287.688,1169.25 L279.429,1161.12 C281.591,1158.77 282.92,1155.67 282.92,1152.25 C282.92,1144.93 276.894,1139 269.46,1139 C262.026,1139 256,1144.93 256,1152.25 C256,1159.56 262.026,1165.49 269.46,1165.49 C272.672,1165.49 275.618,1164.38 277.932,1162.53 L286.224,1170.69 C286.629,1171.09 287.284,1171.09 287.688,1170.69 C288.093,1170.3 288.093,1169.65 287.688,1169.25 L287.688,1169.25 Z"
                                    />
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div className={styles.accountIcon} onClick={toggleAccountBox}>
                        <svg width="25px"
                             height="25px"
                             viewBox="0 0 23 23"
                             fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="9" r="3" stroke="#000000" strokeWidth="1.5"></circle>
                            <path
                                d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20"
                                stroke="#000000" strokeWidth="1.5" strokeLinecap="round"></path>
                            <path
                                d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
                                stroke="#000000" strokeWidth="1.5" strokeLinecap="round"></path>
                        </svg>
                    </div>
                    {isAccountBoxVisible && (
                        <AccountBox
                            isVisible={isAccountBoxVisible}
                            onCloseAccountBox={closeAccountBox}
                            onOpenLoginPopup={openLoginPopup}
                            onOpenRegisterPopup={openRegisterPopup}
                        />
                    )}
                    {isLoginPopupOpen && <LoginPopup onClose={closeLoginPopup}/>}
                    {isRegisterPopupOpen && <RegisterPopup onClose={closeRegisterPopup}/>}
                </div>
            </div>
            <div className={`${styles.searchContent} ${isExpanded ? styles.visible : ""}`}>
                <div className={styles.searchBar}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1}
                        stroke="#cc0c5c"
                        className={styles.searchIconLarge}
                    >
                        <circle cx="11" cy="11" r="7" strokeLinecap="round" strokeLinejoin="round"/>
                        <line x1="16" y1="16" x2="20" y2="20" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <input
                        type="text"
                        placeholder="Search categories..."
                        className={styles.searchInputNoBorder}
                    />
                </div>

                <ul className={styles.categoryList}>
                    {categories.slice(0, visibleCategories).map((category, index) => (
                        <li key={index} className={styles.categoryItem}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className={styles.categoryArrow}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8.25 4.5L15.75 12l-7.5 7.5"
                                />
                            </svg>
                            <p>{category.name}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={`${styles.catalogContent} ${isCatalogExpanded ? styles.visible : ""}`}
                 onMouseEnter={() => setIsCatalogExpanded(true)}
                 onMouseLeave={() => setIsCatalogExpanded(false)}
            >
                <div className={styles.catalogCategories} ref={containerRef}>
                    {categories
                        .filter((category) => !category.parent_id)
                        .map((category) => (
                            <div
                                key={category.id}
                                className={styles.swiperCell}
                                onMouseEnter={() => handleCategoryHover(category)}
                                onClick={() => category.url ? handleCategoryNavigation(category.url) : null}
                            >
                                <img src={category.svg} alt={category.name}/>
                                <p>{category.name}</p>
                            </div>
                        ))}
                </div>
                <div className={styles.verticalLine}></div>

                {/* ✅ Show Subcategories If Available */}
                {subcategories.length > 0 && (
                    <div className={styles.subcategoryList}>
                        {subcategories.map((sub) => (
                            <div
                                key={sub.id}
                                className={styles.subcategoryItem}
                                onClick={() => sub.name && handleSubcategoryClick(sub.name)}
                            >
                                <p className={styles.subcategoryItemP}>{sub.name}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
