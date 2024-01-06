import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";
import { User } from "../../entities/User";

export class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(user: ICreateUserRequestDTO) {
    const { username, email, password } = user;

    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error("User already exists.");
    }

    const newUser = new User({ username, email, password });

    return this.usersRepository.save(newUser);
  }
}
