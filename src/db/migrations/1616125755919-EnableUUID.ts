import {MigrationInterface, QueryRunner} from "typeorm";

export class EnableUUID1616125755919 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS pgcrypto;`);
      }
    
      public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP EXTENSION pgcrypto;`);
      }

}
