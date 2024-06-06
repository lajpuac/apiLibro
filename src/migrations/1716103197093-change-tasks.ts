import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeTasks1716103197093 implements MigrationInterface {
    name = 'ChangeTasks1716103197093'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "autor" ADD "apellido" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "autor" ADD CONSTRAINT "UQ_d78e9917287f1bc0b8d95c3ca5a" UNIQUE ("apellido")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "autor" DROP CONSTRAINT "UQ_d78e9917287f1bc0b8d95c3ca5a"`);
        await queryRunner.query(`ALTER TABLE "autor" DROP COLUMN "apellido"`);
    }

}
