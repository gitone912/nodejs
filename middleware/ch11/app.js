import express from 'express';
import mylogger from './middleware/logger-middleware.js';
import session from 'express-session'



const router = express.Router();
const app = express();
const port = 3000;
import web from './routes/web.js';
import {join } from 'path';
import { reverse } from 'dns';


app.use(session(
    {   name : 'myname',
        secret :'iamkey',
        resave : false,
        saveUninitialized:true,
        cookie : {maxAge : 200000}
    }
))
app.set('view engine', 'ejs');
app.use(express.static(join(process.cwd(), 'public')));


app.use('/k',mylogger)
app.use('/', web);
app.listen(port, () => {console.log(`Example app listening on port ${port}!`)});