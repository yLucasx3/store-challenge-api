import { ProductNotFoundError } from "../../helpers/ProductErrors/NotFoundError";
import { PrismaProductsRepository } from "../../repositories/implementations/PrismaProductsRepository";
import { UpdateProductDTO } from "./UpdateProductDTO";

export class UpdateProductUseCase {
  constructor(private prismaProductsRepository: PrismaProductsRepository) {}

  async execute(id: string, product: UpdateProductDTO) {
    const { name, price, description, image } = product;

    const existingProduct = await this.prismaProductsRepository.findById(id);

    if (!existingProduct) {
      throw new ProductNotFoundError(id);
    }

    return this.prismaProductsRepository.update(id, {
      name,
      price,
      description,
      image,
    });
  }
}
