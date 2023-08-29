import * as authController from "@/controllers/auth.controller";
import { Router } from "express";

const router = Router();

router.route("/login").post(authController.loginUser);
router.route("/register").post(authController.createUser);

export default router;
