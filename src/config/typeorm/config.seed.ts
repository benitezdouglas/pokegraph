import { ConnectionOptions } from 'typeorm';
import { join } from 'path';

import config from './config.orm';

const configuration: ConnectionOptions = {
    ...config,
    type: 'postgres',
    entities: [join(__dirname, '../../', 'modules', '**', '/*.entity.{ts,js}')],
    synchronize: false,
    migrations: [join(__dirname, '../../', 'db/seed', '/*.{ts,js}')],
    cli: {
        migrationsDir: 'src/db/seed',
    },
};

export = configuration;