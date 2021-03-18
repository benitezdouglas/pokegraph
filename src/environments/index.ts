import * as dotenv from 'dotenv';
dotenv.config();

const NODE_ENV: string = process.env.NODE_ENV || 'development';

// graphql
const GRAPHQL_PATH: string = process.env.GRAPHQL_PATH || '/graphql';

// postgres
const PGHOST: string = process.env.PGHOST || 'localhost';
const PGPORT: number = +process.env.PGPORT || 5432;
const PGDATABASE: string = process.env.PGDATABASE;
const PGUSER: string = process.env.PGUSER;
const PGPASSWORD: string = process.env.PGPASSWORD;

export {
    NODE_ENV,
    PGHOST,
    PGPORT,
    PGDATABASE,
    PGUSER,
    PGPASSWORD,
    GRAPHQL_PATH,
};