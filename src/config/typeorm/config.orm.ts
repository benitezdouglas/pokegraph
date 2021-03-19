import {
    NODE_ENV,
    PGHOST,
    PGPORT,
    PGDATABASE,
    PGUSER,
    PGPASSWORD,
} from '@env';

const orm = {
    development: {
        host: PGHOST || 'localhost',
        port: PGPORT || 5432,
        database: PGDATABASE || 'postgres',
        username: PGUSER || 'postgres',
        password: PGPASSWORD || '',
    },
    test: {
        host: PGHOST || 'localhost',
        port: PGPORT || 5432,
        database: PGDATABASE || 'postgres',
        username: PGUSER || 'postgres',
        password: PGPASSWORD || '',
        keepConnectionAlive: true,
        logging: false,
    },
    production: {
        host: PGHOST,
        port: PGPORT,
        database: PGDATABASE,
        username: PGUSER,
        password: PGPASSWORD,
    },
};

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export default orm[NODE_ENV!];