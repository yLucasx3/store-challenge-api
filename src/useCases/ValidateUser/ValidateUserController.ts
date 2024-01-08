import { Request, Response } from "express";
import { ValidateUserUseCase } from "./ValidateUserUseCase";
import { getErrorMessage } from "../../utils/errorHandler";

export class ValidateUserController {
  constructor(private validateUserUseCase: ValidateUserUseCase) {}

  async handle(request: Request, response: Response) {
    const { displayName, email } = request.body;

    try {
      await this.validateUserUseCase.execute(displayName, email);

      return response.status(200).send({ message: "User validated" });
    } catch (error) {
      return response.status(400).json({ message: getErrorMessage(error) });
    }
  }
}
