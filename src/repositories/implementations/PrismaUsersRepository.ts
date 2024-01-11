import { User } from "../../entities/User";
import { prisma } from "../../providers/PrismaProvider";
import { IUsersRepository } from "../IUsersRepository";

export class PrismaUsersRepository implements IUsersRepository {
  constructor() {}

  async findByEmail(email: string): Promise<User | null> {
    return prisma.user.findUnique({ where: { email } });
  }

  async save(user: User): Promise<User> {
    const { name, email, password } = user;

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    return newUser;
  }
}
