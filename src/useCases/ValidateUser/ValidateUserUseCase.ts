import { IUsersRepository } from "../../repositories/IUsersRepository";

export class ValidateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(displayName: string, email: string) {
    return this.usersRepository.validate(displayName, email);
  }
}
