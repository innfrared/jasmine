import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Product} from "model/productModel";
import {fetchProducts} from "../../../service/productService";

export const useProductScreenModel = (filters?: Record<string, string[]>) => {
    const { category, subcategory } = useParams();
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);

        fetchProducts(category, subcategory, filters)
            .then((data) => {
                if (!Array.isArray(data)) {
                    throw new Error("Invalid data received");
                }
                setProducts(data);
            })
            .catch((err) => {
                console.error("❌ Fetch error:", err);
                setError("Failed to load products.");
            })
            .finally(() => {
                setLoading(false);
            });

    }, [category, subcategory, JSON.stringify(filters)]); // 👈 re-run when filters change

    return { products, loading, error, category, subcategory, setProducts };
};
