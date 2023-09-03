import { SwaggerOptions } from "swagger-ui-express";

const options: SwaggerOptions = {
  definition: {
    openapi: "3.0.3",
    info: {
      title: "Express API with TypeScript",
      version: "1.0.0",
      description:
        "This is a REST API application made with Express. It retrieves data from JSONPlaceholder, and allows users to manage posts and comments.",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html"
      },
      contact: {
        name: "Asjad Anis",
        email: "asjadanis128@gmail.com"
      }
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        }
      }
    },
    servers: [
      {
        url: "http://localhost:3000/api/v1"
      }
    ]
  },
  apis: ["./src/routes/v1/*.ts"]
};

export default options;
