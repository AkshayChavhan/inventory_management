import express from "express";

const app = express();

// MIDDLEWARE 
app.use(express.json());



// routes imports
import userRouter from "../routes/user.route.js"


app.use("/api/v1/user/", userRouter);


app.get("/", (req, res) => {
    res.status(200).json({ message: "Sucessfully received" })
})

export default app