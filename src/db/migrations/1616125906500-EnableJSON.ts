import {MigrationInterface, QueryRunner} from "typeorm";

export class EnableJSON1616125906500 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS citext;`);
      }
    
      public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP EXTENSION citext;`);
      }

}
