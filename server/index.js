import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const port = 8888;

const app = express();

app.get('/', (req, res) => {
    res.send('hello world');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
