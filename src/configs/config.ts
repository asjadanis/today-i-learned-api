import { Config, SantizedConfig } from "../types/config/config";

const santizeConfig = (config: Config, envFile: string): SantizedConfig => {
  for (const [key, value] of Object.entries(config)) {
    if (!value) {
      throw new Error(`Missing ${key} in ${envFile}`);
    }
  }
  return config as SantizedConfig;
};

const getConfig = (): SantizedConfig => {
  const ENV = process.env.ENV;
  if (!ENV) {
    throw new Error("ENV is not defined");
  }
  switch (ENV) {
    case "development": {
      // TODO: Move to dynamic import and fix eslint errors
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const configDev = require("./config.dev").default;
      return {
        ...santizeConfig(configDev, ".env.dev")
      };
    }
    case "stage": {
      // TODO: Move to dynamic import and fix eslint errors
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const configStage = require("./config.stage").default;
      return {
        ...santizeConfig(configStage, ".env.stage")
      };
    }
    case "production": {
      // TODO: Move to dynamic import and fix eslint errors
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const configProd = require("./config.prod").default;
      return {
        ...santizeConfig(configProd, ".env.prod")
      };
    }
    default:
      throw new Error("ENV IS NOT CORRECT!!!");
  }
};

export default getConfig();
