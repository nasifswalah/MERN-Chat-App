import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js'
import connectToMonogoDB from './db/connectToMongoDB.js';

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => {
    res.send("Hello");
});

app.use("/api/auth", authRoutes);

app.listen(PORT, ()=> {
    connectToMonogoDB()
    console.log(`Server running at ${PORT}`)
});