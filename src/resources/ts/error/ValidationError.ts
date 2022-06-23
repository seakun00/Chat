export class ValidationError extends Error {
    constructor(
        public readonly message: string,
        public readonly userMessages: Record<string, string>,
    ) {
        super(message);
        this.name = 'HttpError';
        Object.setPrototypeOf(this, ValidationError.prototype);
    }
}
