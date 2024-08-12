import { ControllerRouting } from '@bleed-believer/espresso';

import { GetController } from './get.controller.js';

@ControllerRouting({
    path: 'gender',
    controllers: [
        GetController,
    ]
})
export class GenderRouting {}