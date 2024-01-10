import { Product } from "../../entities/Product";
import { ProductNotFoundError } from "../../helpers/ProductErrors/NotFoundError";
import { PrismaProductsRepository } from "../../repositories/implementations/PrismaProductsRepository";

export class GetProductUseCase {
  constructor(private prismaProductsRepository: PrismaProductsRepository) {}

  async execute(id: string): Promise<Product> {
    const product = await this.prismaProductsRepository.findById(id);

    if (!product) throw new ProductNotFoundError(id);

    return product;
  }
}
