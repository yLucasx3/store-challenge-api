import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { getErrorMessage } from "../../utils/errorHandler";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { displayName, email, password } = request.body;

    try {
      const { message } = await this.createUserUseCase.execute({
        displayName,
        email,
        password,
      });

      return response.status(201).send({ message });
    } catch (error) {
      return response.status(400).json({ message: getErrorMessage(error) });
    }
  }
}
