import express from "express";


const router = express.Router();


import { userRegister , userLogin , updateProfileInfo, getUserDetail } from "../controllers/userLogin.controllers.js";

router.route("/register").post(userRegister)
router.route("/login").post(userLogin)
router.route("/update_profile").put(updateProfileInfo)
router.route(`/get_userdetails/:username`).get(getUserDetail)

export default router;