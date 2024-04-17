import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js'

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

app.use("/api/auth", authRoutes);

app.listen(PORT, ()=> console.log(`Server running at ${PORT}`));