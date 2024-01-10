import { Request, Response } from "express";
import { GetProductUseCase } from "./GetProductUseCase";
import { handleError } from "../../utils/errorHandler";
import { GenericError } from "../../utils/genericError";

export class GetProductController {
  constructor(private getProductUseCase: GetProductUseCase) {}

  async handle(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const product = await this.getProductUseCase.execute(id);

      return response.status(200).send({ product });
    } catch (error) {
      return handleError(response, error as GenericError);
    }
  }
}
