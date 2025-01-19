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
const authRepository_1 = __importDefault(require("../repository/authRepository"));
const ServerError_1 = require("../ServerError");
class AuthMiddleware {
    constructor(authRepository) {
        this.authRepository = authRepository;
    }
    authenticateToken(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const authHeader = req.header('Authorization');
                const token = typeof authHeader === 'string' ? authHeader.split(' ')[1] : undefined;
                if (!token)
                    return res.status(403).json({ error: 'Token missing, access denied' });
                const userId = yield authRepository_1.default.getIdFromToken(token);
                console.log(userId);
                if (!userId || (0, ServerError_1.isServerError)(userId))
                    return res.status(403).json({ error: `Invalid token, access denied ${typeof userId}` });
                req.body.userId = userId;
                next();
            }
            catch (err) {
                console.log(`Error: ${err}`);
                return res.status(403).json({ error: `Invalid token, access denied` });
            }
        });
    }
}
const instance = new AuthMiddleware(authRepository_1.default);
exports.default = instance;
