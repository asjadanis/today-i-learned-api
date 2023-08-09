namespace NodeJS {
  interface ProcessEnv {
    DB_URL: string;
    ENV: "development" | "production" | "stage";
    PORT: string;
  }
}
