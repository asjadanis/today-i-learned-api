namespace NodeJS {
  interface ProcessEnv {
    DB_URL: string;
    ENV: "development" | "production" | "stage";
    PORT: string;
    JWT_SECRET: string;
    JWT_EXPIRES_IN: string;
  }
}
