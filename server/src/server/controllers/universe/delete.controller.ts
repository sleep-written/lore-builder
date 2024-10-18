import { Controller, ControllerPath, Delete } from '@bleed-believer/espresso';

import { ServerError } from '@server/server.error.js';
import { API } from '@server/api.js';

import { dataSource } from '@/data-source.js';
import { Universe } from '@entities/universe.js';

@ControllerPath(':id')
export class DeleteController extends Controller {
    #api = new API(this.request);

    @Delete()
    async delete(): Promise<void> {
        const id = this.#api.id;
        await dataSource.transaction('SERIALIZABLE', async manager => {
            const universe = await manager.findOne(Universe, {
                relations: {
                    characters:{
                        eventDetails: true
                    }
                },
                where: { id }
            });

            if (!universe) {
                throw new ServerError(
                    `The universe do you want to delete doesn't exists.`,
                    404
                );
            }

            for (const character of universe?.characters ?? [])  {
                if (character.eventDetails) {
                    await manager.remove(character.eventDetails);
                }

                await manager.remove(character);
            }

            await manager.remove(universe)
        });

        this.response.end();
    }
}