import { Product } from "../entities/Product";

export interface PaginatedResponse {
  items: Product[];
  pageInfo: {
    totalItems: number;
    totalPages: number;
    currentPage: number;
  };
}

interface IProductsRepository {
  findById(id: string): Promise<Product | null>;
  save(product: Omit<Product, "id">): Promise<Product>;
  list(
    offset: number,
    limit: number,
    filter?: Record<string, any>,
    orderBy?: string,
    orderDirection?: "asc" | "desc"
  ): Promise<PaginatedResponse>;
  update(id: string, product: Omit<Product, "id">): Promise<Product>;
  remove(id: string): Promise<boolean>;
}

export { IProductsRepository };
