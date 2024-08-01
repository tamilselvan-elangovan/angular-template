import { development } from "./environment.dev";
import { production } from "./environment.prod";
import { env } from "./interface_env";

const originUrl = () => window.location.origin.split(':')[0] + ':' + window.location.origin.split(':')[1]

export const environment: env = {
  ...development,
  PRODUCTION: false,
  BASE_URL: `${originUrl()}:4101/`,
};

