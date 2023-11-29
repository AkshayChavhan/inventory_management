// import express, { json } from "express";
import dbconnect from "./src/DB/dbConnect.js";
import dotenv from "dotenv";
import app from "./src/App/app.js";


dotenv.config({
    path: './.env'
})

const PORT = process.env.PORT || 5500;





dbconnect().
    then(() => {
        app.listen(PORT, async () => {
            console.log(`listening to port ${PORT}`)
        })
    })
    .catch((error) => {
        console.log(`Error occurs while DB connection ${error}`)
    })