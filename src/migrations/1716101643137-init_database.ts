import { MigrationInterface, QueryRunner } from "typeorm";

export class InitDatabase1716101643137 implements MigrationInterface {
    name = 'InitDatabase1716101643137'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "autor" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "nacimiento" date NOT NULL, CONSTRAINT "UQ_0467f6ea905ad6f03006191b68b" UNIQUE ("nombre"), CONSTRAINT "PK_51d3959df48c82010ae1c4907fb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "libro" ("id" SERIAL NOT NULL, "titulo" character varying NOT NULL, "publicacion" date NOT NULL, "genero" character varying NOT NULL, "autorIdId" integer, CONSTRAINT "UQ_b49ae474be88d4155f2b38bb82f" UNIQUE ("titulo"), CONSTRAINT "REL_8b360319ec761603f7605572bf" UNIQUE ("autorIdId"), CONSTRAINT "PK_47ec60a1186696b36e76f499516" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "libro" ADD CONSTRAINT "FK_8b360319ec761603f7605572bf1" FOREIGN KEY ("autorIdId") REFERENCES "autor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "libro" DROP CONSTRAINT "FK_8b360319ec761603f7605572bf1"`);
        await queryRunner.query(`DROP TABLE "libro"`);
        await queryRunner.query(`DROP TABLE "autor"`);
    }

}
