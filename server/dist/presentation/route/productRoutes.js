"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productController_1 = require("../controller/productController");
const categoryController_1 = require("../controller/categoryController");
const router = express_1.default.Router();
// ✅ Middleware to log incoming requests
router.use((req, res, next) => {
    console.log(`📩 Incoming request: ${req.method} ${req.originalUrl}`);
    next();
});
// ✅ Middleware to decode category names from URL
const decodeCategoryMiddleware = (req, res, next) => {
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
router.get('/', productController_1.getProducts);
router.get('/details/:id', productController_1.getProductDetails);
router.get("/category/:category", decodeCategoryMiddleware, productController_1.getProductsByCategory);
router.get("/category/:category/:subcategory", decodeCategoryMiddleware, productController_1.getProductsBySubcategory);
router.get("/categories/:categoryId/subcategories", categoryController_1.getSubcategories);
router.get('/top-sellers', productController_1.getTopSellers);
router.get('/best-deals', productController_1.getBestDeals);
router.get('/new-added', productController_1.getNewAdded);
router.get("/specifications", productController_1.getSpecificationsByCategory);
router.post("/filter", productController_1.filterProductsBySpecifications);
exports.default = router;
