import { Request, Response } from "express";
import { DeleteProductUseCase } from "./DeleteProductUseCase";
import { handleError } from "../../utils/errorHandler";
import { GenericError } from "../../utils/genericError";

export class DeleteProductController {
  constructor(private deleteProductUseCase: DeleteProductUseCase) {}

  async handle(request: Request, response: Response) {
    const { id } = request.params;

    try {
      await this.deleteProductUseCase.execute(id);

      return response.status(204).send();
    } catch (error) {
      return handleError(response, error as GenericError);
    }
  }
}
