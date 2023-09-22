import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();


app.listen(process.env.PORT, console.log(`Server is running on port ${process.env.PORT}`));

app.get('/', (req, res) => {
  res.send('Hello from backend')
})

app.get('')