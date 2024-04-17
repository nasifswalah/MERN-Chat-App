import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express()

app.get("/", (req, res)=>{
    res.send("Hello");
})

app.listen(PORT, ()=> console.log(`Server running at ${PORT}`))