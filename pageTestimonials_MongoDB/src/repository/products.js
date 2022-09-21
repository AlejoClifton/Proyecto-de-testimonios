import connection from './database.js';

export async function getAllProducts() {
    return await connection(async function (db) {
        return await db.collection('Productos').find().toArray();
    })
}

export default {
    getAllProducts
};