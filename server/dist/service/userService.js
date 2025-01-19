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
const dbPool_1 = require("./dbPool");
const mappers_1 = require("../mappers");
const ServerError_1 = require("../ServerError");
class UserServiceImpl {
    constructor(pool, userMapper) {
        this.pool = pool;
        this.userMapper = userMapper;
    }
    getUserByID(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let client = null;
            try {
                client = yield dbPool_1.pool.connect();
                const result = yield client.query('SELECT * FROM users WHERE id = $1', [id]);
                if (result.rows.length === 0)
                    return { message: ServerError_1.ServerErrorCode.USER_NOT_FOUND };
                return this.userMapper.mapUserFromDb(result.rows[0]);
            }
            catch (e) {
                return { message: ServerError_1.ServerErrorCode.UNKNOWN };
            }
            finally {
                client === null || client === void 0 ? void 0 : client.release();
            }
        });
    }
    ;
}
const instance = new UserServiceImpl(dbPool_1.pool, new mappers_1.UserMapper());
exports.default = instance;
