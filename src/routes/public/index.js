import express from "express";

import IndexHTML from "./page"
import LoginHTML from "./page/loginpage"
import UserInfoHTML from "./page/userinfo"
import Login from "./login";
import Register from "./register";
import ChangePassword from "./changePassword";

const router = express.Router();

router.get("/", IndexHTML);
router.get("/loginpage", LoginHTML);
router.get("/userinfo", UserInfoHTML);
router.post("/v1/user/login", Login);
router.post("/register", Register);
router.post("/change", ChangePassword);

export default router;
