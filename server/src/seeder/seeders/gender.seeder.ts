import type { SeederFn } from '@seeder/seeder-fn.js';

import { EntityUpdater } from '@seeder/entity-updater.js';
import { Gender } from '@entities/gender.js';

export const genderSeeder: SeederFn = async manager => {
    const updater = new EntityUpdater(manager, Gender, 'name');
    await updater.initialize();

    updater.set({ name: 'Male' });
    updater.set({ name: 'Female' });
    updater.set({ name: 'Undefined' });
    
    await updater.updateDB();
}