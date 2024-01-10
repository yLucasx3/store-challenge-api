import { Product } from "../../entities/Product";

export interface IListProductsDTO {
  offset: number;
  limit: number;
  filter?: { field: keyof Product; value: string | number };
}
