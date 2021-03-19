import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePokemon1616126142145 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "pokemon",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isUnique: true,
                        isNullable: false,
                    },
                    {
                        name: 'identifier',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'species_id',
                        type: 'int',
                        isNullable: false,
                    },
                    {
                        name: 'height',
                        type: 'float',
                        isNullable: false,
                    },
                    {
                        name: 'weight',
                        type: 'int',
                        isNullable: false,
                    },
                    {
                        name: 'base_experience',
                        type: 'int',
                        isNullable: false,
                    },
                    {
                        name: 'order',
                        type: 'int',
                        isNullable: false,
                    },
                    {
                        name: 'is_default',
                        type: 'boolean',
                        isNullable: false,
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("pokemon");
    }

}
