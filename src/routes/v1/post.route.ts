import * as postController from "@/controllers/post.contoller";
import authMiddleware from "@/middlewares/auth.middleware";
import { Router } from "express";

const router = Router();

router
  .route("/")
  .get(postController.getPosts)
  .post(authMiddleware, postController.createPost);

router
  .route("/:id")
  .get(postController.getPost)
  .put(authMiddleware, postController.updatePost)
  .delete(authMiddleware, postController.deletePost);

export default router;
