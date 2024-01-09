import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";
import { User } from "../../entities/User";
import { UserAlreadyExistsError } from "../../helpers/UserErrors/AlreadyExistsError";
import { IPasswordProvider } from "../../providers/IPasswordProvider";

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private passwordProvider: IPasswordProvider
  ) {}

  async execute(user: ICreateUserRequestDTO) {
    const { name, email, password } = user;

    const existingUser = await this.usersRepository.findByEmail(email);

    if (existingUser) throw new UserAlreadyExistsError();

    const hashedPassword = await this.passwordProvider.hash(
      password as string,
      5
    );

    const newUser = new User({ name, email, password: hashedPassword });

    return this.usersRepository.save(newUser);
  }
}
