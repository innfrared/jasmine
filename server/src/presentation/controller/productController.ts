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
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 20;
        const offset = (page - 1) * limit;

        let result, total;

        if (category) {
            total = await query("SELECT COUNT(*) FROM products WHERE category = $1", [category]);
            result = await query("SELECT * FROM products WHERE category = $1 LIMIT $2 OFFSET $3", [category, limit, offset]);
        } else {
            total = await query("SELECT COUNT(*) FROM products");
            result = await query("SELECT * FROM products LIMIT $1 OFFSET $2", [limit, offset]);
        }

        res.json({
            total: parseInt(total.rows[0].count),
            page,
            limit,
            data: result.rows,
        });
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

        const mainCategoryId = await getCategoryIdByName(categoryReq.categoryName);
        console.log("🔵 Main category ID:", mainCategoryId);

        if (!mainCategoryId) {
            res.status(404).json({ error: "Category not found" });
            return;
        }

        const subcategoryIds = await getSubcategoryIds(mainCategoryId);
        subcategoryIds.push(mainCategoryId);
        console.log("🟡 All category IDs to filter products:", subcategoryIds);

        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 20;
        const offset = (page - 1) * limit;

        const totalResult = await query(
            `SELECT COUNT(*) FROM products WHERE category_id = ANY($1)`,
            [subcategoryIds]
        );

        const paginatedProducts = await query(
            `SELECT * FROM products WHERE category_id = ANY($1) LIMIT $2 OFFSET $3`,
            [subcategoryIds, limit, offset]
        );

        res.json({
            total: parseInt(totalResult.rows[0].count),
            page,
            limit,
            data: paginatedProducts.rows
        });
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

        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 20;
        const offset = (page - 1) * limit;

        const allProducts = await getProductsBySubcategoryService(categoryName, subcategoryName);

        if (!allProducts) {
            res.status(404).json({ error: "Subcategory not found" });
            return;
        }

        const paginated = allProducts.slice(offset, offset + limit);

        console.log(`✅ ${paginated.length} products returned from ${allProducts.length} total`);
        res.json({
            total: allProducts.length,
            page,
            limit,
            data: paginated
        });
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
    const category = req.query.category as string;
    const subcategory = req.query.subcategory as string | undefined;

    console.log('Category for specs ', category)
    console.log('Subcategory for specs ', subcategory)

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
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 20;
    const offset = (page - 1) * limit;

    console.log(filters)
    try {
        const products = await filterProductsBySpecificationsService(category, subcategory, filters);

        const paginated = products.slice(offset, offset + limit);

        res.json({
            total: products.length,
            page,
            limit,
            data: paginated
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to filter products" });
    }
};
