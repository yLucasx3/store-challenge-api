import bycrpt from "bcrypt";
import { IPasswordProvider } from "./IPasswordProvider";

export class BcryptProvider implements IPasswordProvider {
  async hash(password: string, saltOrRounds: number) {
    return bycrpt.hash(password, saltOrRounds);
  }

  async compare(password: string, hashedPassword: string) {
    return bycrpt.compare(password, hashedPassword);
  }
}
