import React, { useState } from "react";
import styles from "./ComparisonScreen.module.css";
import Header from "../../components/header/Header";
import TopNavBar from "../../components/topNavBar/TopNavBar";
import ProductCell from "../../../ui/styles/productCell/ProductCell";
import Footer from "../../components/footer/Footer";
import {useTranslation} from "react-i18next";

const ComparisonScreen = () => {
    const { t } = useTranslation<'translation'>();
    const [products, setProducts] = useState([
        {
            name: "Սառնարան ARTEL HD-276 FN White",
            price: "EUR 500",
            image: "assets/fridgeSample.jpeg",
            features: ["212", "166", "46", "-", "Առկա է", "-", "Մեխանիկական"],
        },
        {
            name: "Սառնարան ARTEL HD-276 FN White",
            price: "EUR 650",
            image: "assets/fridgeSample.jpeg",
            features: ["220", "170", "50", "Առկա է", "-", "Առկա է", "Էլեկտրոնային"],
        },
        {
            name: "Սառնարան ARTEL HD-276 FN White",
            price: "EUR 800",
            image: "assets/fridgeSample.jpeg",
            features: ["240", "180", "60", "-", "Առկա է", "Առկա է", "Մեխանիկական"],
        },
    ]);

    const characteristics = [
        "Ընդհանուր ծավալը (լ)",
        "Սառնարանի ծավալը (լ)",
        "Սառցարանի ծավալը (լ)",
        "NoFrost",
        "DeFrost",
        "FrostFree",
        "Կառավարումը",
    ];

    const addProductForComparison = () => {
        setProducts([
            ...products,
            {
                name: `Product ${products.length + 1}`,
                price: `EUR ${500 + products.length * 50}`,
                image: "/path/to/default-product.jpg",
                features: ["200", "160", "45", "-", "Առկա է", "-", "Մեխանիկական"],
            },
        ]);
    };

    const formatFeature = (feature: string) => {
        if (feature === "Առկա է") {
            return <span style={{ color: "green" }}>✔</span>;
        }
        if (feature === "-") {
            return <span style={{ color: "red" }}>✘</span>;
        }
        return feature; // Return the feature as-is if it's not "Առկա է" or "-"
    };

    return (
        <div className={styles.comparisonPage}>
            <TopNavBar />
            <Header />

            <div className={styles.comparisonContainer}>
                <h1 className={styles.heading}>{t('comparison')}</h1>
                <div className={styles.comparisonTable}>
                    {/* Feature List */}
                    <div className={styles.tableLeft}>
                        {characteristics.map((characteristic, index) => (
                            <div key={index} className={styles.featureRow}>
                                {characteristic}
                            </div>
                        ))}
                    </div>
                    {/* Products Comparison */}
                    <div className={styles.tableRight}>
                        {products.map((product, index) => (
                            <div key={index} className={styles.productColumn}>
                                <div className={styles.productCellContainer}>
                                    <ProductCell/>
                                </div>
                                {product.features.map((feature, idx) => (
                                    <div key={idx} className={styles.featureCell}>
                                        {formatFeature(feature)}
                                    </div>
                                ))}
                                <div className={styles.button}>
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
                        ))}
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    );
};

export default ComparisonScreen;