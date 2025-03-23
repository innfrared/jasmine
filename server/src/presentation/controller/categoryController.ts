import { Request, Response } from 'express';
import {query} from "../../db";
import {getSubcategoriesById} from "../../repository/categoryRepository";

export const getSubcategories = async (req: Request, res: Response): Promise<void> => {
    try {
        const { categoryId } = req.params;
        const result = await getSubcategoriesById(parseInt(categoryId))

        res.json(result);
        return;
    } catch (error) {
        console.error("❌ Error fetching subcategories:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};