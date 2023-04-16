import express from 'express';
const router = express.Router();
const app = express();
const port = 3000;
import web from './routes/web.js';
import {join } from 'path';
app.set('view engine', 'ejs');
app.use(express.static(join(process.cwd(), 'public')));
app.use('/', web);

app.listen(port, () => {console.log(`Example app listening on port ${port}!`)});