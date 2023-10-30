import type { MigrationInterface, QueryRunner } from "typeorm";

export class CreateMenu1698633934819 implements MigrationInterface {
    name = 'CreateMenu1698633934819'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Menu" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "icon" varchar(50) NOT NULL, "text" varchar(100) NOT NULL, "path" varchar(100) NOT NULL, "visible" boolean NOT NULL DEFAULT (0))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Menu"`);
    }

}
