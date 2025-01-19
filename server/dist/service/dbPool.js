"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
exports.pool = new pg_1.Pool({
    user: 'inmkn',
    host: 'localhost',
    database: 'rhymee',
    password: 'ims4b7b9',
    port: 5432,
});
