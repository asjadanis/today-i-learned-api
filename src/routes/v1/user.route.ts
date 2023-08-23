import { Router } from "express";
import * as userController from "@/controllers/user.controller";

const router = Router();

router.route("/profile").get(userController.getUserById);
router.route("/").post(userController.createUser);
router
  .route("/:id")
  .get(userController.getUserById)
  .put(userController.updateUser)
  .delete(userController.deleteUser);

export default router;
