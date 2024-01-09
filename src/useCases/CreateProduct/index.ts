import { PrismaProductsRepository } from "../../repositories/implementations/PrismaProductsRepository";
import { CreateProductController } from "./CreateProductController";
import { CreateProductUseCase } from "./CreateProductUseCase";

const prismaProductsRepository = new PrismaProductsRepository();

const createProductUseCase = new CreateProductUseCase(prismaProductsRepository);

const createProductController = new CreateProductController(
  createProductUseCase
);

export { createProductController, createProductUseCase };
