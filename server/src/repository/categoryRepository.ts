import { query } from "../db";

// ✅ Get Main Category ID by Name
export const getCategoryIdByName = async (categoryName: string): Promise<number | null> => {
    const result = await query(`SELECT id FROM categories WHERE name = $1`, [categoryName]);

    return result.rows.length > 0 ? result.rows[0].id : null;
};

// ✅ Get Subcategory IDs for a Given Parent Category
export const getSubcategoryIds = async (parentCategoryId: number): Promise<number[]> => {
    const result = await query(`SELECT id FROM categories WHERE parent_id = $1`, [parentCategoryId]);

    return result.rows.map(row => row.id);
};

// ✅ Get Products by Multiple Category IDs (Main + Subcategories)
export const getProductsByCategoryIds = async (categoryIds: number[]) => {
    const result = await query(
        `SELECT
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
         GROUP BY p.id`,
        [categoryIds]
    );

    return result.rows;
};

export const getSubcategoriesById = async (parentCategoryId: number): Promise<any> => {
    const result = await query(`SELECT id, name FROM categories WHERE parent_id = $1`, [parentCategoryId]);

    return result.rows;
};
