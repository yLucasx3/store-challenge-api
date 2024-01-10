import { PrismaProductsRepository } from "../../repositories/implementations/PrismaProductsRepository";
import { UpdateProductController } from "./UpdateProductController";
import { UpdateProductUseCase } from "./UpdateProductUseCase";

const prismaProductsRepository = new PrismaProductsRepository();

const updateProductUseCase = new UpdateProductUseCase(prismaProductsRepository);

const updateProductController = new UpdateProductController(
  updateProductUseCase
);

export { updateProductController, updateProductUseCase };
