import { resolve } from 'path';

export function srcPathResolve(...pathParts: string[]): string {
    const base = process.env['USE_SRC_DIR']?.toLowerCase() === 'true'
    ?   'src'
    :   'dist';

    const out = resolve(base, ...pathParts);
    return out;
}