import swaggerUi from "swagger-ui-express";
import { info } from "./info";
import { paths } from "./paths";

export const setupDocs = [
  swaggerUi.serve,
  swaggerUi.setup({
    ...info,
    paths,
  }),
];
