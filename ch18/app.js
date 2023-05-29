import express from 'express';
import connectDb from './db/connectDB.js';
// import './models/student.js'
import createDoc from './models/student.js';

const app = express();
const port = 8000;
const DATABASE_URL = "mongodb://localhost:27017";



connectDb(DATABASE_URL);
createDoc()
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    }
);
