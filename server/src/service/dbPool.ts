import {Pool} from "pg";

export const pool = new Pool({
    user: 'inmkn',
    host: 'localhost',
    database: 'rhymee',
    password: 'ims4b7b9',
    port: 5432,
});
