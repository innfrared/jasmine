import { query } from '../db';

export const findAllProducts = async () => {
    const result = await query(`
        SELECT p.id, p.name, p.brand, p.price, p.price_new, p.price_credit, p.image_main, c.name AS category
        FROM products p
        JOIN categories c ON p.category_id = c.id
    `);
    return result.rows;
};

export const findProductByName = async (name: string) => {
    const result = await query(`
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
};

export const findProductById = async (id: number) => {
    const result = await query(`
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
};

export const findProductsByCategory = async (categoryName: string) => {
    const result = await query(`
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
};
