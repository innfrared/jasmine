import React, { useState } from "react";
import TopNavBar from "../../components/topNavBar/TopNavBar";
import Header from "../../components/header/Header";
import ProductCell from "../../../ui/styles/productCell/ProductCell";
import ProductCellListView from "../../../ui/styles/productCellListView/ProductCellListView";
import Footer from "../../components/footer/Footer";
import styles from "./ProductsScreen.module.css";
import { useProductScreenModel } from "./ProductsScreenModel";
import {Product} from "../../../model/productModel";
import Breadcrumb from "../../../presentation/components/breadcrumb/Breadcrumb";
import {useTranslation} from "react-i18next";
import {useParams} from "react-router-dom";
import ProductFilters from "../../components/Filters/ProductFilters";
import {fetchProducts} from "../../../service/productService";

const ProductsScreen: React.FC = () => {
    const { products, loading, error, category, subcategory, setProducts } = useProductScreenModel();
    const [filters, setFilters] = useState<Record<string, string[]>>({});
    const [viewType, setViewType] = useState<"grid" | "list">("grid");
    const { t } = useTranslation<'translation'>();
    if (loading) return <p>Loading...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;
    if (!products.length) return <p>No products found.</p>;

    return (
        <div className={styles.productsPage}>
            <TopNavBar />
            <Header />
            <div className={styles.contentContainer}>
                <Breadcrumb />
                <div className={styles.contentAll}>
                    <aside className={styles.filters}>
                        <ProductFilters onFilterChange={(filters) => {
                            console.log("category:", category); // Debug
                            console.log("subcategory:", subcategory); // Debug
                            console.log("filters:", filters); // Debug
                            if (!category) return;
                            fetchProducts(category, subcategory, filters)
                                .then((data) => {
                                    if (!Array.isArray(data)) {
                                        throw new Error("Invalid data received");
                                    }
                                    setProducts(data);
                                })
                                .catch((err) => {
                                    console.error("❌ Fetch error:", err);
                                })
                        }} />
                    </aside>

                    <section className={styles.products}>
                        <div className={styles.upperPart}>
                            <h1>{subcategory ? subcategory : category}</h1>
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
                            </div>
                        </div>
                        {loading ? (
                            <p>Loading...</p>
                        ) : error ? (
                            <p style={{color: "red"}}>{error}</p>
                        ) : (
                            <div className={viewType === "grid" ? styles.gridContainer : styles.listContainer}>
                                {products.map((product: Product) => (
                                    viewType === "grid" ? (
                                        <ProductCell key={product.id} product={product}/>
                                    ) : (
                                        <ProductCellListView key={product.id} product={product}/>
                                    )
                                ))}
                            </div>
                        )}
                    </section>
                </div>
            </div>

            <Footer/>
        </div>
    );
};

export default ProductsScreen;
