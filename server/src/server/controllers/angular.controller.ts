import { Controller, ControllerPath, Get } from '@bleed-believer/espresso';
import { Appconfig } from '@tool/config/index.js';


@ControllerPath('*')
export class AngularController extends Controller {
    private static _path?: string;

    @Get()
    async get(): Promise<void> {
        if (typeof AngularController._path !== 'string') {
            const { clientPath } = await new Appconfig().load();
            AngularController._path = clientPath;
        }

        this.response.sendFile('/', {
            root: AngularController._path
        });
    }
}