import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
// MIDDLEWARE 
app.use(express.json());
// Middleware to parse JSON requests
app.use(bodyParser.json());


// routes imports
import userRouter from "../routes/user.route.js"


app.use("/api/v1/user/", userRouter);


app.get("/", (req, res) => {
    res.status(200).json({ message: "Sucessfully received" })
})

export default app