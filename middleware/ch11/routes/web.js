import express from 'express';
const router = express.Router();
import {StudentController} from '../controller/homeController.js';

router.get('/', StudentController.homeController);
router.get('/session',StudentController.get_session_info)

export default router;