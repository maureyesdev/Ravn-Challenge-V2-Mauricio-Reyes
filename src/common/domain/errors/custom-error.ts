// TODO: Need to circle back to tis custom error class
export class CustomError extends Error {
  // constructor(message, code) {
  constructor(
    public readonly message: string,
    public readonly code: string,
  ) {
    super(message);
    this.code = code;
  }

  static Conflict(message: string): CustomError {
    return new CustomError(message, 'CONFLICT');
  }

  static NotFound(message: string): CustomError {
    return new CustomError(message, 'NOT_FOUND');
  }

  static BadRequest(message: string): CustomError {
    return new CustomError(message, 'BAD_REQUEST');
  }

  static Unauthorized(message: string): CustomError {
    return new CustomError(message, 'UNAUTHORIZED');
  }

  static InternalServerError(message: string): CustomError {
    return new CustomError(message, 'INTERNAL_SERVER_ERROR');
  }
}
