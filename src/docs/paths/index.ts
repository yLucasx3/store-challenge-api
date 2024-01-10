import { userPaths } from "./user";
import { authPaths } from "./auth";
import { productPaths } from "./product";

export const paths = {
  ...userPaths,
  ...authPaths,
  ...productPaths,
};
