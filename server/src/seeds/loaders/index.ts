import type { EntityManager } from 'typeorm';

import { menuLoader } from './menu.js';

export const loaders: ((m: EntityManager) => Promise<void>)[] = [
    menuLoader,
];