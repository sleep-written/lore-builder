import type { EntityManager } from 'typeorm';
import { BulkInsert } from '../core/index.js';
import { Menu } from '@entities/menu.entity.js';

export async function menuLoader(manager: EntityManager): Promise<void> {
    const bulk = new BulkInsert(manager, Menu, 'id');
    await bulk.initialize();

    await bulk.save({
        icon: 'person',
        path: 'character',
        text: 'Characters',
        visible: true
    });

    await bulk.save({
        icon: 'person',
        path: 'character/:hash',
        text: 'Character',
        visible: false
    });

    await bulk.clean();
}