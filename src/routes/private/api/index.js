import express from "express";

import Profile from "./profile";

const router = express.Router();

router.use(Profile);

export default router;
