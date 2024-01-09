import { GenericError } from "../../utils/genericError";

export class UserAlreadyExistsError extends GenericError {
  constructor() {
    super("User already exists!", 400);
    this.name = "UserAlreadyExists";
  }
}
