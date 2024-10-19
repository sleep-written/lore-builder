import { pathResolve } from '@bleed-believer/path-alias/utils';
import { DataSource } from 'typeorm';
import { join } from 'path';

const url = import.meta.url;
export const dataSource = new DataSource({
    type: 'sqlite',
    database: join(process.cwd(), './app.db'),
    entities: pathResolve('./entities/*.ts', {
        url,
        multi: true
    }),
    migrations: pathResolve('./migrations/*.ts', {
        url,
        multi: true
    }),
});