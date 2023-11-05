import { ControllerRouting } from '@bleed-believer/espresso';

import { CreateController } from './create.controller.js';
import { GetController } from './get.controller.js';

@ControllerRouting({
    path: 'character',
    controllers: [
        CreateController,
        GetController,
    ]
})
export class CharacterRouting {}