import React, {useEffect, useState} from "react";
import TopNavBar from "../../components/topNavBar/TopNavBar";
import Header from "../../components/header/Header";
// import Breadcrumb from "../components/Breadcrumb";
import ProductCell from "../../../ui/styles/productCell/ProductCell";
import styles from "./ProductsScreen.module.css";
import {useTranslation} from "react-i18next";
import Footer from "../../components/footer/Footer";
import ProductCellListView from "../../../ui/styles/productCellListView/ProductCellListView";

const ProductsScreen: React.FC = () => {
    const { t } = useTranslation<'translation'>();
    const [viewType, setViewType] = useState<"grid" | "list">("grid");

    // Sample product array
    const products = [
        { id: 1, name: "Product 1", price: "$20", image: "product1.jpg" },
        { id: 2, name: "Product 2", price: "$25", image: "product2.jpg" },
        { id: 3, name: "Product 3", price: "$30", image: "product3.jpg" },
        { id: 4, name: "Product 4", price: "$35", image: "product4.jpg" },
        { id: 5, name: "Product 4", price: "$35", image: "product4.jpg" },
        { id: 6, name: "Product 4", price: "$35", image: "product4.jpg" },
        { id: 7, name: "Product 4", price: "$35", image: "product4.jpg" },
        { id: 8, name: "Product 4", price: "$35", image: "product4.jpg" },
        { id: 9, name: "Product 4", price: "$35", image: "product4.jpg" },
        { id: 10, name: "Product 4", price: "$35", image: "product4.jpg" },
    ];

    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className={styles.productsPage}>
            <TopNavBar />
            <Header/>
            {/*<Breadcrumb path={["Home", "Products"]} />*/}

            <div className={styles.contentContainer}>
                <div className={styles.upperPart}>
                    <h1>{t('content')}</h1>
                    <div className={styles.viewToggle}>
                        <button
                            className={`${styles.viewToggleButton} ${viewType === "grid" ? styles.active : ""}`}
                            onClick={() => setViewType("grid")}
                        >
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                <rect
                                    x="4"
                                    y="4"
                                    width="7"
                                    height="7"
                                    rx="1"
                                    style={{fill: viewType === "grid" ? "#ffffff" : "#CC0C5C"}}
                                ></rect>
                                <rect
                                    x="4"
                                    y="13"
                                    width="7"
                                    height="7"
                                    rx="1"
                                    style={{fill: viewType === "grid" ? "#ffffff" : "#CC0C5C"}}
                                ></rect>
                                <rect
                                    x="13"
                                    y="4"
                                    width="7"
                                    height="7"
                                    rx="1"
                                    style={{fill: viewType === "grid" ? "#ffffff" : "#CC0C5C"}}
                                ></rect>
                                <rect
                                    x="13"
                                    y="13"
                                    width="7"
                                    height="7"
                                    rx="1"
                                    style={{fill: viewType === "grid" ? "#ffffff" : "#CC0C5C"}}
                                ></rect>
                            </svg>
                        </button>

                        <button
                            className={`${styles.viewToggleButton} ${viewType === "list" ? styles.active : ""}`}
                            onClick={() => setViewType("list")}
                        >
                            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                <path
                                    d="m 2 1 c -0.554688 0 -1 0.445312 -1 1 v 2 c 0 0.554688 0.445312 1 1 1 h 2 c 0.554688 0 1 -0.445312 1 -1 v -2 c 0 -0.554688 -0.445312 -1 -1 -1 z m 5 1 v 2 h 8 v -2 z m -5 4.015625 c -0.554688 0 -1 0.445313 -1 1 v 1.980469 c 0 0.550781 0.445312 1 1 1 h 2 c 0.554688 0 1 -0.449219 1 -1 v -1.980469 c 0 -0.554687 -0.445312 -1 -1 -1 z m 5 0.984375 v 2 h 8 v -2 z m -5 4 c -0.554688 0 -1 0.445312 -1 1 v 1.980469 c 0 0.550781 0.445312 1 1 1 h 2 c 0.554688 0 1 -0.449219 1 -1 v -1.980469 c 0 -0.554688 -0.445312 -1 -1 -1 z m 5 0.984375 v 2 h 8 v -2 z m 0 0"
                                    style={{fill: viewType === "list" ? "#ffffff" : "#CC0C5C"}}
                                ></path>
                            </svg>
                        </button>

                        <div className={styles.sortByDropdown}>
                            <div className={styles.dropdownWrapper}>
                                <select className={styles.dropdown} defaultValue="default">
                                    <option value="default" disabled>
                                        {t('sort_by')}
                                    </option>
                                    <option value="ascending">{t('sort_by_ascending')}</option>
                                    <option value="descending">{t('sort_by_descending')}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.contentAll}>
                    <aside className={styles.filters}>
                        <h3>Ֆիլտրել</h3>
                        <div className={styles.sortByDropdown}>
                            <div className={styles.dropdownWrapper}>
                                <select className={styles.dropdownFilter} defaultValue="default">
                                    <option value="default" disabled>
                                        ֆիլտր 1
                                    </option>
                                    <option value="ascending">{t('sort_by_ascending')}</option>
                                    <option value="descending">{t('sort_by_descending')}</option>
                                </select>
                            </div>
                        </div>
                        <div className={styles.sortByDropdown}>
                            <div className={styles.dropdownWrapper}>
                                <select className={styles.dropdownFilter} defaultValue="default">
                                    <option value="default" disabled>
                                        ֆիլտր 2
                                    </option>
                                    <option value="ascending">{t('sort_by_ascending')}</option>
                                    <option value="descending">{t('sort_by_descending')}</option>
                                </select>
                            </div>
                        </div>
                    </aside>

                    <section className={styles.products}>
                        <div className={viewType === "grid" ? styles.gridContainer : styles.listContainer}>
                            {products.map((product) => (
                                viewType === "grid" ? (
                                    <ProductCell
                                        key={product.id}
                                    />
                                ) : (
                                    <ProductCellListView
                                        key={product.id}
                                    />
                                )
                            ))}
                        </div>
                    </section>
                </div>

            </div>
            <Footer/>
        </div>
    );
};

export default ProductsScreen;
