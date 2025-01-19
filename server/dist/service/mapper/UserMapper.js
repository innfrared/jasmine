"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMapper = void 0;
class UserMapper {
    mapUserFromDb(row) {
        return {
            id: row.id,
            username: row.username,
            password_hash: row.password_hash,
            email: row.email,
            first_name: row.first_name,
            last_name: row.last_name,
        };
    }
}
exports.UserMapper = UserMapper;
