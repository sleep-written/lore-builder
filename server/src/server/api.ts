import type { Request } from 'express';
import { ServerError } from './server.error.js';

export class API {
    #request: Request;

    get id(): number {
        const rawId = this.#request.params.id;
        if (typeof rawId === 'string') {
            const id = parseInt(rawId);
            if (!isNaN(id)) {
                return id;
            }
        }

        throw new ServerError(`El id indicado "${rawId}" es inválido`, 400);
    }

    constructor(request: Request) {
        this.#request = request;
    }
}