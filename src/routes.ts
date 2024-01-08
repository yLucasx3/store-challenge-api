import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";
import { authenticateUserController } from "./useCases/AuthenticateUser";
import { validateUserController } from "./useCases/ValidateUser";

const router = Router();

router.post("/users", (request, response) => {
  return createUserController.handle(request, response);
});

router.post("/users/auth", (request, response) => {
  return authenticateUserController.handle(request, response);
});

router.post("/users/validate", (request, response) => {
  return validateUserController.handle(request, response);
});

export { router };
