import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IAuthenticateUserDTO } from "./AuthenticateUserDTO";

export class AuthenticateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ email, password }: IAuthenticateUserDTO) {
    return this.usersRepository.authenticate(email, password);
  }
}
