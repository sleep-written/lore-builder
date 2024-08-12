export class ServerError extends Error {
    #statusCode: number;
    get statusCode(): number {
        return this.#statusCode;
    }

    constructor(message: string, statusCode?: number) {
        super(message);
        this.#statusCode = statusCode ?? 500;
    }
}
