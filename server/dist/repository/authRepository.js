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
const authService_1 = __importDefault(require("../service/authService"));
const ServerError_1 = require("../ServerError");
class AuthRepositoryImpl {
    constructor(authService) {
        this.authService = authService;
    }
    registerUser(request) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.authService.createUser(request);
            }
            catch (e) {
                return { message: ServerError_1.ServerErrorCode.UNKNOWN };
            }
        });
    }
    loginUser(request) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.authService.getTokenByCredentials(request);
            }
            catch (e) {
                return { message: ServerError_1.ServerErrorCode.UNKNOWN };
            }
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.authService.deleteUser(id);
            }
            catch (e) {
                return { message: ServerError_1.ServerErrorCode.UNKNOWN };
            }
        });
    }
    getIdFromToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.authService.getUserIdByToken(token);
            }
            catch (e) {
                return { message: ServerError_1.ServerErrorCode.UNKNOWN };
            }
        });
    }
}
const instance = new AuthRepositoryImpl(authService_1.default);
exports.default = instance;
