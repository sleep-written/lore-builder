import type { EntityManager } from 'typeorm';
import { BulkInsert } from '../core/index.js';
import { Menu } from '@entities/menu.entity.js';

export async function menuLoader(manager: EntityManager): Promise<void> {
    const bulk = new BulkInsert(manager, Menu, 'id');
    await bulk.initialize();

    await bulk.save({
        icon: 'person',
        path: 'character',
        text: 'Personajes',
        visible: true
    });

    await bulk.save({
        icon: 'person',
        path: 'character/:hash',
        text: 'Personaje',
        visible: false
    });

    await bulk.clean();
}