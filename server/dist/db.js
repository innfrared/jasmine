"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: 'inmkn',
    host: 'localhost',
    database: 'rhymee',
    password: 'ims4b7b9',
    port: 5432,
});
exports.default = pool;
