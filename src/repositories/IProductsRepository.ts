import { Product } from "../entities/Product";

interface IProductsRepository {
  findById(id: string): Promise<Product | null>;
  save(product: Omit<Product, "id">): Promise<Product>;
  list(
    page: number,
    pageSize: number,
    filter?: { field: keyof Product; value: string | number }
  ): Promise<{
    items: Product[];
    pageInfo: {
      page: number;
      pageSize: number;
      totalPages: number;
      totalItems: number;
    };
  }>;
}

export { IProductsRepository };
