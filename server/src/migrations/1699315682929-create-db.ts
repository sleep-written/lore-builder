import type { MigrationInterface, QueryRunner } from "typeorm";

export class CreateDb1699315682929 implements MigrationInterface {
    name = 'CreateDb1699315682929'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Event" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "title" nvarchar(256) NOT NULL, "description" nvarchar(2048) NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "EventDetail" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "description" nvarchar NOT NULL, "characterId" integer)`);
        await queryRunner.query(`CREATE TABLE "Tag" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "cod" varchar(128) NOT NULL, "description" nvarchar(1024) NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "Character" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" nvarchar(256) NOT NULL, "tagId" integer, CONSTRAINT "REL_9ce45f03b2996404447b0d7b35" UNIQUE ("tagId"))`);
        await queryRunner.query(`CREATE TABLE "Menu" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "icon" varchar(64) NOT NULL, "text" nvarchar(128) NOT NULL, "path" varchar(128) NOT NULL, "visible" boolean NOT NULL DEFAULT (0))`);
        await queryRunner.query(`CREATE TABLE "temporary_EventDetail" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "description" nvarchar NOT NULL, "characterId" integer, CONSTRAINT "FK_34569f46b38ee1bdc09b4d85de4" FOREIGN KEY ("characterId") REFERENCES "Character" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_EventDetail"("id", "description", "characterId") SELECT "id", "description", "characterId" FROM "EventDetail"`);
        await queryRunner.query(`DROP TABLE "EventDetail"`);
        await queryRunner.query(`ALTER TABLE "temporary_EventDetail" RENAME TO "EventDetail"`);
        await queryRunner.query(`CREATE TABLE "temporary_Character" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" nvarchar(256) NOT NULL, "tagId" integer, CONSTRAINT "REL_9ce45f03b2996404447b0d7b35" UNIQUE ("tagId"), CONSTRAINT "FK_9ce45f03b2996404447b0d7b35d" FOREIGN KEY ("tagId") REFERENCES "Tag" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_Character"("id", "name", "tagId") SELECT "id", "name", "tagId" FROM "Character"`);
        await queryRunner.query(`DROP TABLE "Character"`);
        await queryRunner.query(`ALTER TABLE "temporary_Character" RENAME TO "Character"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Character" RENAME TO "temporary_Character"`);
        await queryRunner.query(`CREATE TABLE "Character" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" nvarchar(256) NOT NULL, "tagId" integer, CONSTRAINT "REL_9ce45f03b2996404447b0d7b35" UNIQUE ("tagId"))`);
        await queryRunner.query(`INSERT INTO "Character"("id", "name", "tagId") SELECT "id", "name", "tagId" FROM "temporary_Character"`);
        await queryRunner.query(`DROP TABLE "temporary_Character"`);
        await queryRunner.query(`ALTER TABLE "EventDetail" RENAME TO "temporary_EventDetail"`);
        await queryRunner.query(`CREATE TABLE "EventDetail" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "description" nvarchar NOT NULL, "characterId" integer)`);
        await queryRunner.query(`INSERT INTO "EventDetail"("id", "description", "characterId") SELECT "id", "description", "characterId" FROM "temporary_EventDetail"`);
        await queryRunner.query(`DROP TABLE "temporary_EventDetail"`);
        await queryRunner.query(`DROP TABLE "Menu"`);
        await queryRunner.query(`DROP TABLE "Character"`);
        await queryRunner.query(`DROP TABLE "Tag"`);
        await queryRunner.query(`DROP TABLE "EventDetail"`);
        await queryRunner.query(`DROP TABLE "Event"`);
    }

}
