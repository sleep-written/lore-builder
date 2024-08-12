import type { Executable } from '@bleed-believer/commander';
import type { SeederFn } from './seeder-fn.js';

import { dataSource } from '@/data-source.js';
import { Command } from '@bleed-believer/commander';
import { logger } from '@/logger.js';

import { genderSeeder } from './seeders/gender.seeder.js';
import { menuSeeder } from './seeders/menu.seeder.js';

@Command({
    name: 'seeder',
    path: 'seeder'
})
export class SeederCommand implements Executable {
    #seeders: SeederFn[] = [
        genderSeeder,
        menuSeeder,
    ];

    async start(): Promise<void> {
        logger.info('Initializing DB connection...');
        await dataSource.initialize();

        await dataSource.transaction('SERIALIZABLE', async manager => {
            for (const seeder of this.#seeders) {
                logger.info(`Executing "${seeder.name}" seeder...`);
                await seeder(manager);
            }
        });
        
        logger.info('Finalizing DB connection...');
        await dataSource.destroy();
    }
}