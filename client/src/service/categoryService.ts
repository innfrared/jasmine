import { Category } from "model/categoryModel";

export const fetchSubcategories = async (categoryId: number): Promise<Category[]> => {
        const response = await fetch(`http://localhost:5001/api/products/categories/${categoryId}/subcategories`);
        console.log(categoryId)
        if (!response.ok) throw new Error(`Server responded with ${response.status}`);
        console.log("📩 Fetch response:", response);
        const data = await response.json();
        return data;
};