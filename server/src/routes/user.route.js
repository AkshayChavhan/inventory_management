import express from "express";


const router = express.Router();


import { userRegister } from "../controllers/userLogin.controllers.js";

router.route("/register").post(userRegister)

export default router;