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
const pg_1 = require("pg");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const mappers_1 = require("../mappers");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const pool = new pg_1.Pool({
    user: 'inna',
    host: 'localhost',
    database: 'rhymee',
    password: 'ims4b7b9',
    port: 5432,
});
const JWT_SECRET = process.env.JWT_SECRET;
class AuthService {
    constructor() {
        this.pool = pool;
        this.jwtSecret = JWT_SECRET;
    }
    generateToken(userId) {
        return jsonwebtoken_1.default.sign({ userId }, this.jwtSecret, { expiresIn: '1h' });
    }
    checkUsernameExists(username) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield pool.query('SELECT 1 FROM users WHERE username = $1 LIMIT 1', [username]);
                return result.rowCount > 0;
            }
            catch (error) {
                throw new Error('Error checking username availability');
            }
        });
    }
    checkEmailExists(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield pool.query('SELECT 1 FROM users WHERE email = $1 LIMIT 1', [email]);
                return result.rowCount > 0;
            }
            catch (error) {
                throw new Error('Error checking email availability');
            }
        });
    }
    registerUser(username, password, email, first_name, last_name) {
        return __awaiter(this, void 0, void 0, function* () {
            const hashedPassword = yield bcrypt_1.default.hash(password, 10);
            const user = yield (0, mappers_1.createUser)({ username, password_hash: hashedPassword, email, first_name, last_name });
            return user;
        });
    }
    loginUser(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield (0, mappers_1.getUserByUsername)(username);
            if (!user)
                throw new Error('User not found');
            const isMatch = yield bcrypt_1.default.compare(password, user.password_hash);
            if (!isMatch)
                throw new Error('Invalid credentials');
            return this.generateToken(user.id);
        });
    }
}
exports.default = new AuthService();
