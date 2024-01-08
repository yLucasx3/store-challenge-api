import { User } from "../../entities/User";
import { prisma } from "../../providers/PrismaProvider";
import { IUsersRepository } from "../IUsersRepository";
import bcrypt from "bcrypt";

export class PrismaUsersRepository implements IUsersRepository {
  async findByEmail(email: string): Promise<User> {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw new Error("User not found!");
    }

    return user;
  }

  async save(user: User): Promise<{ message: string }> {
    const { displayName, email, password } = user;

    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) throw new Error("User already exists!");

    const hashedPassword = await bcrypt.hash(password as string, 5);

    const newUser = await prisma.user.create({
      data: {
        displayName,
        email,
        password: hashedPassword,
      },
    });

    if (!newUser) {
      return { message: "Error creating user!" };
    }

    return { message: "User created successfully." };
  }

  async authenticate(email: string, password: string): Promise<User> {
    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (!existingUser) throw new Error("User not found!");

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password as string
    );

    if (!isPasswordCorrect) throw new Error("Incorrect password!");

    return existingUser;
  }

  async validate(displayName: string, email: string): Promise<boolean> {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (!existingUser) {
      await prisma.user.create({
        data: {
          displayName,
          email,
        },
      });

      return true;
    }

    return true;
  }
}
