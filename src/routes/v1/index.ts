import postRouter from "@/routes/v1/post.route";
import userRouter from "@/routes/v1/user.route";
import authRouter from "@/routes/v1/auth.route";
import { Router } from "express";

const router = Router();

const routes = [
  {
    path: "/posts",
    router: postRouter
  },
  {
    path: "/users",
    router: userRouter
  },
  {
    path: "/auth",
    router: authRouter
  }
];

routes.forEach(route => {
  router.use(route.path, route.router);
});

export default router;
