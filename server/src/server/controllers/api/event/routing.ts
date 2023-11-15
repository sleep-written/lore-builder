import { ControllerRouting } from '@bleed-believer/espresso';

import { SetController } from './set.controller.js';

@ControllerRouting({
    path: 'event',
    controllers: [
        SetController
    ]
})
export class EventRouting {}