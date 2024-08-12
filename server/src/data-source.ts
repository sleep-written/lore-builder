import { pathResolve } from '@bleed-believer/path-alias';
import { join } from 'path';
import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
    type: 'sqlite',
    database: join(process.cwd(), './app.db'),
    entities: [
        pathResolve('./entities/*.ts')
    ],
    migrations: [
        pathResolve('./migrations/*.ts')
    ]
});