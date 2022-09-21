import express from 'express';
import * as controller from '../controllers/testimonialsAPIController.js';

const router = express.Router();

router.route('/')
    .get(controller.getAll)

router.route('/:id')
    .all(controller.mw_setTestimonials)
    .delete(controller.deleteByID)
    .put(controller.publicByID)

export default router;