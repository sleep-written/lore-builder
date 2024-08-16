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

    get paginator(): { take: number; skip: number; } | null {
        const rawTake = typeof this.#request.query.take === 'string'
            ?   parseInt(this.#request.query.take)
            :   undefined;

        const skip = typeof this.#request.query.skip === 'string'
            ?   parseInt(this.#request.query.skip)
            :   0;

        if (!isNaN(skip)) {
            const take = rawTake && !isNaN(rawTake)
                ?   rawTake
                :   0;

            return { take, skip };

        } else {
            return null;

        }
    }

    constructor(request: Request) {
        this.#request = request;
    }
}