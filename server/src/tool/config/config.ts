import { readFile, writeFile } from 'fs/promises';
import { stringify, parse } from 'yaml';
import { join } from 'path';

interface AuditorLike {
    audit(input: any): any;
}

export abstract class Config<A extends AuditorLike> {
    #auditor: A;
    #path: string;
    get path(): string {
        return this.#path;
    }

    constructor(path: string, auditor: A) {
        this.#auditor = auditor;
        this.#path = join(
            process.cwd(),
            path
        );
    }

    async load(): Promise<ReturnType<A['audit']>> {
        const text = await readFile(this.#path, 'utf-8');
        const yaml = parse(text);
        const resp = this.#auditor.audit(yaml);
        return resp;
    }

    async save(data: ReturnType<A['audit']>): Promise<void> {
        const check = this.#auditor.audit(data);
        const text = stringify(check);
        return writeFile(this.#path, text, 'utf-8');
    }
}