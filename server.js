// const express = require("express");
// const colors = require("colors");
// const morgan = require("morgan");
// const dotenv = require("dotenv");
// const cors = require("cors");

import express from 'express'
import colors from 'colors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import cors from 'cors'
import DBConnect from './config/db.js'
import userRoutes from './Routes/userRoutes.js'
import blogRoutes from './Routes/blogRoutes.js'
//env config
// dotenv.config({path :"./package-lock.json"});
dotenv.config();

// rest object
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());// use for  receive json data from client 
app.use(morgan('dev'));

// Routes 
// app.get("/", (req, res) => {
//     res.status(200).send({
//         "message": "Node Server"
//     });
// });



app.use("/api/v1/user",userRoutes)
app.use("/api/v1/blog",blogRoutes)
// PORT
const PORT = process.env.PORT || 8080;

// DBConnection 
DBConnect()

// Listen 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`.bgCyan.white);
});
