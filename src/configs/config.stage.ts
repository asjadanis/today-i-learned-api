import path from "path";
import dotenv from "dotenv";
import { Config } from "@/types/config/config.type";

dotenv.config({ path: path.resolve(__dirname, "../../.env.stage") });

const config: Config = {
  DB_URL: process.env.DB_URL,
  ENV: process.env.ENV,
  PORT: process.env.PORT ? parseInt(process.env.PORT) : undefined,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN
};

export default config;
