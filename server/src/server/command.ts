import express, { type Express, type Request, type Response } from 'express';
import { Command, type Executable } from '@bleed-believer/commander';
import { Espresso } from '@bleed-believer/espresso';

import { ControllersRouting } from './controllers/routing.js';
import { ServerError } from './core/server.error.js';
import { dataSource } from '@/data-source.js';
import { logger } from '@/logger.js';

@Command({
    name: 'server',
    path: 'server'
})
export class ServerCommand implements Executable {
    #app!: Express;
    get app(): Express {
        return this.#app;
    }

    async start(): Promise<void> {
        await dataSource.initialize();

        this.#app = express();
        this.#app.use(express.static('../client/dist/client'));
        this.#app.use(express.json());

        const espr = new Espresso(this.#app, { lowercase: true, verbose: true });
        espr.onError(this.onError);
        espr.inject(ControllersRouting);

        this.#app.listen(8080, '0.0.0.0', this.listen);
    }

    onError(err: Error, _: Request, res: Response): void {
        res.statusCode = err instanceof ServerError
        ?   err.status
        :   500;

        res.json({
            type: 'server error',
            message: err.message
        });
    }

    listen(): void {
        logger.info('Web Server is ready!');
    }
}