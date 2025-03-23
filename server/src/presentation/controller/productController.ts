import { Request, Response } from 'express';
import {
    fetchBestDeals, fetchNewAdded, fetchTopSellers, filterProductsBySpecificationsService,
    getAllProducts, getProductById,
    getProductByName,
    getProductsBySubcategoryService, getSpecificationsByCategoryService
} from '../../service/productService';
import {query} from "../../db";
import {findProductsByCategory} from "../../repository/productRepository";
import {getCategoryIdByName, getProductsByCategoryIds, getSubcategoryIds} from "../../repository/categoryRepository";
import {CategoryRequest} from "../../types/CustomRequest";

export const getProducts = async (req: Request, res: Response) => {
    try {
        const category = req.query.category;
        let result;

        if (category) {
            result = await query("SELECT * FROM products WHERE category = $1", [category]);
        } else {
            result = await query("SELECT * FROM products");
        }

        res.json(result.rows);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const getProductDetails = async (req: Request, res: Response): Promise<void> => {
    try {
        const productId = Number(req.params.id);
        console.log('prod id: ', productId)
        const product = await getProductById(productId);
        if (!product) {
            res.status(404).json({ error: "Product not found" });
            return;
        }

        res.json(product);
    } catch (error) {
        console.error("Error fetching product:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const getProductsByCategory = async (req: Request, res: Response): Promise<void> => {
    const categoryReq = req as CategoryRequest;

    try {
        console.log("🟢 Received request for category:", categoryReq.categoryName);

        if (!categoryReq.categoryName) {
            res.status(400).json({ error: "Category name is required" });
            return;
        }

        // ✅ Step 1: Get Main Category ID
        const mainCategoryId = await getCategoryIdByName(categoryReq.categoryName);
        console.log("🔵 Main category ID:", mainCategoryId);

        if (!mainCategoryId) {
            res.status(404).json({ error: "Category not found" });
            return;
        }

        // ✅ Step 2: Get IDs of Subcategories under the Main Category
        const subcategoryIds = await getSubcategoryIds(mainCategoryId);
        subcategoryIds.push(mainCategoryId);
        console.log("🟡 All category IDs to filter products:", subcategoryIds);

        // ✅ Step 3: Fetch Products Matching the Category or Subcategories
        const products = await getProductsByCategoryIds(subcategoryIds);
        console.log("✅ Fetched products:", products);

        res.json(products);
    } catch (error) {
        console.error("❌ Error fetching products:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const getProductsBySubcategory = async (req: CategoryRequest, res: Response): Promise<void> => {
    try {
        const categoryName = req.categoryName;
        const subcategoryName = req.subcategoryName;

        console.log(`🟢 Fetching products for category: ${categoryName}, subcategory: ${subcategoryName}`);

        if (!categoryName || !subcategoryName) {
            res.status(400).json({ error: "Category and Subcategory are required" });
            return;
        }

        console.log(`🟢 Fetching products for category: ${categoryName}, subcategory: ${subcategoryName}`);

        // ✅ Call the service function
        const products = await getProductsBySubcategoryService(categoryName, subcategoryName);

        if (!products) {
            res.status(404).json({ error: "Subcategory not found" });
            return
        }

        console.log(`✅ ${products.length} products found for subcategory: ${subcategoryName}`);
        res.json(products);
    } catch (error) {
        console.error("❌ Error fetching products by subcategory:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
export const getTopSellers = async (req: Request, res: Response): Promise<void> => {
    try {
        const products = await fetchTopSellers();
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch top sellers' });
    }
};

export const getBestDeals = async (req: Request, res: Response): Promise<void> => {
    try {
        const products = await fetchBestDeals();
        console.log("endpoint reached")
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch best deals' });
    }
};

export const getNewAdded = async (req: Request, res: Response): Promise<void> => {
    try {
        const products = await fetchNewAdded();
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch new products' });
    }
};

export const getSpecificationsByCategory = async (req: Request, res: Response) => {
    const category = decodeURIComponent(req.query.category as string);
    const subcategory = req.query.subcategory
        ? decodeURIComponent(req.query.subcategory as string)
        : undefined;

    try {
        const specs = await getSpecificationsByCategoryService(category, subcategory);
        res.json(specs);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch specifications" });
    }
};

export const filterProductsBySpecifications = async (req: Request, res: Response) => {
    const { category, subcategory, filters } = req.body;
    console.log(category, subcategory, filters);

    try {
        const products = await filterProductsBySpecificationsService(category, subcategory, filters);
        res.json(products);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to filter products" });
    }
};
