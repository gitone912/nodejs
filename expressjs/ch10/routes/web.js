import express from "express";
const router = express.Router();
import { homwController } from "../controllers/homw-controller.js";
import { aboutController } from "../controllers/about-controller.js";


router.get('/', homwController);
router.get('/about', aboutController);

export default router;