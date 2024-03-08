import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
dotenv.config();
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }))
app.use(cors());

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.mongodb).then(() =>
    app.listen(PORT, ()=> console.log(`server is running on port ${PORT}`))).catch(err => console.log(err))