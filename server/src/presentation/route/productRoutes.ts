import express, { RequestHandler } from 'express';
import {
    filterProductsBySpecifications,
    getBestDeals, getNewAdded,
    getProductDetails,
    getProducts,
    getProductsByCategory, getProductsBySubcategory, getSpecificationsByCategory, getTopSellers,
} from '../controller/productController';
import {
    getSubcategories
} from '../controller/categoryController';
import { CategoryRequest } from "../../types/CustomRequest";

const router = express.Router();

// ✅ Middleware to log incoming requests
router.use((req, res, next) => {
    console.log(`📩 Incoming request: ${req.method} ${req.originalUrl}`);
    next();
});

// ✅ Middleware to decode category names from URL
const decodeCategoryMiddleware: RequestHandler = (req: CategoryRequest, res, next) => {
    const { category, subcategory } = req.params;

    console.log("🔍 Raw category from URL:", category || "⚠️ No category detected!");
    console.log("🔍 Raw subcategory from URL:", subcategory || "⚠️ No subcategory detected!");

    if (!category) {
        res.status(400).json({ error: "Category not provided" });
        return;
    }

    req.categoryName = decodeURIComponent(category);
    req.subcategoryName = subcategory ? decodeURIComponent(subcategory) : undefined;

    console.log("✅ Decoded category:", req.categoryName);
    console.log("✅ Decoded subcategory:", req.subcategoryName || "⚠️ No subcategory provided!");

    next();
};

// ✅ Products Endpoints
router.get('/', getProducts);
router.get('/details/:id', getProductDetails);
router.get("/category/:category", decodeCategoryMiddleware, getProductsByCategory);
router.get("/category/:category/:subcategory", decodeCategoryMiddleware, getProductsBySubcategory);
router.get("/categories/:categoryId/subcategories", getSubcategories);
router.get('/top-sellers', getTopSellers);
router.get('/best-deals', getBestDeals);
router.get('/new-added', getNewAdded);
router.get("/specifications", getSpecificationsByCategory);
router.post("/filter", filterProductsBySpecifications);

export default router;
