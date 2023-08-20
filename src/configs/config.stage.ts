import path from "path";
import dotenv from "dotenv";
import { Config } from "@/types/config/config.type";

dotenv.config({ path: path.resolve(__dirname, "../../.env.stage") });

const config: Config = {
  DB_URL: process.env.DB_URL,
  ENV: process.env.ENV,
  PORT: process.env.PORT ? parseInt(process.env.PORT) : undefined
};

export default config;
