import { ControllerRouting } from '@bleed-believer/espresso';

import { APIRouting } from './api.routing.js';

import { AngularController } from './angular.controller.js';

@ControllerRouting({
    routes: [
        APIRouting,
    ],
    controllers: [
        AngularController,
    ]
})
export class AppRouting {}