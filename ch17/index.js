import express from 'express';
const app = express();
const port = 3000;
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log('Connected to MongoDB');
    }).catch(err => {
    console.log(err);
    });

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    });