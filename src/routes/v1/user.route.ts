import { Router } from "express";
import * as userController from "@/controllers/user.controller";
import authMiddleware from "@/middlewares/auth.middleware";

const router = Router();

router.route("/profile").get(authMiddleware, userController.getLoggedInUser);
router
  .route("/:id")
  .get(userController.getUserById)
  .put(authMiddleware, userController.updateUser)
  .delete(authMiddleware, userController.deleteUser);

router.route("/:id/posts").get(userController.getUserPosts);

export default router;
