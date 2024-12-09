import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

//app config
const app = express();


//use env file
dotenv.config()
const port = process.env.PORT;

// middleware
app.use(express.json())
app.use(cors())


// Database Connection
connectDB();

app.get("/" , (req , res) => {
    res.send("API Working");

})


app.listen(port , () => {
    console.log(`Server started on http://localhost:${port}`);
})
