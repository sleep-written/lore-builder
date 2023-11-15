import { ControllerRouting } from '@bleed-believer/espresso';

import { CharacterRouting } from './character/routing.js';
import { EventRouting } from './event/routing.js';

import { MenuController } from './menu.controller.js';

@ControllerRouting({
    path: 'api',
    routes: [
        CharacterRouting,
        EventRouting,
    ],
    controllers: [
        MenuController,
    ]
})
export class APIRouting {}