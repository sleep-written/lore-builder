import { Controller, ControllerPath, Get } from '@bleed-believer/espresso';
import { Event } from '@entities/event.entity.js';

@ControllerPath('')
export class GetController extends Controller {
    @Get(':id')
    async get(): Promise<void> {
        const id = parseInt(this.request.params.id);
        const data = await Event.findOne({
            where: { id },
            relations: {
                eventDetails: {
                    character: true
                }
            }
        });

        this.response.json(data);
    }
}