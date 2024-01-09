import { IProductsRepository } from "../../repositories/IProductsRepository";
import { IListProductsDTO } from "./ListProductsDTO";

export class ListProductsUseCase {
  constructor(private productsRepository: IProductsRepository) {}

  async execute(paginationOptions: IListProductsDTO) {
    const { page, pageSize, filter } = paginationOptions;

    return this.productsRepository.list(page, pageSize, filter);
  }
}
