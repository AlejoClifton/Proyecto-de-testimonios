import express from 'express';
import * as controller from '../controllers/homeController.js';

const router = express.Router();

router.route('/')
    .get(controller.homePage);

router.route('/sendForm')
    .get(controller.viewPageForm)
    .post(controller.createTestimonial);

export default router;