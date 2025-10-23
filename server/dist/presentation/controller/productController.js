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
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 20;
        const offset = (page - 1) * limit;
        let result, total;
        if (category) {
            total = yield (0, db_1.query)("SELECT COUNT(*) FROM products WHERE category = $1", [category]);
            result = yield (0, db_1.query)("SELECT * FROM products WHERE category = $1 LIMIT $2 OFFSET $3", [category, limit, offset]);
        }
        else {
            total = yield (0, db_1.query)("SELECT COUNT(*) FROM products");
            result = yield (0, db_1.query)("SELECT * FROM products LIMIT $1 OFFSET $2", [limit, offset]);
        }
        res.json({
            total: parseInt(total.rows[0].count),
            page,
            limit,
            data: result.rows,
        });
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
        const mainCategoryId = yield (0, categoryRepository_1.getCategoryIdByName)(categoryReq.categoryName);
        console.log("🔵 Main category ID:", mainCategoryId);
        if (!mainCategoryId) {
            res.status(404).json({ error: "Category not found" });
            return;
        }
        const subcategoryIds = yield (0, categoryRepository_1.getSubcategoryIds)(mainCategoryId);
        subcategoryIds.push(mainCategoryId);
        console.log("🟡 All category IDs to filter products:", subcategoryIds);
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 20;
        const offset = (page - 1) * limit;
        const totalResult = yield (0, db_1.query)(`SELECT COUNT(*) FROM products WHERE category_id = ANY($1)`, [subcategoryIds]);
        const paginatedProducts = yield (0, db_1.query)(`SELECT * FROM products WHERE category_id = ANY($1) LIMIT $2 OFFSET $3`, [subcategoryIds, limit, offset]);
        res.json({
            total: parseInt(totalResult.rows[0].count),
            page,
            limit,
            data: paginatedProducts.rows
        });
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
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 20;
        const offset = (page - 1) * limit;
        const allProducts = yield (0, productService_1.getProductsBySubcategoryService)(categoryName, subcategoryName);
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
    const category = req.query.category;
    const subcategory = req.query.subcategory;
    console.log('Category for specs ', category);
    console.log('Subcategory for specs ', subcategory);
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
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const offset = (page - 1) * limit;
    console.log(filters);
    try {
        const products = yield (0, productService_1.filterProductsBySpecificationsService)(category, subcategory, filters);
        const paginated = products.slice(offset, offset + limit);
        res.json({
            total: products.length,
            page,
            limit,
            data: paginated
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to filter products" });
    }
});
exports.filterProductsBySpecifications = filterProductsBySpecifications;
