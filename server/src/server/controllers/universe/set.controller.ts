import { Controller, ControllerPath, Post } from '@bleed-believer/espresso';
import { Auditor } from 'audit-var';

import { ServerError } from '@server/server.error.js';
import { Universe } from '@entities/universe.js';

@ControllerPath('')
export class SetController extends Controller {
    #auditor = new Auditor({
        type: 'object',
        keys: {
            id:             { type: 'number', min: 1, optional: true },
            name:           { type: 'string', min: 3, max: 128,  trim: true },
            description:    { type: 'string', min: 3, max: 1024, trim: true }
        }
    })

    @Post()
    async set(): Promise<void> {
        const body = this.#auditor.audit(this.request.body);
        const data = typeof body.id === 'number'
            ?   await Universe.findOneBy({ id: body.id })
            :   new Universe();

        if (!data) {
            throw new ServerError(
                `The universe requested doesn't exists.`,
                404
            );
        }

        data.name = body.name;
        data.description = body.description;

        await data.save();
        this.response.json(data);
    }
}