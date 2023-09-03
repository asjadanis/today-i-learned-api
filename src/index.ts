import express from "express";
import config from "@/configs/config";
import morgan from "morgan";
import errorHandler from "@/middlewares/error.middleware";
import routes from "@/routes/v1";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import options from "@/docs/swagger/swaggerConfig";

const app = express();
const specs = swaggerJSDoc(options);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
} else {
  app.use(morgan("combined"));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", routes);
app.use(errorHandler);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);

const PORT = config.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
