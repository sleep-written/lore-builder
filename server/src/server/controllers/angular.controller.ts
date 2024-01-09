import { Controller, ControllerPath, Get } from '@bleed-believer/espresso';
import { ServerError } from '@server/core/index.js';

@ControllerPath('*')
export class AngularController extends Controller {
    @Get()
    async get(): Promise<void> {
        if (
            (this.request.method !== 'GET') ||
            (this.request.headers['content-type']?.match(/json/gi))
        ) {
            throw new ServerError(404, 'El recurso solicitado no existe.');
        }

        // Return the frontend
        this.response.sendFile('/', { root: '../client/dist/client' });
    }
}