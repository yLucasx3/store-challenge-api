import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";
import { authenticateUserController } from "./useCases/AuthenticateUser";
import { validateUserController } from "./useCases/ValidateUser";
import { createProductController } from "./useCases/CreateProduct";
import { listProductsController } from "./useCases/ListProducts";

const router = Router();

router.post("/users", (request, response) => {
  return createUserController.handle(request, response);
});

router.post("/auth/login", (request, response) => {
  return authenticateUserController.handle(request, response);
});

router.post("/auth/validate", (request, response) => {
  return validateUserController.handle(request, response);
});

router.get("/products", (request, response) => {
  return listProductsController.handle(request, response);
});

router.post("/products", (request, response) => {
  return createProductController.handle(request, response);
});

export { router };
