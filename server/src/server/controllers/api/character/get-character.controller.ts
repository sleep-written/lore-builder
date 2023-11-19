import { Controller, ControllerPath, Get } from '@bleed-believer/espresso';

import { ServerError } from '@server/core/server.error.js';
import { Character } from '@entities/character.entity.js';
import { Event } from '@entities/event.entity.js';
import { EventDetail } from '@entities/event-detail.entity.js';
import { Not } from 'typeorm';

@ControllerPath(':tag')
export class GetCharacterController extends Controller {
    get tag(): string {
        return this.request.params.tag.replace(/[^0-9a-z_]/gi, '💀');
    }
    
    @Get()
    async get(): Promise<void> {
        // Search character
        const character = await Character.findOne({
            where:      { tag: { cod: this.tag } },
            relations:  { tag: true }
        });
        if (!character) {
            throw new ServerError(404, `The character with tag "${this.tag}" doesn't exists`);
        }

        // Search events
        const events = await Event.findBy({
            eventDetails: {
                character: { id: character.id }
            }
        });

        // Clone character
        const cleanedCharacter = structuredClone(character);
        for (const event of events) {
            // Get all details
            event.eventDetails = await EventDetail.find({
                where: { character: { id: Not(character.id) } },
                relations: {
                    character: { tag: true }
                }
            });

            // Get the detail of the main character
            if (event.eventDetails) {
                const detail = await EventDetail.findOneByOrFail({
                    character: { id: character.id }
                });

                detail.character = cleanedCharacter;
                event.eventDetails.unshift(detail);
            }
        }

        // Send response
        this.response.json({
            character,
            events
        });
    }
}