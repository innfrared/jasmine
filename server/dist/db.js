"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = void 0;
const pg_1 = require("pg"); // ✅ Use Client instead of Pool
require('dotenv').config();
console.log("Connecting to DB:", process.env.DATABASE_URL); // ✅ Debug print
const client = new pg_1.Client({
    connectionString: process.env.DATABASE_URL,
});
client.connect()
    .then(() => console.log("✅ Successfully connected to PostgreSQL"))
    .catch(err => console.error("❌ PostgreSQL Connection Error:", err));
const query = (text, params) => client.query(text, params);
exports.query = query;
