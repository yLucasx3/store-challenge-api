import { GenericError } from "../../utils/genericError";

export class UserNotFoundError extends GenericError {
  constructor() {
    super("User not found.", 404);
    this.name = "UserNotFoundError";
  }
}
