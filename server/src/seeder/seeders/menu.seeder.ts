import type { SeederFn } from '@seeder/seeder-fn.js';

import { EntityUpdater } from '@seeder/entity-updater.js';
import { Menu } from '@entities/menu.js';

export const menuSeeder: SeederFn = async manager => {
    const updater = new EntityUpdater(manager, Menu, 'name');
    await updater.initialize();

    updater.set({
        name: 'Universes',
        icon: 'fa-solid fa-infinity',
        path: '/universe',
        logged: true,
        visible: true
    });

    updater.set({
        name: 'Universe data',
        path: '/universe/:id',
        logged: true,
        visible: false
    });

    updater.set({
        name: 'Characters',
        icon: 'fa-solid fa-user-pen',
        path: '/character',
        logged: true,
        visible: true
    });

    updater.set({
        name: 'Character data',
        path: '/character/:id',
        logged: true,
        visible: false
    });

    await updater.updateDB();
};