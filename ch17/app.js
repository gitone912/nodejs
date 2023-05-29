import express from 'express';
const app = express();
const port = 3000;
import mongoose from 'mongoose';
import connectdb from './db/connectdb.js';
const DB_URL = 'mongodb://localhost:27017';
connectdb(DB_URL);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    });