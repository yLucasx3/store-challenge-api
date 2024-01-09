import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";
import { handleError } from "../../utils/errorHandler";
import { GenericError } from "../../utils/genericError";

export class AuthenticateUserController {
  constructor(private authenticateUserUseCase: AuthenticateUserUseCase) {}

  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    try {
      const authenticatedUser = await this.authenticateUserUseCase.execute({
        email,
        password,
      });

      return response.status(200).send({ user: authenticatedUser });
    } catch (error) {
      return handleError(response, error as GenericError);
    }
  }
}
