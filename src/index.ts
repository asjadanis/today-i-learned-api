import express from "express";
import config from "./configs/config";
import morgan from "morgan";
import postRoutes from "@/routes/v1/post.route";
import errorHandler from "middlewares/error";

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
} else {
  app.use(morgan("combined"));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/posts", postRoutes);
app.use(errorHandler);

const PORT = config.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
