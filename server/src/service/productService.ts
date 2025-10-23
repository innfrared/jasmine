import {findAllProducts, findProductById, findProductByName} from '../repository/productRepository';
import { query } from "../db";

export const getAllProducts = async () => {
    return await findAllProducts();
};

export const getProductByName = async (name: string) => {
    return await findProductByName(name);
};

export const getProductById = async (id: number) => {
    return await findProductById(id);
};

export const getProductsBySubcategoryService = async (categoryName: string, subcategoryName: string) => {
    try {
        // ✅ Fetch Subcategory ID
        const subcategoryResult = await query(
            "SELECT id FROM categories WHERE name = $1 AND parent_id IN (SELECT id FROM categories WHERE name = $2)",
            [subcategoryName, categoryName]
        );

        if (subcategoryResult.rows.length === 0) {
            console.warn(`🚨 No subcategory found for: ${subcategoryName} under ${categoryName}`);
            return []; // ✅ Return empty array if no subcategory
        }

        const subcategoryId = subcategoryResult.rows[0].id;

        // ✅ Fetch Products by Subcategory ID (Fix for NULL fields)
        const productsResult = await query(
            `SELECT 
                p.id, p.name, p.brand, p.price, p.price_new, p.price_credit, 
                p.image_main, p.availability,
                COALESCE(json_agg(DISTINCT pi.image_url) FILTER (WHERE pi.image_url IS NOT NULL), '[]') AS images_additional,
                COALESCE(json_object_agg(ps.key, ps.value) FILTER (WHERE ps.key IS NOT NULL AND ps.value IS NOT NULL), '{}'::json) AS specifications
            FROM products p
            LEFT JOIN product_images pi ON p.id = pi.product_id
            LEFT JOIN product_specifications ps ON p.id = ps.product_id
            WHERE p.category_id = $1
            GROUP BY p.id`,
            [subcategoryId]
        );

        return productsResult.rows;
    } catch (error) {
        console.error("❌ Error fetching products by subcategory:", error);
        return []; // ✅ Fail-safe: Return empty array instead of crashing
    }
};

export const fetchTopSellers = async () => {
    const result = await query('SELECT * FROM products WHERE top_seller = true');
    return result.rows;
};

export const fetchBestDeals = async () => {
    const result = await query('SELECT * FROM products WHERE best_deals = true');
    return result.rows;
};

export const fetchNewAdded = async () => {
    const result = await query('SELECT * FROM products WHERE new_added = true');
    return result.rows;
};

export const getSpecificationsByCategoryService = async (category: string, subcategory?: string) => {
    const values: any[] = [];
    const conditions: string[] = [];
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
    } else if (category) {
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

    const result = await query(queryText, values);

    const specMap: Record<string, Set<string>> = {};
    result.rows.forEach(row => {
        if (!specMap[row.key]) {
            specMap[row.key] = new Set();
        }
        specMap[row.key].add(row.value);
    });

    const finalSpecs: Record<string, string[]> = {};
    for (const key in specMap) {
        finalSpecs[key] = Array.from(specMap[key]).sort();
    }

    return finalSpecs;
};

export const filterProductsBySpecificationsService = async (
    category: string,
    subcategory: string | undefined,
    filters: Record<string, string[]>
) => {
    const values: any[] = [];
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
    } else if (category) {
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

    const filterClauses: string[] = [];

    for (const [key, selectedValues] of Object.entries(filters)) {
        if (selectedValues.length === 0) continue;

        const keyParam = `$${paramIndex}`;
        values.push(key);
        paramIndex++;

        const valuePlaceholders: string[] = [];

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

    const result = await query(queryText, values);
    return result.rows;
};
