import { Request, Response } from "express";
import { ValidateUserUseCase } from "./ValidateUserUseCase";
import { handleError } from "../../utils/errorHandler";
import { GenericError } from "../../utils/genericError";

export class ValidateUserController {
  constructor(private validateUserUseCase: ValidateUserUseCase) {}

  async handle(request: Request, response: Response) {
    const { name, email, image, providerAccount } = request.body;

    try {
      const isUserValidated = await this.validateUserUseCase.execute({
        name,
        email,
        image,
        providerAccount,
      });

      return response.status(200).send({ isUserValidated });
    } catch (error) {
      return handleError(response, error as GenericError);
    }
  }
}
