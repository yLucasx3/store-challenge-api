import { Product } from "../../entities/Product";

export interface IListProductsDTO {
  page: number;
  pageSize: number;
  filter?: { field: keyof Product; value: string | number };
}
