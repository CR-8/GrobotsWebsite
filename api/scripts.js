import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose"



dotenv.config();

mongoose.connect(process.env.MONGO)
        .then(()=>{
            console.log("Databse is connected");
        })
        .catch((err)=>{
            console.log("Database error detected");
        })

const app = express();
const port = 3000;

app.get("/" , (req,res) =>{
    res.send("Hello world")
})

app.listen(port , ()=>{
    console.log("Running on server 3000")
})