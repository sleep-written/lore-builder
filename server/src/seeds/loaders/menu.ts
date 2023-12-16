import type { EntityManager } from 'typeorm';

import { BulkInsert } from '../core/index.js';
import { Menu } from '@entities/menu.entity.js';

export async function menuLoader(manager: EntityManager): Promise<void> {
    const bulk = new BulkInsert(manager, Menu, 'id');
    await bulk.initialize();

    await bulk.save({
        icon: 'fa-solid fa-brain',
        path: '/stories',
        text: 'Stories',
        visible: true
    });

    await bulk.clean();
}