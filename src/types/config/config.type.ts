export interface Config {
  DB_URL: string | undefined;
  ENV: string | undefined;
  PORT: number | undefined;
  JWT_SECRET: string | undefined;
  JWT_EXPIRES_IN: string | undefined;
}

export interface SantizedConfig {
  DB_URL: string;
  ENV: string;
  PORT: number;
  JWT_SECRET: string;
  JWT_EXPIRES_IN: string;
}
