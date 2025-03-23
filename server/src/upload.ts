import express from "express";
import { query } from "./db";
import fs from "fs";
import path from "path";

const router = express.Router();

// ✅ Helper Function to Get Category ID (Handles Optional Subcategory)
const getCategoryId = async (categoryName: string, parentCategory: string | null = null): Promise<number | null> => {
    let categoryResult = await query(`SELECT id FROM categories WHERE name = $1`, [categoryName]);

    if (categoryResult.rows.length > 0) {
        return categoryResult.rows[0].id; // ✅ Category exists
    }

    // ✅ If category doesn't exist, insert it
    const parentId = parentCategory ? await getCategoryId(parentCategory) : null;

    const newCategory = await query(
        `INSERT INTO categories (name, parent_id) VALUES ($1, $2) RETURNING id`,
        [categoryName, parentId]
    );

    return newCategory.rows[0].id;
};

// ✅ Upload Products from JSON File (Handles Optional Subcategory)
const uploadProducts = async (categoryName: string, filePath: string, subcategoryName?: string) => {
    const categoryId = subcategoryName
        ? await getCategoryId(subcategoryName, categoryName) // ✅ Use subcategory if provided
        : await getCategoryId(categoryName, null); // ✅ Otherwise, just use category

    if (!categoryId) {
        console.error(`❌ Failed to retrieve category ID for ${subcategoryName || categoryName}`);
        return;
    }

    const jsonData = fs.readFileSync(path.join(__dirname, filePath), "utf-8");
    const products = JSON.parse(jsonData);

    for (const product of products) {
        // ✅ Insert Product
        const productResult = await query(
            `INSERT INTO products (availability, category_id, price, price_new, price_credit, image_main, name, brand)
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id`,
            [
                product.availability === "true",
                categoryId,
                product.price,
                product.price_new || null,
                product.price_credit || null,
                product.image_main,
                product.name,
                product.brand || null
            ]
        );

        const productId = productResult.rows[0].id;

        // ✅ Insert Product Specifications
        for (const [key, value] of Object.entries(product.specifications || {})) {
            await query(
                `INSERT INTO product_specifications (product_id, key, value) VALUES ($1, $2, $3)`,
                [productId, key, value]
            );
        }

        // ✅ Insert Additional Images
        if (product.images_additional) {
            for (const imageUrl of product.images_additional) {
                await query(
                    `INSERT INTO product_images (product_id, image_url) VALUES ($1, $2)`,
                    [productId, imageUrl]
                );
            }
        }

        // ✅ Insert Functionalities (NEW FEATURE)
        if (product.functionalities && product.functionalities.length > 0) {
            for (const functionality of product.functionalities) {
                await query(
                    `INSERT INTO product_functionalities (product_id, name, icon) VALUES ($1, $2, $3)`,
                    [productId, functionality.name, functionality.icon || null]
                );
            }
        }

        console.log(`✅ Uploaded: ${product.name}`);
    }
};

// ✅ Upload Products for Various Categories (Handles Cases with & without Subcategories)
router.post("/upload-products", async (req, res) => {
    try {
        // ✅ Category with Subcategories
        await uploadProducts("Աքսեսուարներ", "../src/json/atami-xozanaki-kcord_data.json", "Ատամի խոզանակի կցորդներ");
        await uploadProducts("Աքսեսուարներ", "../src/json/demqi-xozanak_data.json", "Դեմքի խնամքի խոզանակ");
        await uploadProducts("Աքսեսուարներ", "../src/json/hamalrox-paraganer_data.json", "Համալրող պարագաներ");
        await uploadProducts("Աքսեսուարներ", "../src/json/herustacuyci-kaxich_data.json", "Հեռուստացույցի կախիչներ");
        await uploadProducts("Աքսեսուարներ", "../src/json/karcher-aqsesuarner_data.json", "KARCHER-ի աքսեսուարներ");
        await uploadProducts("Աքսեսուարներ", "../src/json/meat-grinder-knives_data.json", "Մսաղացի Աքսեսուարներ");
        await uploadProducts("Աքսեսուարներ", "../src/json/odi-maqrman-sarqeri-filtrer_data.json", "Օդի մաքրման սարքերի ֆիլտրեր");
        await uploadProducts("Աքսեսուարներ", "../src/json/poshekulneri-aqsesuarner_data.json", "Փոշեկուլի աքսեսուարներ");
        await uploadProducts("Աքսեսուարներ", "../src/json/saprichi-paraga_data.json", "Սափրիչի պարագաներ");
        await uploadProducts("Աքսեսուարներ", "../src/json/srchepi-aqsesuarner_data.json", "Սրճեփի աքսեսուարներ");

        res.json({ message: "✅ Products uploaded successfully!" });
    } catch (error: any) {
        console.error(error);
        res.status(500).json({ error: error.message || "Internal Server Error" });
    }
});

export default router;