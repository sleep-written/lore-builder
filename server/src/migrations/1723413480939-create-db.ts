import type { MigrationInterface, QueryRunner } from "typeorm";

export class CreateDb1723413480939 implements MigrationInterface {
    name = 'CreateDb1723413480939'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Menu" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" nvarchar NOT NULL, "icon" varchar, "path" varchar, "logged" boolean NOT NULL, "visible" boolean NOT NULL, "mpath" varchar DEFAULT (''), "parentId" integer)`);
        await queryRunner.query(`CREATE TABLE "Universe" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" nvarchar NOT NULL, "description" nvarchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "Gender" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" nvarchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "Character" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" nvarchar NOT NULL, "description" nvarchar NOT NULL, "genderId" integer, "universeId" integer)`);
        await queryRunner.query(`CREATE TABLE "Event" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "timestamp" datetime NOT NULL, "name" nvarchar NOT NULL, "description" nvarchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "EventDetail" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "description" nvarchar, "eventId" integer, "characterId" integer)`);
        await queryRunner.query(`CREATE TABLE "temporary_Menu" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" nvarchar NOT NULL, "icon" varchar, "path" varchar, "logged" boolean NOT NULL, "visible" boolean NOT NULL, "mpath" varchar DEFAULT (''), "parentId" integer, CONSTRAINT "FK_c4c5fa3bc158c089f076ec35d08" FOREIGN KEY ("parentId") REFERENCES "Menu" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_Menu"("id", "name", "icon", "path", "logged", "visible", "mpath", "parentId") SELECT "id", "name", "icon", "path", "logged", "visible", "mpath", "parentId" FROM "Menu"`);
        await queryRunner.query(`DROP TABLE "Menu"`);
        await queryRunner.query(`ALTER TABLE "temporary_Menu" RENAME TO "Menu"`);
        await queryRunner.query(`CREATE TABLE "temporary_Character" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" nvarchar NOT NULL, "description" nvarchar NOT NULL, "genderId" integer, "universeId" integer, CONSTRAINT "FK_09ae4e5b1a448e97fa35a219be2" FOREIGN KEY ("genderId") REFERENCES "Gender" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_e561f78affa6f0ae7810abec177" FOREIGN KEY ("universeId") REFERENCES "Universe" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_Character"("id", "name", "description", "genderId", "universeId") SELECT "id", "name", "description", "genderId", "universeId" FROM "Character"`);
        await queryRunner.query(`DROP TABLE "Character"`);
        await queryRunner.query(`ALTER TABLE "temporary_Character" RENAME TO "Character"`);
        await queryRunner.query(`CREATE TABLE "temporary_EventDetail" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "description" nvarchar, "eventId" integer, "characterId" integer, CONSTRAINT "FK_f9ffd4e8249e87f4aa104cfed80" FOREIGN KEY ("eventId") REFERENCES "Event" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_34569f46b38ee1bdc09b4d85de4" FOREIGN KEY ("characterId") REFERENCES "Character" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_EventDetail"("id", "description", "eventId", "characterId") SELECT "id", "description", "eventId", "characterId" FROM "EventDetail"`);
        await queryRunner.query(`DROP TABLE "EventDetail"`);
        await queryRunner.query(`ALTER TABLE "temporary_EventDetail" RENAME TO "EventDetail"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "EventDetail" RENAME TO "temporary_EventDetail"`);
        await queryRunner.query(`CREATE TABLE "EventDetail" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "description" nvarchar, "eventId" integer, "characterId" integer)`);
        await queryRunner.query(`INSERT INTO "EventDetail"("id", "description", "eventId", "characterId") SELECT "id", "description", "eventId", "characterId" FROM "temporary_EventDetail"`);
        await queryRunner.query(`DROP TABLE "temporary_EventDetail"`);
        await queryRunner.query(`ALTER TABLE "Character" RENAME TO "temporary_Character"`);
        await queryRunner.query(`CREATE TABLE "Character" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" nvarchar NOT NULL, "description" nvarchar NOT NULL, "genderId" integer, "universeId" integer)`);
        await queryRunner.query(`INSERT INTO "Character"("id", "name", "description", "genderId", "universeId") SELECT "id", "name", "description", "genderId", "universeId" FROM "temporary_Character"`);
        await queryRunner.query(`DROP TABLE "temporary_Character"`);
        await queryRunner.query(`ALTER TABLE "Menu" RENAME TO "temporary_Menu"`);
        await queryRunner.query(`CREATE TABLE "Menu" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" nvarchar NOT NULL, "icon" varchar, "path" varchar, "logged" boolean NOT NULL, "visible" boolean NOT NULL, "mpath" varchar DEFAULT (''), "parentId" integer)`);
        await queryRunner.query(`INSERT INTO "Menu"("id", "name", "icon", "path", "logged", "visible", "mpath", "parentId") SELECT "id", "name", "icon", "path", "logged", "visible", "mpath", "parentId" FROM "temporary_Menu"`);
        await queryRunner.query(`DROP TABLE "temporary_Menu"`);
        await queryRunner.query(`DROP TABLE "EventDetail"`);
        await queryRunner.query(`DROP TABLE "Event"`);
        await queryRunner.query(`DROP TABLE "Character"`);
        await queryRunner.query(`DROP TABLE "Gender"`);
        await queryRunner.query(`DROP TABLE "Universe"`);
        await queryRunner.query(`DROP TABLE "Menu"`);
    }

}
