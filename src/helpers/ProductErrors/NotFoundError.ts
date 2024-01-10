import { GenericError } from "../../utils/genericError";

export class ProductNotFoundError extends GenericError {
  constructor(id: string) {
    super(`Product with ${id} not found!`, 404);
    this.name = "ProductNotFoundError";
  }
}
