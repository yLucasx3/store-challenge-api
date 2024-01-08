import { PrismaUsersRepository } from "../../repositories/implementations/PrismaUsersRepository";
import { ValidateUserController } from "./ValidateUserController";
import { ValidateUserUseCase } from "./ValidateUserUseCase";

const prismaUsersRepository = new PrismaUsersRepository();

const validateUserUseCase = new ValidateUserUseCase(prismaUsersRepository);

const validateUserController = new ValidateUserController(validateUserUseCase);

export { validateUserController, validateUserUseCase };
