import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";

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

//API Endpoint
app.use("/api/food" , foodRouter);
app.use("/images" , express.static('uploads'))










app.get("/" , (req , res) => {
    res.send("API Working");

})


app.listen(port , () => {
    console.log(`Server started on http://localhost:${port}`);
})
