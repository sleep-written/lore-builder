import { ControllerRouting } from '@bleed-believer/espresso';

import { GetController } from './get.controller.js';
import { SetController } from './set.controller.js';

@ControllerRouting({
    path: 'event',
    controllers: [
        GetController,
        SetController
    ]
})
export class EventRouting {}