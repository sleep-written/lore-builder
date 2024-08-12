import { appconfigAuditor } from './appconfig.auditor.js';
import { Config } from '../config.js';
import { resolve } from 'path';

export class Appconfig extends Config<typeof appconfigAuditor> {
    constructor(path?: string) {
        super(
            path ?? './appconfig.yml',
            appconfigAuditor
        );
    }

    override async load() {
        const data = await super.load();
        const cwd = process.cwd();
        data.clientPath = resolve(cwd, data.clientPath);
        return data;
    }
}