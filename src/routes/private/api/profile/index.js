import express from "express";

import { GenerateToken, Validation } from "./security";
import { Info } from "./info";
import { Password } from "./update";

const { Auth, Pin } = Validation;

const router = express.Router();

router.post("/api/profile/info", Info);
router.post("/api/profile/update/password", Password);

router.post("/api/profile/security/generateToken", GenerateToken);
router.post("/api/profile/security/validation/pin", Pin);
router.post("/api/profile/security/validation/auth", Auth);

export default router;
