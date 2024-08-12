import type { EntityManager } from 'typeorm';

export type SeederFn = (manager: EntityManager) => Promise<void>;
