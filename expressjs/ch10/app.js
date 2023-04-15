import web from './routes/web.js';

import express from 'express';
const app = express();
app.use('/',web)
app.listen(3000, () => {
    console.log('Server is running on port 3000');
    });