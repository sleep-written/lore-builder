import { Controller, ControllerPath, Get } from '@bleed-believer/espresso';
import { Character } from '@entities/character.entity.js';

@ControllerPath('')
export class GetController extends Controller {
    @Get()
    async get(): Promise<void> {
        const data = await Character.find({
            relations: {
                tag: true
            },
            select: {
                name: true,
                tag: {
                    cod: true,
                    description: true
                }
            }
        });

        this.response.json(data);
    }
}