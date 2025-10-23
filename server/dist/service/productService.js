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
exports.filterProductsBySpecificationsService = exports.getSpecificationsByCategoryService = exports.fetchNewAdded = exports.fetchBestDeals = exports.fetchTopSellers = exports.getProductsBySubcategoryService = exports.getProductById = exports.getProductByName = exports.getAllProducts = void 0;
const productRepository_1 = require("../repository/productRepository");
const db_1 = require("../db");
const getAllProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, productRepository_1.findAllProducts)();
});
exports.getAllProducts = getAllProducts;
const getProductByName = (name) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, productRepository_1.findProductByName)(name);
});
exports.getProductByName = getProductByName;
const getProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, productRepository_1.findProductById)(id);
});
exports.getProductById = getProductById;
const getProductsBySubcategoryService = (categoryName, subcategoryName) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // ✅ Fetch Subcategory ID
        const subcategoryResult = yield (0, db_1.query)("SELECT id FROM categories WHERE name = $1 AND parent_id IN (SELECT id FROM categories WHERE name = $2)", [subcategoryName, categoryName]);
        if (subcategoryResult.rows.length === 0) {
            console.warn(`🚨 No subcategory found for: ${subcategoryName} under ${categoryName}`);
            return []; // ✅ Return empty array if no subcategory
        }
        const subcategoryId = subcategoryResult.rows[0].id;
        // ✅ Fetch Products by Subcategory ID (Fix for NULL fields)
        const productsResult = yield (0, db_1.query)(`SELECT 
                p.id, p.name, p.brand, p.price, p.price_new, p.price_credit, 
                p.image_main, p.availability,
                COALESCE(json_agg(DISTINCT pi.image_url) FILTER (WHERE pi.image_url IS NOT NULL), '[]') AS images_additional,
                COALESCE(json_object_agg(ps.key, ps.value) FILTER (WHERE ps.key IS NOT NULL AND ps.value IS NOT NULL), '{}'::json) AS specifications
            FROM products p
            LEFT JOIN product_images pi ON p.id = pi.product_id
            LEFT JOIN product_specifications ps ON p.id = ps.product_id
            WHERE p.category_id = $1
            GROUP BY p.id`, [subcategoryId]);
        return productsResult.rows;
    }
    catch (error) {
        console.error("❌ Error fetching products by subcategory:", error);
        return []; // ✅ Fail-safe: Return empty array instead of crashing
    }
});
exports.getProductsBySubcategoryService = getProductsBySubcategoryService;
const fetchTopSellers = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, db_1.query)('SELECT * FROM products WHERE top_seller = true');
    return result.rows;
});
exports.fetchTopSellers = fetchTopSellers;
const fetchBestDeals = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, db_1.query)('SELECT * FROM products WHERE best_deals = true');
    return result.rows;
});
exports.fetchBestDeals = fetchBestDeals;
const fetchNewAdded = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, db_1.query)('SELECT * FROM products WHERE new_added = true');
    return result.rows;
});
exports.fetchNewAdded = fetchNewAdded;
const getSpecificationsByCategoryService = (category, subcategory) => __awaiter(void 0, void 0, void 0, function* () {
    const values = [];
    const conditions = [];
    let paramIndex = 1;
    let queryText = `
        SELECT ps.key, ps.value
        FROM product_specifications ps
        JOIN products p ON p.id = ps.product_id
        JOIN categories c ON c.id = p.category_id
    `;
    if (subcategory) {
        conditions.push(`(LOWER(c.name) = LOWER($${paramIndex++}) AND c.parent_id IS NOT NULL)`);
        values.push(subcategory);
    }
    else if (category) {
        conditions.push(`
        (
            LOWER(c.name) = LOWER($${paramIndex}) AND c.parent_id IS NULL
            OR c.parent_id = (
                SELECT id FROM categories 
                WHERE LOWER(name) = LOWER($${paramIndex}) AND parent_id IS NULL
            )
        )
    `);
        values.push(category);
    }
    if (conditions.length > 0) {
        queryText += ` WHERE ` + conditions.join(" OR ");
    }
    const result = yield (0, db_1.query)(queryText, values);
    const specMap = {};
    result.rows.forEach(row => {
        if (!specMap[row.key]) {
            specMap[row.key] = new Set();
        }
        specMap[row.key].add(row.value);
    });
    const finalSpecs = {};
    for (const key in specMap) {
        finalSpecs[key] = Array.from(specMap[key]).sort();
    }
    return finalSpecs;
});
exports.getSpecificationsByCategoryService = getSpecificationsByCategoryService;
const filterProductsBySpecificationsService = (category, subcategory, filters) => __awaiter(void 0, void 0, void 0, function* () {
    const values = [];
    let queryText = `
        SELECT p.*
        FROM products p
                 JOIN categories c ON c.id = p.category_id
        WHERE
    `;
    let paramIndex = 1;
    if (subcategory) {
        queryText += `(LOWER(c.name) = LOWER($${paramIndex}) AND c.parent_id IS NOT NULL)`;
        values.push(subcategory);
        paramIndex++;
    }
    else if (category) {
        queryText += `(
        (LOWER(c.name) = LOWER($${paramIndex}) AND c.parent_id IS NULL)
        OR c.parent_id = (
            SELECT id FROM categories
            WHERE LOWER(name) = LOWER($${paramIndex}) AND parent_id IS NULL
        )
    )`;
        values.push(category);
        paramIndex++;
    }
    const filterClauses = [];
    for (const [key, selectedValues] of Object.entries(filters)) {
        if (selectedValues.length === 0)
            continue;
        const keyParam = `$${paramIndex}`;
        values.push(key);
        paramIndex++;
        const valuePlaceholders = [];
        for (const value of selectedValues) {
            valuePlaceholders.push(`$${paramIndex}`);
            values.push(value);
            paramIndex++;
        }
        filterClauses.push(`
            EXISTS (
                SELECT 1 FROM product_specifications ps
                WHERE ps.product_id = p.id
                AND ps.key = ${keyParam}
                AND ps.value IN (${valuePlaceholders.join(", ")})
            )
        `);
    }
    if (filterClauses.length > 0) {
        queryText += ` AND ` + filterClauses.join(" AND ");
    }
    console.log("🔍 Final SQL:", queryText);
    console.log("📦 Bound Params:", values);
    const result = yield (0, db_1.query)(queryText, values);
    return result.rows;
});
exports.filterProductsBySpecificationsService = filterProductsBySpecificationsService;
