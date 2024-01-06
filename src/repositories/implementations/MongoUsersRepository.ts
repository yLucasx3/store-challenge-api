import { IUsersRepository } from "../IUsersRepository";
import { User } from "../../entities/User";
import { Collection } from "mongodb";
import { MongoProvider } from "../../providers/MongoProvider";

export class MongoUsersRepository implements IUsersRepository {
  private collection: Collection<User>;

  constructor() {
    const database = MongoProvider.getDatabase();
    this.collection = database.collection<User>("users");
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.collection.findOne({ email });

    if (!user) throw new Error("User not found!");

    return user;
  }

  async save(user: User): Promise<{ message: string }> {
    const result = await this.collection.insertOne(user);

    if (!result.acknowledged) return { message: "Error on creating user." };

    return { message: "User created." };
  }
}
