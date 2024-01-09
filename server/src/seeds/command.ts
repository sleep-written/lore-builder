import { Command, type Executable } from '@bleed-believer/commander';

import { dataSource } from '@/data-source.js';
import { loaders } from './loaders/index.js';
import { logger } from '@/logger.js';

@Command({
    name: 'seeds',
    path: 'seeds'
})
export class SeedsCommand implements Executable {
    async start(): Promise<void> {
        logger.info('Connecting to DB...');
        await dataSource.initialize();

        await dataSource.transaction(
            'SERIALIZABLE',
            async manager => {
                for (const loader of loaders) {
                    logger.info(`Executing "${loader.name}"...`);
                    await loader(manager);
                }
            }
        );

        logger.info('Disconnecting from DB...');
        await dataSource.destroy();
    }
}
