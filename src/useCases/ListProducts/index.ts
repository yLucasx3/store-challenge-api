import { PrismaProductsRepository } from "../../repositories/implementations/PrismaProductsRepository";
import { ListProductsController } from "./ListProductsController";
import { ListProductsUseCase } from "./ListProductsUseCase";

const prismaProductsRepository = new PrismaProductsRepository();

const listProductsUseCase = new ListProductsUseCase(prismaProductsRepository);

const listProductsController = new ListProductsController(listProductsUseCase);

export { listProductsController, listProductsUseCase };
