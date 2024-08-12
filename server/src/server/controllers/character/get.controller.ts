import { Controller, ControllerPath, Get } from '@bleed-believer/espresso';
import { Not } from 'typeorm';

import { EventDetail } from '@entities/event-detail.js';
import { Event } from '@entities/event.js';
import { API } from '@server/api.js';
import { Character } from '@entities/character.js';
import { ServerError } from '@server/server.error.js';

@ControllerPath('')
export class GetController extends Controller {
    #api = new API(this.request);

    @Get(':id/event')
    async getCharacterEvents(): Promise<void> {
        const id = this.#api.id;
        const events = await Event.findBy({
            details: {
                character: { id }
            }
        });

        for (const event of events) {
            const mainDetails = await EventDetail.find({
                relations: {
                    character: true
                },
                where: {
                    event: { id: event.id },
                    character: { id }
                }
            });

            const otherDetails = await EventDetail.find({
                relations: {
                    character: true
                },
                where: {
                    event: { id: event.id },
                    character: { id: Not(id) }
                }
            });

            event.details = [
                ...mainDetails,
                ...otherDetails,
            ];
        }
    }

    @Get(':id')
    async getCharacter(): Promise<void> {
        const id = this.#api.id;
        const character = await Character.findOneBy({ id });
        if (!character) {
            throw new ServerError('El personaje solicitado no existe.', 404);
        } else {
            this.response.json(character);
        }
    }

    @Get()
    async get(): Promise<void> {
        const data = await Character.find({
            relations: {
                gender: true
            }
        });

        this.response.json(data);
    }
}