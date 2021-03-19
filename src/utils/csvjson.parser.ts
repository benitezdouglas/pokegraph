import { join } from 'path';

import * as csv from "csvtojson";

export const csvToJson = async (file) => {
    const csvFilePath = join(__dirname, '../../', 'data', 'csv', file);
    return csv().fromFile(`${csvFilePath}`);
}