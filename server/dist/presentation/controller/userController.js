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
const userRepository_1 = __importDefault(require("../../repository/userRepository"));
const ServerError_1 = require("../../ServerError");
class UserController {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    currentUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.body.userId;
            try {
                const user = yield userRepository_1.default.getUserFromID(id);
                res.status(201).json(user);
                return user;
            }
            catch (error) {
                return { message: ServerError_1.ServerErrorCode.UNKNOWN };
            }
        });
    }
}
const instance = new UserController(userRepository_1.default);
exports.default = instance;
