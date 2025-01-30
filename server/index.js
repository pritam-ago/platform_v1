import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';

dotenv.config();
const PORT = 8888;
const app = express();
const corsOptions = {
  origin: 'http://localhost:5000',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials : true
}

app.use(cors(corsOptions));
app.use(express.json());
app.options("*", cors());
app.use('/api/auth', authRoutes); 

app.get('/', (req, res) => {
    res.send('hello goiss');
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1); 
  });
