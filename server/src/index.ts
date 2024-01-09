import { Commander } from '@bleed-believer/commander';

import { AppRouting } from './app.routing.js';
import { logger } from './logger.js';

try {
    const app = new Commander(AppRouting, { lowercase: true });
    await app.execute();
} catch (err: any) {
    logger.fatal(err?.message ?? 'Error not specified');
}