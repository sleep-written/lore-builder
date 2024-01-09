import { CommandRouting } from '@bleed-believer/commander';

import { ServerCommand } from '@server/command.js';
import { SeedsCommand } from './seeds/command.js';

@CommandRouting({
    commands: [
        ServerCommand,
        SeedsCommand,
    ]
})
export class AppRouting {}
