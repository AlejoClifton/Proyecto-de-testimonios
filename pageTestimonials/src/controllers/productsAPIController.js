import repository from '../repository/products.js';

const JSON_Productos = "./src/data/dataProducts.json";

export function getAll(req, res) {
    repository.getAllProducts()
        .then(function (products) {
            res.status(200).json(products);
        })
        .catch(function () {
            res.status(500).json({ error: 500, msg: "no se encuentra el recurso solicitado" });
        })
}