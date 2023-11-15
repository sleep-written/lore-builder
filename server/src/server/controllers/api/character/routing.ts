import { ControllerRouting } from '@bleed-believer/espresso';

import { GetCharacterController } from './get-character.controller.js';
import { CreateController } from './create.controller.js';
import { GetController } from './get.controller.js';

@ControllerRouting({
    path: 'character',
    controllers: [
        GetCharacterController,
        CreateController,
        GetController,
    ]
})
export class CharacterRouting {}