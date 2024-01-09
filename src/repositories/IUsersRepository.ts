import { User } from "../entities/User";

interface IUsersRepository {
  findByEmail(email: string): Promise<User | null>;
  save(user: Omit<User, "id">): Promise<User>;
}

export { IUsersRepository };
