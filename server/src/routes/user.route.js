import express from "express";


const router = express.Router();


import { userLogin } from "../controllers/userLogin.controllers.js";
router.route("/login").post(userLogin)

export default router;