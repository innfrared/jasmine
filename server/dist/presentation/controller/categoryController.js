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
exports.getSubcategories = void 0;
const categoryRepository_1 = require("../../repository/categoryRepository");
const getSubcategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { categoryId } = req.params;
        const result = yield (0, categoryRepository_1.getSubcategoriesById)(parseInt(categoryId));
        res.json(result);
        return;
    }
    catch (error) {
        console.error("❌ Error fetching subcategories:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.getSubcategories = getSubcategories;
