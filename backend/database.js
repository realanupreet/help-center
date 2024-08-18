import mysql from 'mysql2';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
}).promise();


const query = async (sql, params) => {
    const [rows, fields] = await pool.query(sql, params);
    return rows;
}

const getAllRequests = async () => {
    let result = await query('SELECT * FROM help_center');
    return result;
}

console.log(await getAllRequests());

export default pool;

