import { Request, Response } from "express";
import { ListProductsUseCase } from "./ListProductsUseCase";
import { handleError } from "../../utils/errorHandler";
import { GenericError } from "../../utils/genericError";
import { Product } from "../../entities/Product";

export class ListProductsController {
  constructor(private listProductsUseCase: ListProductsUseCase) {}

  async handle(request: Request, response: Response) {
    const { page, pageSize, filter } = request.query;

    try {
      const products = await this.listProductsUseCase.execute({
        page: Number(page) ?? 0,
        pageSize: Number(pageSize),
        filter: filter as { field: keyof Product; value: string },
      });

      return response.status(200).send(products);
    } catch (error) {
      return handleError(response, error as GenericError);
    }
  }
}
