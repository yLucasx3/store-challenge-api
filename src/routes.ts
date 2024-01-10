import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";
import { authenticateUserController } from "./useCases/AuthenticateUser";
import { validateUserController } from "./useCases/ValidateUser";
import { createProductController } from "./useCases/CreateProduct";
import { listProductsController } from "./useCases/ListProducts";
import { updateProductController } from "./useCases/UpdateProduct";
import { deleteProductController } from "./useCases/DeleteProduct";
import { setupDocs } from "./docs";
import { getProductController } from "./useCases/GetProduct";

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

router.get("/products/:id", (request, response) => {
  return getProductController.handle(request, response);
});

router.post("/products", (request, response) => {
  return createProductController.handle(request, response);
});

router.put("/products/:id", (request, response) => {
  return updateProductController.handle(request, response);
});

router.delete("/products/:id", (request, response) => {
  return deleteProductController.handle(request, response);
});

// const [serve, setup] = setupDocs;

// router.use("/docs", serve);
// router.get("/docs", setup);

export { router };
