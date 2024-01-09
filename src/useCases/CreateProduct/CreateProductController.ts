import { Request, Response } from "express";
import { CreateProductUseCase } from "./CreateProductUseCase";
import { handleError } from "../../utils/errorHandler";
import { GenericError } from "../../utils/genericError";

export class CreateProductController {
  constructor(private createProductUseCase: CreateProductUseCase) {}

  async handle(request: Request, response: Response) {
    const { name, price, description, image } = request.body;

    try {
      const newProduct = await this.createProductUseCase.execute({
        name,
        price,
        description,
        image,
      });

      return response.status(201).send({ newProduct });
    } catch (error) {
      return handleError(response, error as GenericError);
    }
  }
}
