import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const port = 8888;

const app = express();

app.get('/', (req, res) => {
    res.send('hello world');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

mongoose.connect(process.env.MONGO_URI)
.then(()=> {
    console.log('connected to db');
    app.get('/', (req, res)=> {
        res.send('connected')
    })
}).catch((error) =>{
     console.log('Error connecting: ', error);
});