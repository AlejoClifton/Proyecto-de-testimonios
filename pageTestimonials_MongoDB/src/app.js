import express from 'express';
import path from 'path';

import homePage from './router/homeRouter.js'
import productsController from './router/productsRouter.js';
import testimonialsApi from './router/testimonialsApiRouter.js';

const app = express();
const port = 80;

app.set('views', path.join(path.resolve(),'src/model'));
app.set('view engine','ejs');

app.use(express.static('src/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', homePage);
app.use('/products', productsController);
app.use('/testimonials', testimonialsApi);

app.listen(port, ()=>{
    console.log("Server creado correctamente");
})