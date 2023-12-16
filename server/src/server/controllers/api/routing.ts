import { ControllerRouting } from '@bleed-believer/espresso';
import { MenuController } from './menu.controller.js';

@ControllerRouting({
    path: 'api',
    routes: [
    ],
    controllers: [
        MenuController,
    ]
})
export class APIRouting {}