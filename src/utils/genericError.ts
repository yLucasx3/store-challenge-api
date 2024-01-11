export class GenericError extends Error {
  public statusCode: number;
  public customField?: string;

  constructor(message: string, statusCode: number, customField?: string) {
    super(message);
    this.statusCode = statusCode;
    this.customField = customField;
  }
}
