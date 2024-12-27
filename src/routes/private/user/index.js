import express from "express";

import Info from "./info";
import Logout from "./logout";

const router = express.Router();

router.get("/user/info", Info);
router.get("/user/logout", Logout);

export default router;
