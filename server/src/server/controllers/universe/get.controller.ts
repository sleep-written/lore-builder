import { Controller, ControllerPath, Get } from '@bleed-believer/espresso';

import { ServerError } from '@server/server.error.js';
import { Character } from '@entities/character.js';
import { Universe } from '@entities/universe.js';
import { API } from '@server/api.js';

@ControllerPath('')
export class GetController extends Controller {
    #api = new API(this.request);

    @Get(':id/character')
    async getCharacters(): Promise<void> {
        const id = this.#api.id;
        const characters = await Character.find({
            relations: {
                gender: true
            },
            where: {
                universe: { id }
            }
        });

        this.response.json(characters);
    }

    @Get(':id')
    async getUniverse(): Promise<void> {
        const id = this.#api.id;
        const universe = await Universe.findOneBy({ id });
        if (!universe) {
            throw new ServerError('El universo indicado no existe.', 404);
        } else {
            this.response.json(universe);
        }
    }

    @Get()
    async get(): Promise<void> {
        const { take, skip } = this.#api.paginator ?? {};
        const [ data, total ] = await Universe.findAndCount({ take, skip });
        this.response.json({ data, total });
    }
}