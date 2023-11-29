import express from "express";


const router = express.Router();


import { userRegister , userLogin } from "../controllers/userLogin.controllers.js";

router.route("/register").post(userRegister)
router.route("/login").post(userLogin)

export default router;