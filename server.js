import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/db.js";

dotenv.config();
const app = express();


const PORT = process.env.PORT || 5000;


app.listen(PORT, () => { 
   connectDatabase()
   console.log(`Server is running on port ${PORT}`);
})

app.get('/', (req, res) => {
  res.send('Hello from backend')
})

app.get('')