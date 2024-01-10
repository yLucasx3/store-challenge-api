import { PrismaProductsRepository } from "../../repositories/implementations/PrismaProductsRepository";
import { DeleteProductController } from "./DeleteProductController";
import { DeleteProductUseCase } from "./DeleteProductUseCase";

const prismaProductsRepository = new PrismaProductsRepository();

const deleteProductUseCase = new DeleteProductUseCase(prismaProductsRepository);

const deleteProductController = new DeleteProductController(
  deleteProductUseCase
);

export { deleteProductController, deleteProductUseCase };
