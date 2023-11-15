import { Controller, ControllerPath, Post } from '@bleed-believer/espresso';
import { Auditor } from 'audit-var';

import { ServerError } from '@server/core/server.error.js';
import { dataSource } from '@/data-source.js';

import { Character } from '@entities/character.entity.js';
import { Tag } from '@entities/tag.entity.js';

@ControllerPath('')
export class CreateController extends Controller {
    #auditor = new Auditor({
        type: 'object',
        keys: {
            tag:            { type: 'string', min: 1, max:  128, trim: true },
            name:           { type: 'string', min: 3, max:  256, trim: true },
            description:    { type: 'string', min: 3, max: 1024, trim: true },
        }
    });

    @Post()
    async start(): Promise<void> {
        const body = this.#auditor.audit(this.request.body);
        const tagCount = await Tag.countBy({ cod: body.tag });
        if (tagCount) {
            throw new ServerError(409, `The tag "${body.tag}" is already taken.`);
        }
        
        body.name = body.name.replace(/\s+/gi, ' ');
        const charCount = await Character.countBy({ name: body.name });
        if (charCount) {
            throw new ServerError(409, `The character name "${body.tag}" is already taken.`);
        }

        await dataSource.transaction('SERIALIZABLE', async manager => {
            const tag = new Tag();
            tag.cod = body.tag;
            tag.description = body.description;
            await manager.save(tag);
    
            const char = new Character();
            char.name = body.name;
            char.tag = tag;
            await manager.save(char);
        });

        this.response.end();
    }
}