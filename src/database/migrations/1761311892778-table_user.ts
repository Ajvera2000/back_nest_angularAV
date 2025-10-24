import { MigrationInterface, QueryRunner } from "typeorm";

export class TableUser1761311892778 implements MigrationInterface {
    name = 'TableUser1761311892778'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "phone" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "phone"`);
    }

}
