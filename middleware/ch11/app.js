import express from 'express';
import mylogger from './middleware/logger-middleware.js';
import session from 'express-session'
import MongoStore from 'connect-mongo';


const router = express.Router();
const app = express();
const port = 3000;
import web from './routes/web.js';
import {join } from 'path';
import { reverse } from 'dns';

const sesssionStorage = new MongoStore({
    mongoUrl : 'mongodb://localhost:27017/session',
    collectionName : 'sessions',
    ttl : 1000 * 60 * 60 * 24,
})


app.use(session(
    {   name : 'myname',
        secret :'iamkey',
        resave : false,
        saveUninitialized:true,
        cookie : {maxAge : 200000},
        store : sesssionStorage
    }
))
app.set('view engine', 'ejs');
app.use(express.static(join(process.cwd(), 'public')));


app.use('/k',mylogger)
app.use('/', web);
app.listen(port, () => {console.log(`Example app listening on port ${port}!`)});