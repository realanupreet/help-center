import mysql from 'mysql2';
import { dbConfig } from './env.js';
import { PrismaClient } from '@prisma/client';

const pool = mysql.createPool(dbConfig).promise();

const prisma = new PrismaClient();

const getAllRequests = async () => {
    let result = await prisma.card.findMany();;
    return result;
}

const getOneRequest = async (title) => {
    console.log(title);
    try {
        let result = await prisma.card.findMany({
            where: { title: title },
        });
        console.log(result);
        return result;
    } catch (error) {
        return { error: 'Request not found' };
    }
}

const createRequest = async (request) => {
    let result = await prisma.card.create({
        data: {
            title: request.title,
            description: request.data,
        },
    });

    return result.insertId;
}

const searchRequest = async (request) => {
    let result = prisma.card.findMany({
        where: {
            OR: [
                { title: { contains: request.search } },
                { description: { contains: request.search } },
            ],
        },
    });
    return result;
}

console.log(await getAllRequests());
console.log(await getOneRequest('sample'));
// console.log(await createRequest({ title: 'New Request', data: 'This is a new request' }));
console.log('search test');
console.log(await searchRequest({ search: 'ne' }));

export {
    getAllRequests,
    getOneRequest,
    createRequest,
    searchRequest,
    pool,
};

