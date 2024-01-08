import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";
import { User } from "../../entities/User";

export class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(user: ICreateUserRequestDTO) {
    const { displayName, email, password } = user;

    const newUser = new User({ displayName, email, password });

    return this.usersRepository.save(newUser);
  }
}
