import web from './routes/web.js';
import {join} from 'path';
import express from 'express';
const app = express();

app.use(express.static(join(process.cwd(), 'public')));
app.use('/',web)
app.listen(3000, () => {
    console.log('Server is running on port 3000');
    });