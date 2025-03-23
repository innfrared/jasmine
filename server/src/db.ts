import { Client } from "pg"; // ✅ Use Client instead of Pool

require('dotenv').config()

console.log("Connecting to DB:", process.env.DATABASE_URL); // ✅ Debug print

const client = new Client({
    connectionString: process.env.DATABASE_URL,
});

client.connect()
    .then(() => console.log("✅ Successfully connected to PostgreSQL"))
    .catch(err => console.error("❌ PostgreSQL Connection Error:", err));

export const query = (text: string, params?: any[]) => client.query(text, params);
