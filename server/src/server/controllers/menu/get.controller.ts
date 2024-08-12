import { dataSource } from '@/data-source.js';
import { Controller, ControllerPath, Get } from '@bleed-believer/espresso';
import { Menu } from '@entities/menu.js';

@ControllerPath('')
export class GetController extends Controller {
    @Get()
    async get(): Promise<void> {
        const menus = await Menu.findTree({ visible: true });
        this.response.json(menus);
    }
}