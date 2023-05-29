import express from 'express';
const router = express.Router();
import {homeController} from '../controller/homeController.js';
import {submit} from '../controller/submit.js';

router.get('/', homeController);
router.get('/submit', submit);

export default router;