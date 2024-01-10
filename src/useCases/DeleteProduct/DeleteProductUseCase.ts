import { ProductNotFoundError } from "../../helpers/ProductErrors/NotFoundError";
import { PrismaProductsRepository } from "../../repositories/implementations/PrismaProductsRepository";

export class DeleteProductUseCase {
  constructor(private prismaProductsRepository: PrismaProductsRepository) {}

  async execute(id: string) {
    const existingProduct = await this.prismaProductsRepository.findById(id);

    if (!existingProduct) throw new ProductNotFoundError(id);

    return this.prismaProductsRepository.remove(id);
  }
}
