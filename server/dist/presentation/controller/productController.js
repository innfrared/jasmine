"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterProductsBySpecifications = exports.getSpecificationsByCategory = exports.getNewAdded = exports.getBestDeals = exports.getTopSellers = exports.getProductsBySubcategory = exports.getProductsByCategory = exports.getProductDetails = exports.getProducts = void 0;
const productService_1 = require("../../service/productService");
const db_1 = require("../../db");
const categoryRepository_1 = require("../../repository/categoryRepository");
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = req.query.category;
        let result;
        if (category) {
            result = yield (0, db_1.query)("SELECT * FROM products WHERE category = $1", [category]);
        }
        else {
            result = yield (0, db_1.query)("SELECT * FROM products");
        }
        res.json(result.rows);
    }
    catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.getProducts = getProducts;
const getProductDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = Number(req.params.id);
        console.log('prod id: ', productId);
        const product = yield (0, productService_1.getProductById)(productId);
        if (!product) {
            res.status(404).json({ error: "Product not found" });
            return;
        }
        res.json(product);
    }
    catch (error) {
        console.error("Error fetching product:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.getProductDetails = getProductDetails;
const getProductsByCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categoryReq = req;
    try {
        console.log("🟢 Received request for category:", categoryReq.categoryName);
        if (!categoryReq.categoryName) {
            res.status(400).json({ error: "Category name is required" });
            return;
        }
        // ✅ Step 1: Get Main Category ID
        const mainCategoryId = yield (0, categoryRepository_1.getCategoryIdByName)(categoryReq.categoryName);
        console.log("🔵 Main category ID:", mainCategoryId);
        if (!mainCategoryId) {
            res.status(404).json({ error: "Category not found" });
            return;
        }
        // ✅ Step 2: Get IDs of Subcategories under the Main Category
        const subcategoryIds = yield (0, categoryRepository_1.getSubcategoryIds)(mainCategoryId);
        subcategoryIds.push(mainCategoryId);
        console.log("🟡 All category IDs to filter products:", subcategoryIds);
        // ✅ Step 3: Fetch Products Matching the Category or Subcategories
        const products = yield (0, categoryRepository_1.getProductsByCategoryIds)(subcategoryIds);
        console.log("✅ Fetched products:", products);
        res.json(products);
    }
    catch (error) {
        console.error("❌ Error fetching products:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.getProductsByCategory = getProductsByCategory;
const getProductsBySubcategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const products = yield (0, productService_1.getProductsBySubcategoryService)(categoryName, subcategoryName);
        if (!products) {
            res.status(404).json({ error: "Subcategory not found" });
            return;
        }
        console.log(`✅ ${products.length} products found for subcategory: ${subcategoryName}`);
        res.json(products);
    }
    catch (error) {
        console.error("❌ Error fetching products by subcategory:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.getProductsBySubcategory = getProductsBySubcategory;
const getTopSellers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield (0, productService_1.fetchTopSellers)();
        res.json(products);
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to fetch top sellers' });
    }
});
exports.getTopSellers = getTopSellers;
const getBestDeals = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield (0, productService_1.fetchBestDeals)();
        console.log("endpoint reached");
        res.json(products);
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to fetch best deals' });
    }
});
exports.getBestDeals = getBestDeals;
const getNewAdded = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield (0, productService_1.fetchNewAdded)();
        res.json(products);
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to fetch new products' });
    }
});
exports.getNewAdded = getNewAdded;
const getSpecificationsByCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const category = decodeURIComponent(req.query.category);
    const subcategory = req.query.subcategory
        ? decodeURIComponent(req.query.subcategory)
        : undefined;
    try {
        const specs = yield (0, productService_1.getSpecificationsByCategoryService)(category, subcategory);
        res.json(specs);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch specifications" });
    }
});
exports.getSpecificationsByCategory = getSpecificationsByCategory;
const filterProductsBySpecifications = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { category, subcategory, filters } = req.body;
    console.log(category, subcategory, filters);
    try {
        const products = yield (0, productService_1.filterProductsBySpecificationsService)(category, subcategory, filters);
        res.json(products);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to filter products" });
    }
});
exports.filterProductsBySpecifications = filterProductsBySpecifications;
