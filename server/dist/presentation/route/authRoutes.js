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
const express_1 = __importDefault(require("express"));
const authController_1 = __importDefault(require("../controller/authController"));
const authValidator_1 = __importDefault(require("../validator/authValidator"));
const ServerError_1 = require("../../ServerError");
const router = express_1.default.Router();
function makeRegisterCall(req_1, res_1, validator_1, method_1) {
    return __awaiter(this, arguments, void 0, function* (req, res, validator, method, successCode = 200) {
        try {
            const params = yield validator(req);
            if ((0, ServerError_1.isServerError)(params)) {
                res.status(500).json(params.message);
                return;
            }
            const result = yield method(params);
            if ((0, ServerError_1.isServerError)(result)) {
                res.status(500).json(result.message);
            }
            else {
                res.status(successCode).json(result);
            }
        }
        catch (error) {
            res.status(500).json('Internal server error');
        }
    });
}
router.post('/register', (req, res) => makeRegisterCall(req, res, authValidator_1.default.validateRegister, authController_1.default.register));
// Same pattern for login
function makeLoginCall(req_1, res_1, validator_1, method_1) {
    return __awaiter(this, arguments, void 0, function* (req, res, validator, method, successCode = 200) {
        try {
            const params = yield validator(req);
            if ((0, ServerError_1.isServerError)(params)) {
                res.status(500).json(params.message);
                return;
            }
            const result = yield authController_1.default.login(params);
            if ((0, ServerError_1.isServerError)(result)) {
                res.status(500).json(result.message);
            }
            else {
                res.status(successCode).json(result);
            }
        }
        catch (error) {
            res.status(500).json('Internal server error');
        }
    });
}
router.post('/login', (req, res) => makeLoginCall(req, res, authValidator_1.default.validateLogin, authController_1.default.login));
exports.default = router;
