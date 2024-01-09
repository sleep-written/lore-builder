import type { EntityManager } from 'typeorm';

export const loaders: ((m: EntityManager) => Promise<void>)[] = [
];