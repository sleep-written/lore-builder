import type { MigrationInterface, QueryRunner } from "typeorm";

export class AddStory1702699421717 implements MigrationInterface {
    name = 'AddStory1702699421717'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Story" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "title" nvarchar NOT NULL, "description" nvarchar NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Story"`);
    }

}
