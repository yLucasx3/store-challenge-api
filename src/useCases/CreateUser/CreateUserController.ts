import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { handleError } from "../../utils/errorHandler";
import { GenericError } from "../../utils/genericError";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    try {
      const user = await this.createUserUseCase.execute({
        name,
        email,
        password,
      });

      return response.status(201).send({ user });
    } catch (error) {
      return handleError(response, error as GenericError);
    }
  }
}
