import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";
import { getErrorMessage } from "../../utils/errorHandler";

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
      return response.status(401).json({
        message: getErrorMessage(error),
      });
    }
  }
}
