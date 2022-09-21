import fs from "fs";

const JSON_Productos = "./src/data/dataProducts.json";

export async function getAllProducts() {
    return fs.promises
        .readFile(JSON_Productos)
        .then(function (data) {
            const products = JSON.parse(data.toString());
            return products;
        });
}

export default {
    getAllProducts
};