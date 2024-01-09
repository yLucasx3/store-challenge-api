import { Product } from "../../entities/Product";
import { PrismaProductsRepository } from "../../repositories/implementations/PrismaProductsRepository";
import { CreateProductDTO } from "./CreateProductDTO";

export class CreateProductUseCase {
  constructor(private prismaProductsRepository: PrismaProductsRepository) {}

  async execute(product: CreateProductDTO) {
    const { name, price, description, image } = product;

    const newProduct = new Product({ name, price, description, image });

    return this.prismaProductsRepository.save(newProduct);
  }
}
