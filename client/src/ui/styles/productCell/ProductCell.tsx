import React from "react";
import styles from "./ProductCell.module.css";
import { useTranslation } from "react-i18next";
import { Product } from "../../../model/productModel";
import {Link, useNavigate} from "react-router-dom";

interface ProductCellProps {
    product: Product;
}

const ProductCell: React.FC<ProductCellProps> = ({ product }) => {
    const { t } = useTranslation<'translation'>();
    const navigate = useNavigate();
    const handleProductDetailNavigation = () => {
        console.log(product.id)
        navigate(`/products/details/${encodeURIComponent(product.name)}?id=${product.id}`);
    };

    const handleAddToCart = (e: React.MouseEvent) => {
        e.stopPropagation();
        const stored = JSON.parse(localStorage.getItem("cartProducts") || "[]");
        const exists = stored.find((p: any) => p.id === product.id);
        const updated = exists
            ? stored.filter((p: any) => p.id !== product.id)
            : [...stored, product];        localStorage.setItem("cartProducts", JSON.stringify(updated));
        window.dispatchEvent(new Event("cartUpdated"));
    };

    const handleCompareClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        const stored = JSON.parse(localStorage.getItem("compareProducts") || "[]");
        const exists = stored.find((p: any) => p.id === product.id);
        const updated = exists
            ? stored.filter((p: any) => p.id !== product.id)
            : [...stored, product];
        localStorage.setItem("compareProducts", JSON.stringify(updated));
        window.dispatchEvent(new Event("compareUpdated"));
    };

    return (
        <div onClick={handleProductDetailNavigation} className={styles.card}>
            {!product.availability && (
                <div className={styles.overlay}>
                    <div className={styles.overlayIcon}>Հասանելի չէ</div>
                </div>
            )}
            <div className={styles.wrapper}>
                <div className={styles.cardImage}>
                    <img src={product.image_main || "assets/default-product.jpg"} alt={product.name} />
                </div>
                <div className={styles.content}>
                    <p className={styles.title}>{product.name}</p>
                    <div className={styles.priceContainer}>
                        {product.price_new ? (
                            <>
                                <p className={`${styles.title} ${styles.price} ${styles.oldPrice}`}>
                                    {product.price}
                                </p>
                                <p className={`${styles.title} ${styles.price}`}>
                                    {product.price_new}
                                </p>
                            </>
                        ) : (
                            <p className={`${styles.title} ${styles.price}`}>
                                {product.price}
                            </p>
                        )}
                    </div>
                </div>
                <div className={styles.buttonContainer}>
                    <div className={styles.buttonCompare} onClick={handleCompareClick}>
                        <div className={styles.buttonWrapperCompare}>
                            <div className={styles.textCompare}>{t('compare')}</div>
                            <span className={styles.icon}>
<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g
    id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"></g><g
    id="SVGRepo_iconCarrier"> <path
    d="M3.99923 21H19.9992M11.9992 21V7M11.9992 7C13.1038 7 13.9992 6.10457 13.9992 5M11.9992 7C10.8947 7 9.99923 6.10457 9.99923 5M13.9992 5C13.9992 3.89543 13.1038 3 11.9992 3C10.8947 3 9.99923 3.89543 9.99923 5M13.9992 5H19.9992M9.99923 5H3.99923M5.99923 17C7.51177 17 8.76287 16.1584 8.96934 14.7513C8.98242 14.6621 8.98897 14.6175 8.98385 14.5186C8.98031 14.4503 8.95717 14.3256 8.93599 14.2605C8.90531 14.1664 8.86812 14.1003 8.79375 13.968L5.99923 9L3.2047 13.968C3.13575 14.0906 3.10128 14.1519 3.06939 14.2584C3.04977 14.3239 3.02706 14.4811 3.02735 14.5494C3.02781 14.6606 3.03453 14.6899 3.04799 14.7486C3.30295 15.86 4.5273 17 5.99923 17ZM17.9992 17C19.5118 17 20.7629 16.1584 20.9693 14.7513C20.9824 14.6621 20.989 14.6175 20.9838 14.5186C20.9803 14.4503 20.9572 14.3256 20.936 14.2605C20.9053 14.1664 20.8681 14.1003 20.7937 13.968L17.9992 9L15.2047 13.968C15.1358 14.0906 15.1013 14.1519 15.0694 14.2584C15.0498 14.3239 15.0271 14.4811 15.0273 14.5494C15.0278 14.6606 15.0345 14.6899 15.048 14.7486C15.303 15.86 16.5273 17 17.9992 17Z"
    stroke="#ffffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                            </span>
                        </div>
                    </div>
                    <div className={styles.button} onClick={handleAddToCart}>
                        <div className={styles.buttonWrapper}>
                            <div className={styles.text}>{t('addToCart')}</div>
                            <span className={styles.icon}>
<svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-cart2"
    viewBox="0 0 16 16"
>
                              <path
                                  d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
                              ></path>
                            </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCell;
