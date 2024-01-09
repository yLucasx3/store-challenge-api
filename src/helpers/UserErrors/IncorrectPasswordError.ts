import { GenericError } from "../../utils/genericError";

export class IncorrectPasswordError extends GenericError {
  constructor() {
    super("Incorrect password.", 400);
    this.name = "IncorrectPasswordError";
  }
}
