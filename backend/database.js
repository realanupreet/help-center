import mysql from 'mysql2';
import { dbConfig } from './env.js';

const pool = mysql.createPool(dbConfig).promise();


const query = async (sql, params) => {
    const [rows, fields] = await pool.query(sql, params);
    return rows;
}

const getAllRequests = async () => {
    let result = await query('SELECT * FROM help_center');
    return result;
}

const getOneRequest = async (id) => {
    let result = await query('SELECT * FROM help_center WHERE id = ?', [id]);
    return result[0];
}

const createRequest = async (request) => {
    let result = await query(`
        
        INSERT INTO 
        help_center (title, data) 
        VALUES (?, ?)

        `,
        [
            request.title,
            request.data,
        ]
    );

    return result.insertId;
}

const searchRequest = async (request) => {
    let result = await query(`
        SELECT * FROM help_center
        WHERE title LIKE ?
        OR data LIKE ?
        `,
        [
            `%${request.search}%`,
            `%${request.search}%`,
        ]
    );

    return result;
}

console.log(await getAllRequests());
console.log(await getOneRequest(1));
// console.log(await createRequest({ title: 'New Request', data: 'This is a new request' }));
console.log('search test');
console.log(await searchRequest({ search: 'ne' }));

export {
    getAllRequests,
    getOneRequest,
    createRequest,
    pool,
};

