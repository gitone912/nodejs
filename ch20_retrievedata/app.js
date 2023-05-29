import express from 'express';
import connectDb from './db/connectDB.js';
// import './models/student.js'
import {getAllDoc,updateDoc,deleteDoc} from './models/student.js';



const app = express();
const port = 8000;
const DATABASE_URL = "mongodb://localhost:27017";



connectDb(DATABASE_URL);

getAllDoc();
updateDoc("646f7e7164e1d7158e6f40f0")
deleteDoc("746f7e7164e1d7158e6f40f0")
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    }
);
