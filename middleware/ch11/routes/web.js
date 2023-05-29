import express from 'express';
const router = express.Router();
import {StudentController} from '../controller/homeController.js';

router.get('/', StudentController.homeController);
router.get('/session',StudentController.get_session_info)
router.get('/delete',StudentController.delete_session)
router.get('/regenerate',StudentController.regenerate_session)
router.get('/session_example',StudentController.session_example)

export default router;