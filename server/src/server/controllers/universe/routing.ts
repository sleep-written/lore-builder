import { ControllerRouting } from '@bleed-believer/espresso'

import { GetController } from './get.controller.js';

@ControllerRouting({
    path: 'universe',
    controllers: [
        GetController,
    ]
})
export class UniverseRouting {}