import { join } from 'path';

import * as csv from "csvtojson";

const csvFilePath = join(__dirname, '../../', 'data', 'csv');

export const csvToJson = async (file) => {
    const jsonArray = await csv().fromFile(`${csvFilePath}\\${file}`);

    console.log(jsonArray);
}