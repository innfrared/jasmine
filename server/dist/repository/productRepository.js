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
exports.findProductsByCategory = exports.findProductById = exports.findProductByName = exports.findAllProducts = void 0;
const db_1 = require("../db");
const findAllProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, db_1.query)(`
        SELECT p.id, p.name, p.brand, p.price, p.price_new, p.price_credit, p.image_main, c.name AS category
        FROM products p
        JOIN categories c ON p.category_id = c.id
    `);
    return result.rows;
});
exports.findAllProducts = findAllProducts;
const findProductByName = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, db_1.query)(`
        SELECT p.*,
               COALESCE(json_agg(DISTINCT pi.image_url) FILTER (WHERE pi.image_url IS NOT NULL), '[]') AS images_additional,
               COALESCE(json_object_agg(ps.key, ps.value) FILTER (WHERE ps.key IS NOT NULL), '{}') AS specifications
        FROM products p
                 LEFT JOIN product_images pi ON p.id = pi.product_id
                 LEFT JOIN product_specifications ps ON p.id = ps.product_id
        WHERE p.name = $1
        GROUP BY p.id;
    `, [name]);
    return result.rows[0] || null;
});
exports.findProductByName = findProductByName;
const findProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, db_1.query)(`
  SELECT 
    p.*,
    (
      SELECT json_agg(pi.image_url) 
      FROM product_images pi 
      WHERE pi.product_id = p.id
    ) AS images_additional,
    (
      SELECT json_object_agg(ps.key, ps.value)
      FROM product_specifications ps
      WHERE ps.product_id = p.id
    ) AS specifications
  FROM products p
  WHERE p.id = $1
`, [id]);
    return result.rows[0];
});
exports.findProductById = findProductById;
const findProductsByCategory = (categoryName) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, db_1.query)(`
        SELECT 
            p.*, 
            c.name AS category_name,  -- ✅ Get the category name
            array_agg(pi.image_url) AS images_additional,
            json_object_agg(ps.key, ps.value) AS specifications
        FROM products p
        JOIN categories c ON p.category_id = c.id  -- ✅ Join with categories table
        LEFT JOIN product_images pi ON p.id = pi.product_id
        LEFT JOIN product_specifications ps ON p.id = ps.product_id
        WHERE c.name = $1
        GROUP BY p.id, c.name  -- ✅ Group by category name as well
    `, [categoryName]);
    return result.rows;
});
exports.findProductsByCategory = findProductsByCategory;
