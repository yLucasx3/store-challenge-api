import { Request, Response } from "express";
import { handleError } from "../../utils/errorHandler";
import { GenericError } from "../../utils/genericError";
import { UpdateProductUseCase } from "./UpdateProductUseCase";

export class UpdateProductController {
  constructor(private updateProductUseCase: UpdateProductUseCase) {}
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const { name, description, price, image } = request.body;

    try {
      const updatedProduct = await this.updateProductUseCase.execute(id, {
        name,
        description,
        price,
        image,
      });

      response.status(200).send({ updatedProduct });
    } catch (error) {
      return handleError(response, error as GenericError);
    }
  }
}
