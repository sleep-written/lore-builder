import { ControllerRouting } from '@bleed-believer/espresso';
import { GetController } from './get.controller.js';

@ControllerRouting({
    path: 'character',
    controllers: [
        GetController,
    ]
})
export class CharacterRouting {}