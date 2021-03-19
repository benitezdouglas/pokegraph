import { join } from 'path';

import * as csv from "csvtojson";

const csvFilePath = join(__dirname, '../../', 'data', 'csv');

export const csvToJson = async (file) => {
    return csv().fromFile(`${csvFilePath}\\${file}`);
}