import mongoose from "mongoose";
import dotenv from 'dotenv';


dotenv.config();


export const connectDB =  async (params) => {
    const uri = process.env.MONGO_URI;
    mongoose
      .connect(uri, {
        useNewUrlParser: true, // Ensures the updated connection string parser is used.
        useUnifiedTopology: true, // Enables the unified topology engine for improved monitoring and connection handling.
        useFindAndModify: false, // Avoids deprecation warnings for `findAndModify`.
        useCreateIndex: true, // Uses the newer `createIndex()` function.
      })
      .then(() => {
        console.log("Database is Connected");
      })
      .catch((err) => {
        console.log("Something went wrong", err.message);
      });
}