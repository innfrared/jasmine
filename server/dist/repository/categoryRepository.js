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
exports.getSubcategoriesById = exports.getProductsByCategoryIds = exports.getSubcategoryIds = exports.getCategoryIdByName = void 0;
const db_1 = require("../db");
// ✅ Get Main Category ID by Name
const getCategoryIdByName = (categoryName) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, db_1.query)(`SELECT id FROM categories WHERE name = $1`, [categoryName]);
    return result.rows.length > 0 ? result.rows[0].id : null;
});
exports.getCategoryIdByName = getCategoryIdByName;
// ✅ Get Subcategory IDs for a Given Parent Category
const getSubcategoryIds = (parentCategoryId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, db_1.query)(`SELECT id FROM categories WHERE parent_id = $1`, [parentCategoryId]);
    return result.rows.map(row => row.id);
});
exports.getSubcategoryIds = getSubcategoryIds;
// ✅ Get Products by Multiple Category IDs (Main + Subcategories)
const getProductsByCategoryIds = (categoryIds) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, db_1.query)(`SELECT
             p.id,
             p.name,
             p.brand,
             p.price,
             p.price_new,
             p.price_credit,
             p.image_main,
             p.availability,
             COALESCE(array_agg(pi.image_url) FILTER (WHERE pi.image_url IS NOT NULL), ARRAY[]::text[]) AS images_additional,
             COALESCE(jsonb_object_agg(ps.key, ps.value) FILTER (WHERE ps.key IS NOT NULL), '{}'::jsonb) AS specifications
         FROM products p
         LEFT JOIN product_images pi ON p.id = pi.product_id
         LEFT JOIN product_specifications ps ON p.id = ps.product_id
         WHERE p.category_id = ANY($1)
         GROUP BY p.id`, [categoryIds]);
    return result.rows;
});
exports.getProductsByCategoryIds = getProductsByCategoryIds;
const getSubcategoriesById = (parentCategoryId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, db_1.query)(`SELECT id, name FROM categories WHERE parent_id = $1`, [parentCategoryId]);
    return result.rows;
});
exports.getSubcategoriesById = getSubcategoriesById;
