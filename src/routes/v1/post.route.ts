import * as postController from "@/controllers/post.contoller";
import { Router } from "express";

const router = Router();

router.route("/").get(postController.getPosts).post(postController.createPost);

router
  .route("/:id")
  .get(postController.getPost)
  .put(postController.updatePost)
  .delete(postController.deletePost);

export default router;
