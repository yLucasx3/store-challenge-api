import { IProductsRepository } from "../../repositories/IProductsRepository";
import { IListProductsDTO } from "./ListProductsDTO";

export class ListProductsUseCase {
  constructor(private productsRepository: IProductsRepository) {}

  async execute(paginationOptions: IListProductsDTO) {
    const { offset, limit, filter } = paginationOptions;

    return this.productsRepository.list(offset, limit, filter);
  }
}
