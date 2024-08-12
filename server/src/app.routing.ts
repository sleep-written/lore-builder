import { CommandRouting } from '@bleed-believer/commander';

import { SeederCommand } from './seeder/command.js';
import { ServerCommand } from './server/command.js';

@CommandRouting({
    commands: [
        SeederCommand,
        ServerCommand,
    ]
})
export class AppRouting {}