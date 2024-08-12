import { Logger } from 'tslog';

export const logger = new Logger({
    minLevel: 1,
    prettyLogTemplate: `{{dateIsoStr}} - {{logLevelName}}\t→ `
});