import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { getErrorMessage } from "../../utils/errorHandler";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { username, email, password } = request.body;

    try {
      await this.createUserUseCase.execute({
        username,
        email,
        password,
      });

      return response.status(201).send();
    } catch (error) {
      return response.status(400).json({
        message: getErrorMessage(error) || "Unexpected error.",
      });
    }
  }
}
