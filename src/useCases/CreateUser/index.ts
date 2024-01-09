import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";
import { PrismaUsersRepository } from "../../repositories/implementations/PrismaUsersRepository";
import { BcryptProvider } from "../../providers/BcryptProvider";

const bcryptProvider = new BcryptProvider();
const prismaUsersRepository = new PrismaUsersRepository();

const createUserUseCase = new CreateUserUseCase(
  prismaUsersRepository,
  bcryptProvider
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
