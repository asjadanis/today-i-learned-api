export interface Config {
  DB_URL: string | undefined;
  ENV: string | undefined;
  PORT: number | undefined;
}

export interface SantizedConfig {
  DB_URL: string;
  ENV: string;
  PORT: number;
}
