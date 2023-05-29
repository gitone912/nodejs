import express from 'express';
const app = express();
const port = 3000;
import web from './routes/web.js';

app.set('view engine', 'ejs');
app.use('/',web)
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    })