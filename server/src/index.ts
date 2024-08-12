import { Commander } from '@bleed-believer/commander';

import { AppRouting } from './app.routing.js';
import { logger } from './logger.js';

try {
    const app = new Commander(AppRouting, { lowercase: true });
    await app.execute();
    logger.info('Execution finished.');
} catch (err: any) {
    logger.error(err?.message ?? 'Error not identified.');
}