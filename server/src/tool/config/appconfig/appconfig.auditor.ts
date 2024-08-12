import { Auditor } from 'audit-var';

export const appconfigAuditor = new Auditor({
    type: 'object',
    keys: {
        serverPort: { type: 'number', min: 0, max: 99999 },
        clientPath: { type: 'string', min: 1 },
    }
});
