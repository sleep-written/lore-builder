import { Controller, ControllerPath, Get } from '@bleed-believer/espresso';
import { Gender } from '@entities/gender.js';

@ControllerPath('')
export class GetController extends Controller {
    @Get()
    async get(): Promise<void> {
        const data = await Gender.find();
        this.response.json(data);
    }
}