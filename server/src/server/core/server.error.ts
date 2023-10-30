export class ServerError extends Error {
    #status: number;
    get status(): number {
        return this.#status;
    }

    constructor(status: number, message: string) {
        super(message);
        this.#status = status;
    }
}