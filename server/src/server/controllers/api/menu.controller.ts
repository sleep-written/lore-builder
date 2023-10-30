import { Controller, Get } from '@bleed-believer/espresso';
import { Menu } from '@entities/menu.entity.js';

export class MenuController extends Controller {
    @Get()
    async get(): Promise<void> {
        const data = await Menu.findBy({ visible: true });
        for (const item of data) {
            delete (item as any).id;
        }

        this.response.json(data);
    }
}