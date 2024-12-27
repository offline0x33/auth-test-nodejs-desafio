import express from "express";

import Info from "./info";

const router = express.Router();

router.get("/user/info", Info);

export default router;
