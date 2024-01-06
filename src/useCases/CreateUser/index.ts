import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";
import { MongoUsersRepository } from "../../repositories/implementations/MongoUsersRepository";

const mongoUsersRepository = new MongoUsersRepository();

const createUserUseCase = new CreateUserUseCase(mongoUsersRepository);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
