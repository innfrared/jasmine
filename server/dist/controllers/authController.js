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
exports.loginUser = exports.registerUser = void 0;
const authService_1 = __importDefault(require("../services/authService"));
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password, firstName, lastName } = req.body;
    try {
        const newUser = yield authService_1.default.registerUser(username, email, password, firstName, lastName);
        return res.status(201).json(newUser);
    }
    catch (error) {
        return res.status(400).json({ error: error.message + 'ERRRRRORRRR' });
    }
});
exports.registerUser = registerUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const token = yield authService_1.default.loginUser(email, password);
        return res.json({ token });
    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
});
exports.loginUser = loginUser;
// export const getUserProfile = async (req: Request, res: Response) => {
//     const userId = req.params.id;
//     try {
//         const user = await authService.getUserById(userId);
//         if (!user) {
//             return res.status(404).json({ error: 'User not found' });
//         }
//         return res.status(200).json(user);
//     } catch (error) {
//         return res.status(500).json({ error: 'Internal server error' });
//     }
// };
