import { Pokemon } from "modules/pokemon/models/pokemon.entity";
import {getRepository, MigrationInterface, QueryRunner} from "typeorm";
import { csvToJson } from "utils/csvjson.parser";

export class SeedPokemon1616127138738 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const pokemon = await csvToJson('pokemon.csv');
        await getRepository(Pokemon).save(pokemon);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM pokemon`);
    }
}
