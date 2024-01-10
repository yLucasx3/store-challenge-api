import { Response } from "express";
import { GenericError } from "./genericError";

const handleError = (response: Response, error: GenericError) => {
  if (error instanceof GenericError) {
    return response.status(error.statusCode).json({ message: error.message });
  }

  console.error(error);
  return response.status(500).send({ message: "Internal server error" });
};

export { handleError };
