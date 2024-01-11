import { Request, Response } from "express";
import { ListProductsUseCase } from "./ListProductsUseCase";
import { handleError } from "../../utils/errorHandler";
import { GenericError } from "../../utils/genericError";
import { Product } from "../../entities/Product";

export class ListProductsController {
  constructor(private listProductsUseCase: ListProductsUseCase) {}

  async handle(request: Request, response: Response) {
    const { filter } = request.query;

    const offset = Number(request.query.offset);
    const limit = Number(request.query.limit);

    try {
      const products = await this.listProductsUseCase.execute({
        offset: isNaN(offset) ? 0 : offset,
        limit: isNaN(limit) ? 10 : limit,
        filter: filter as { field: keyof Product; value: string },
      });

      return response.status(200).send(products);
    } catch (error) {
      return handleError(response, error as GenericError);
    }
  }
}
