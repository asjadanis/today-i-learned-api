import postRouter from "@/routes/v1/post.route";
import { Router } from "express";

const router = Router();

const routes = [
  {
    path: "/posts",
    router: postRouter
  }
];

routes.forEach(route => {
  router.use(route.path, route.router);
});

export default router;
