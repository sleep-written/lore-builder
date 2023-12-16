import type { MigrationInterface, QueryRunner } from "typeorm";

export class CreateDb1702692370416 implements MigrationInterface {
    name = 'CreateDb1702692370416'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Menu" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "icon" varchar(64) NOT NULL, "text" nvarchar(128) NOT NULL, "path" varchar(128) NOT NULL, "visible" boolean NOT NULL DEFAULT (0))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Menu"`);
    }

}
