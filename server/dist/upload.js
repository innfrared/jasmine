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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./db");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const router = express_1.default.Router();
// ✅ Helper Function to Get Category ID (Handles Optional Subcategory)
const getCategoryId = (categoryName, parentCategory = null) => __awaiter(void 0, void 0, void 0, function* () {
    let categoryResult = yield (0, db_1.query)(`SELECT id FROM categories WHERE name = $1`, [categoryName]);
    if (categoryResult.rows.length > 0) {
        return categoryResult.rows[0].id; // ✅ Category exists
    }
    // ✅ If category doesn't exist, insert it
    const parentId = parentCategory ? yield getCategoryId(parentCategory) : null;
    const newCategory = yield (0, db_1.query)(`INSERT INTO categories (name, parent_id) VALUES ($1, $2) RETURNING id`, [categoryName, parentId]);
    return newCategory.rows[0].id;
});
// ✅ Upload Products from JSON File (Handles Optional Subcategory)
const uploadProducts = (categoryName, filePath, subcategoryName) => __awaiter(void 0, void 0, void 0, function* () {
    const categoryId = subcategoryName
        ? yield getCategoryId(subcategoryName, categoryName) // ✅ Use subcategory if provided
        : yield getCategoryId(categoryName, null); // ✅ Otherwise, just use category
    if (!categoryId) {
        console.error(`❌ Failed to retrieve category ID for ${subcategoryName || categoryName}`);
        return;
    }
    const jsonData = fs_1.default.readFileSync(path_1.default.join(__dirname, filePath), "utf-8");
    const products = JSON.parse(jsonData);
    for (const product of products) {
        // ✅ Insert Product
        const productResult = yield (0, db_1.query)(`INSERT INTO products (availability, category_id, price, price_new, price_credit, image_main, name, brand)
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id`, [
            product.availability === "true",
            categoryId,
            product.price,
            product.price_new || null,
            product.price_credit || null,
            product.image_main,
            product.name,
            product.brand || null
        ]);
        const productId = productResult.rows[0].id;
        // ✅ Insert Product Specifications
        for (const [key, value] of Object.entries(product.specifications || {})) {
            yield (0, db_1.query)(`INSERT INTO product_specifications (product_id, key, value) VALUES ($1, $2, $3)`, [productId, key, value]);
        }
        // ✅ Insert Additional Images
        if (product.images_additional) {
            for (const imageUrl of product.images_additional) {
                yield (0, db_1.query)(`INSERT INTO product_images (product_id, image_url) VALUES ($1, $2)`, [productId, imageUrl]);
            }
        }
        // ✅ Insert Functionalities (NEW FEATURE)
        if (product.functionalities && product.functionalities.length > 0) {
            for (const functionality of product.functionalities) {
                yield (0, db_1.query)(`INSERT INTO product_functionalities (product_id, name, icon) VALUES ($1, $2, $3)`, [productId, functionality.name, functionality.icon || null]);
            }
        }
        console.log(`✅ Uploaded: ${product.name}`);
    }
});
// ✅ Upload Products for Various Categories (Handles Cases with & without Subcategories)
router.post("/upload-products", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // ✅ Category with Subcategories
        yield uploadProducts("Աքսեսուարներ", "../src/json/atami-xozanaki-kcord_data.json", "Ատամի խոզանակի կցորդներ");
        yield uploadProducts("Աքսեսուարներ", "../src/json/demqi-xozanak_data.json", "Դեմքի խնամքի խոզանակ");
        yield uploadProducts("Աքսեսուարներ", "../src/json/hamalrox-paraganer_data.json", "Համալրող պարագաներ");
        yield uploadProducts("Աքսեսուարներ", "../src/json/herustacuyci-kaxich_data.json", "Հեռուստացույցի կախիչներ");
        yield uploadProducts("Աքսեսուարներ", "../src/json/karcher-aqsesuarner_data.json", "KARCHER-ի աքսեսուարներ");
        yield uploadProducts("Աքսեսուարներ", "../src/json/meat-grinder-knives_data.json", "Մսաղացի Աքսեսուարներ");
        yield uploadProducts("Աքսեսուարներ", "../src/json/odi-maqrman-sarqeri-filtrer_data.json", "Օդի մաքրման սարքերի ֆիլտրեր");
        yield uploadProducts("Աքսեսուարներ", "../src/json/poshekulneri-aqsesuarner_data.json", "Փոշեկուլի աքսեսուարներ");
        yield uploadProducts("Աքսեսուարներ", "../src/json/saprichi-paraga_data.json", "Սափրիչի պարագաներ");
        yield uploadProducts("Աքսեսուարներ", "../src/json/srchepi-aqsesuarner_data.json", "Սրճեփի աքսեսուարներ");
        res.json({ message: "✅ Products uploaded successfully!" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message || "Internal Server Error" });
    }
}));
exports.default = router;
