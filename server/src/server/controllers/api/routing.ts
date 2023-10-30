import { ControllerRouting } from '@bleed-believer/espresso';
import { MenuController } from './menu.controller.js';

@ControllerRouting({
    path: 'api',
    controllers: [
        MenuController,
    ]
})
export class APIRouting {}