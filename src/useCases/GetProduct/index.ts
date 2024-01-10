import { PrismaProductsRepository } from "../../repositories/implementations/PrismaProductsRepository";
import { GetProductController } from "./GetProductController";
import { GetProductUseCase } from "./GetProductUseCase";

const prismaProductsRepository = new PrismaProductsRepository();

const getProductUseCase = new GetProductUseCase(prismaProductsRepository);

const getProductController = new GetProductController(getProductUseCase);

export { getProductController, getProductUseCase };
