import { Appconfig } from '@/tool/config/index.js';

await new Appconfig().save({
    serverPort: 8080,
    clientPath: '../client/dist/client/browser'
});