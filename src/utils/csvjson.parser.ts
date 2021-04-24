import { join } from 'path';

import { mapValues } from "lodash";

import * as csv from "csvtojson";

export const csvToJson = async (file) => {
    const csvFilePath = join(__dirname, '../../', 'data', 'csv', file);
    const data = await csv().fromFile(`${csvFilePath}`);

    return data.map(obj => mapValues(obj, property => property === '' ? null : property));
}