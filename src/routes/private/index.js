import express from "express";

import SecurityMiddleware from "./middleware";
import User from "./user";

const router = express.Router();

router.use(SecurityMiddleware);
router.use(User);

export default router;
