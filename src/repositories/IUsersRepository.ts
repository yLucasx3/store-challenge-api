import { User } from "../entities/User";

interface IUsersRepository {
  findByEmail(email: string): Promise<User>;
  save(user: User): Promise<{ message: string }>;
  authenticate(email: string, password: string): Promise<User>;
  validate(displayName: string, email: string): Promise<boolean>;
}

export { IUsersRepository };
