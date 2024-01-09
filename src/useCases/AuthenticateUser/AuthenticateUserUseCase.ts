import { UserAlreadyExistsError } from "../../helpers/UserErrors/AlreadyExistsError";
import { IncorrectPasswordError } from "../../helpers/UserErrors/IncorrectPasswordError";
import { UserNotFoundError } from "../../helpers/UserErrors/NotFoundError";
import { BcryptProvider } from "../../providers/BcryptProvider";
import { IPasswordProvider } from "../../providers/IPasswordProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IAuthenticateUserDTO } from "./AuthenticateUserDTO";

export class AuthenticateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private passwordProvider: IPasswordProvider
  ) {}

  async execute({ email, password }: IAuthenticateUserDTO) {
    const existingUser = await this.usersRepository.findByEmail(email);

    if (!existingUser) throw new UserNotFoundError();

    const isPasswordCorrect = await this.passwordProvider.compare(
      password,
      existingUser.password as string
    );

    if (!isPasswordCorrect) throw new IncorrectPasswordError();

    return existingUser;
  }
}
