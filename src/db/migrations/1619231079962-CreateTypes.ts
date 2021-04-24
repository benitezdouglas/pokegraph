import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTypes1619231079962 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "types",
                columns: [
                    {
                        name: 'id',
                        type: 'int',
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
                        name: 'generation_id',
                        type: "int",
                        isNullable: false,
                    },
                    {
                        name: 'damage_class_id',
                        type: 'int',
                        isNullable: true,
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('types');
    }

}
