import { BcryptProvider } from "../../providers/BcryptProvider";
import { PrismaUsersRepository } from "../../repositories/implementations/PrismaUsersRepository";
import { AuthenticateUserController } from "./AuthenticateUserController";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

const bcryptProvider = new BcryptProvider();
const prismaUsersRepository = new PrismaUsersRepository();

const authenticateUserUseCase = new AuthenticateUserUseCase(
  prismaUsersRepository,
  bcryptProvider
);

const authenticateUserController = new AuthenticateUserController(
  authenticateUserUseCase
);

export { authenticateUserUseCase, authenticateUserController };
