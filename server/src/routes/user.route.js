import express from "express";


const router = express.Router();


import { userRegister , userLogin , getCurrentUserData } from "../controllers/userLogin.controllers.js";

router.route("/register").post(userRegister)
router.route("/login").post(userLogin)
router.route(`/get_user/:username`).get(getCurrentUserData)

export default router;