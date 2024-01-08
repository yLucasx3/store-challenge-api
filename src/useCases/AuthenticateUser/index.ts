import { PrismaUsersRepository } from "../../repositories/implementations/PrismaUsersRepository";
import { AuthenticateUserController } from "./AuthenticateUserController";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

const prismaUsersRepository = new PrismaUsersRepository();

const authenticateUserUseCase = new AuthenticateUserUseCase(
  prismaUsersRepository
);

const authenticateUserController = new AuthenticateUserController(
  authenticateUserUseCase
);

export { authenticateUserUseCase, authenticateUserController };
