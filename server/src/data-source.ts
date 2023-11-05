import { DataSource } from 'typeorm';
import { resolve } from 'path';

import { srcPathResolve } from '@tool/other/src-path-resolve.js';

export const dataSource = new DataSource({
    type:       'sqlite',
    database:   resolve('./database.sqlite'),
    entities:   [ srcPathResolve('./entities/*.entity.ts') ],
    migrations: [ srcPathResolve('./migrations/*.ts') ],
});