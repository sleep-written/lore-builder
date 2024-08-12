import { ControllerRouting } from '@bleed-believer/espresso';

import { CharacterRouting } from './character/routing.js';
import { MenuRouting } from './menu/routing.js';
import { GenderRouting } from './gender/routing.js';
import { UniverseRouting } from './universe/routing.js';

@ControllerRouting({
    path: 'api',
    routes: [
        GenderRouting,
        CharacterRouting,
        MenuRouting,
        UniverseRouting,
    ]
})
export class APIRouting {}