import { dataSource } from '@/data-source.js';
import { Controller, ControllerPath, Post } from '@bleed-believer/espresso';
import { Character } from '@entities/character.entity.js';
import { EventDetail } from '@entities/event-detail.entity.js';
import { Event } from '@entities/event.entity.js';
import { Auditor } from 'audit-var';

@ControllerPath('')
export class SetController extends Controller {
    @Post()
    async create(): Promise<void> {
        const auditor = new Auditor({
            type: 'object',
            keys: {
                tag:            { type: 'string', min: 1 },
                title:          { type: 'string', min: 3 },
                date:           { type: 'date',   fromJSON: true },
                description:    { type: 'string', min: 3 },
                details:        { type: 'string', min: 3 },
            }
        });

        const body = auditor.audit(this.request.body);
        await dataSource.transaction('SERIALIZABLE', async manager => {
            const event = new Event();
            event.date = body.date;
            event.title = body.title;
            event.description = body.description;
            await manager.save(event);
    
            const eventDetail = new EventDetail();
            eventDetail.event = event;
            eventDetail.description = body.details;
            eventDetail.character = await manager.findOneByOrFail(Character, {
                tag: { cod: body.tag }
            });
            await manager.save(eventDetail);
        });

        this.response.end();
    }
}