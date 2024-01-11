import { GenericError } from "../../utils/genericError";

export class UserAlreadyExistsError extends GenericError {
  constructor() {
    super("User with this email already exists.", 400);
    this.customField = "email";
    this.name = "UserAlreadyExists";
  }
}
