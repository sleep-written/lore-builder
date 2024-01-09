import type { EntityManager } from 'typeorm';

import { UserTypeLoader } from './user-type.loader.js';

export const loaders: ((m: EntityManager) => Promise<void>)[] = [
    UserTypeLoader
];