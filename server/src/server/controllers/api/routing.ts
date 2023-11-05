import { ControllerRouting } from '@bleed-believer/espresso';
import { MenuController } from './menu.controller.js';
import { CharacterRouting } from './character/routing.js';

@ControllerRouting({
    path: 'api',
    routes: [
        CharacterRouting,
    ],
    controllers: [
        MenuController,
    ]
})
export class APIRouting {}