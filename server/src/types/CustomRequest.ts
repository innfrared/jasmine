import { Request } from "express";

export interface CategoryRequest extends Request {
    categoryName?: string;
    subcategoryName?: string;
}
