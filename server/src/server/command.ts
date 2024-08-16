import type { Request, Response } from 'express';
import type { Executable } from '@bleed-believer/commander';

import { Espresso } from '@bleed-believer/espresso';
import { Command } from '@bleed-believer/commander';
import express from 'express';

import { AppRouting } from './controllers/app.routing.js';
import { Appconfig } from '@tool/config/index.js';
import { logger } from '@/logger.js';
import { dataSource } from '@/data-source.js';
import { ServerError } from './server.error.js';

@Command({
    name: 'server',
    path: 'server'
})
export class ServerCommand implements Executable {
    async #deployServer() {
        const appconfig = await new Appconfig().load();
        const app = express();
        app.use(express.urlencoded({ extended: true }));
        app.use(express.static(appconfig.clientPath));
        app.use(express.json({ strict: true }));
        
        const esp = new Espresso(app, { lowercase: true, verbose: true });
        esp.onError(this.#onError.bind(this))
        esp.inject(AppRouting);

        return new Promise<void>(resolve => {
            const server = app.listen(appconfig.serverPort, () => {
                logger.info('Servidor listo!');

                let requestClose = false;
                server.on('close', resolve);
                process.on('SIGINT', () => {
                    if (!requestClose) {
                        requestClose = true;
                        console.log();
                        logger.info('Cerrando servidor...');
                        server.close();
                    }
                });
            });
        });
    }

    #onError(err: any, _: Request, res: Response): void {
        const message = err?.message ?? 'Error no identificado';
        logger.error(message);

        res.statusCode = err instanceof ServerError
            ?   err.statusCode
            :   500;

        res.contentType('html');
        res.end(`<!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Document</title>
                </head>
                <body>
                    <h2>Error ${res.statusCode}</h2>
                    <p>${message}</p>
                </body>
            </html>`
        );
    }

    async start(): Promise<void> {
        logger.info('Levantando conexión a DB...');
        await dataSource.initialize();
        
        logger.info('Levantando servidor...');
        await this.#deployServer();
        
        logger.info('Cerrando conexión a DB...');
        await dataSource.destroy();
    }
}