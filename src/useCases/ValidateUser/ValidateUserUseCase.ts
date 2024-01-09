import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ValidateUserDTO } from "./ValidateUserDTO";

export class ValidateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(user: ValidateUserDTO) {
    const { name, email, image, providerAccount } = user;

    const existingUser = await this.usersRepository.findByEmail(email);

    if (!existingUser) {
      await this.usersRepository.save({
        name,
        email,
        image,
        providerAccount,
      });
    }

    return true;
  }
}
