export class CorePlatformError extends Error {
  public constructor(message: string) {
    super(message);
    this.name = 'CorePlatformError';
  }
}

export class FailClosedError extends CorePlatformError {
  public constructor(message: string) {
    super(message);
    this.name = 'FailClosedError';
  }
}

export class BoundaryViolationError extends CorePlatformError {
  public constructor(message: string) {
    super(message);
    this.name = 'BoundaryViolationError';
  }
}
