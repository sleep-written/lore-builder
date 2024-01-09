import type { EntityManager } from 'typeorm';

import { BulkInsert } from '../core/index.js';
import { UserType } from '@entities/user-type.entity.js';

export async function UserTypeLoader(m: EntityManager): Promise<void> {
    const bulk = new BulkInsert(m, UserType, 'id');
    await bulk.initialize();

    await bulk.save({
        code: 'SYSTEM',
        description: 'Root user'
    });

    await bulk.clean();
}