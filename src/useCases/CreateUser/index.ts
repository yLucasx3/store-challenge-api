import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";
import { PrismaUsersRepository } from "../../repositories/implementations/PrismaUsersRepository";

const prismaUsersRepository = new PrismaUsersRepository();

const createUserUseCase = new CreateUserUseCase(prismaUsersRepository);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
