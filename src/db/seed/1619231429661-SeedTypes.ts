import { Types } from "modules/types/models/type.entity";
import {getRepository, MigrationInterface, QueryRunner} from "typeorm";
import { csvToJson } from "utils/csvjson.parser";

export class SeedTypes1619231429661 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const types = await csvToJson('types.csv');
        console.log(types);
        await getRepository(Types).save(types);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM types`);
    }

}
