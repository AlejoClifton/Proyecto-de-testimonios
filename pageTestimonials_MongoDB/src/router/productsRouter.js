import express from 'express';
import * as controller from '../controllers/productsAPIController.js';

const router = express.Router();

router.route('/all')
    .get(controller.getAll);

export default router;