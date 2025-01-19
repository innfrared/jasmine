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
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dbPool_1 = require("./dbPool");
const mappers_1 = require("../mappers");
const ServerError_1 = require("../ServerError");
class AuthServiceImpl {
    constructor(pool, userMapper) {
        this.pool = pool;
        this.userMapper = userMapper;
    }
    createUser(request) {
        return __awaiter(this, void 0, void 0, function* () {
            let client = null;
            try {
                client = yield dbPool_1.pool.connect();
                const hashedPassword = yield bcrypt_1.default.hash(request.password, 10);
                const [usernameExists, emailExists] = yield Promise.all([
                    this.usernameExists(request.username),
                    this.emailExists(request.email)
                ]);
                if (usernameExists)
                    return { message: ServerError_1.ServerErrorCode.USERNAME_TAKEN };
                if (emailExists)
                    return { message: ServerError_1.ServerErrorCode.EMAIL_TAKEN };
                const result = yield client.query(`INSERT INTO users (username, password_hash, email, first_name, last_name) 
                VALUES ($1, $2, $3, $4, $5) RETURNING *`, [request.username, hashedPassword, request.email, request.first_name, request.last_name]);
                const userMapped = this.userMapper.mapUserFromDb(result.rows[0]);
                const payload = { userId: userMapped.id };
                return jsonwebtoken_1.default.sign(payload, this.jwtSecret, { expiresIn: '1h' });
            }
            catch (error) {
                return { message: ServerError_1.ServerErrorCode.UNKNOWN };
            }
            finally {
                client === null || client === void 0 ? void 0 : client.release();
            }
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let client = null;
            try {
                client = yield dbPool_1.pool.connect();
                const result = yield client.query('SELECT * FROM users WHERE id = $1', [id]);
                if (result.rows.length === 0)
                    return { message: ServerError_1.ServerErrorCode.USER_NOT_FOUND };
                const deletedUser = yield client.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
                const user = deletedUser.rows[0];
                console.log(`User deleted: ${user}`);
                return user.userId;
            }
            catch (e) {
                return { message: ServerError_1.ServerErrorCode.UNKNOWN };
            }
            finally {
                client === null || client === void 0 ? void 0 : client.release();
            }
        });
    }
    getTokenByCredentials(request) {
        return __awaiter(this, void 0, void 0, function* () {
            let client = null;
            try {
                client = yield dbPool_1.pool.connect();
                const result = yield client.query('SELECT * FROM users WHERE username = $1', [request.username]);
                if (result.rows.length === 0)
                    return { message: ServerError_1.ServerErrorCode.USER_NOT_FOUND };
                const user = result.rows[0];
                if (!(yield bcrypt_1.default.compare(request.password, user.password_hash)))
                    return { message: ServerError_1.ServerErrorCode.WRONG_PASSWORD };
                const userMapped = this.userMapper.mapUserFromDb(user);
                const payload = { userId: userMapped.id };
                return jsonwebtoken_1.default.sign(payload, this.jwtSecret, { expiresIn: '1h' });
            }
            catch (e) {
                return { message: ServerError_1.ServerErrorCode.UNKNOWN };
            }
            finally {
                client === null || client === void 0 ? void 0 : client.release();
            }
        });
    }
    getUserIdByToken(token) {
        try {
            const decoded = jsonwebtoken_1.default.verify(token, this.jwtSecret);
            return decoded['userId'];
        }
        catch (error) {
            return { message: ServerError_1.ServerErrorCode.UNKNOWN };
        }
    }
    getUserByToken(token) {
        try {
            const decoded = jsonwebtoken_1.default.verify(token, this.jwtSecret);
            return decoded["user"];
        }
        catch (error) {
            return { message: ServerError_1.ServerErrorCode.UNKNOWN };
        }
    }
    usernameExists(username) {
        return __awaiter(this, void 0, void 0, function* () {
            let client = null;
            try {
                client = yield dbPool_1.pool.connect();
                const existingUserCheck = yield client.query(`SELECT * FROM users WHERE username = $1`, [username]);
                return existingUserCheck.rows.length > 0;
            }
            catch (e) {
                return { message: ServerError_1.ServerErrorCode.UNKNOWN };
            }
            finally {
                client === null || client === void 0 ? void 0 : client.release();
            }
        });
    }
    emailExists(email) {
        return __awaiter(this, void 0, void 0, function* () {
            let client = null;
            try {
                client = yield dbPool_1.pool.connect();
                const existingUserCheck = yield client.query(`SELECT * FROM users WHERE email = $1`, [email]);
                return existingUserCheck.rows.length > 0;
            }
            catch (e) {
                return { message: ServerError_1.ServerErrorCode.UNKNOWN };
            }
            finally {
                client === null || client === void 0 ? void 0 : client.release();
            }
        });
    }
    get jwtSecret() {
        return process.env.JWT_SECRET;
    }
}
const instance = new AuthServiceImpl(dbPool_1.pool, new mappers_1.UserMapper());
exports.default = instance;
