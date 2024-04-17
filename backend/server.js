import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js'
import connectToMonogoDB from './db/connectToMongoDB.js';


const PORT = process.env.PORT || 5000;
const app = express();

dotenv.config();

app.use(express.json());
app.use("/api/auth", authRoutes);

// app.get("/", (req, res) => {
//     res.send("Hello");
// });

app.listen(PORT, ()=> {
    connectToMonogoDB()
    console.log(`Server running at ${PORT}`)
});