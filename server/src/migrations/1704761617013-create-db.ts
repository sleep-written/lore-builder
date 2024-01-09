import type { MigrationInterface, QueryRunner } from "typeorm";

export class CreateDb1704761617013 implements MigrationInterface {
    name = 'CreateDb1704761617013'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "User" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "nick" varchar(32) NOT NULL, "pass" varchar(64) NOT NULL, "userTypeId" integer)`);
        await queryRunner.query(`CREATE TABLE "UserType" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "code" varchar(64) NOT NULL, "description" nvarchar(128) NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "Menu" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "url" varchar(512) NOT NULL, "text" nvarchar(1024) NOT NULL, "icon" varchar(128) NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "MenuPermission" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "isActive" boolean NOT NULL DEFAULT (1), "userTypeId" integer, "menuId" integer)`);
        await queryRunner.query(`CREATE TABLE "temporary_User" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "nick" varchar(32) NOT NULL, "pass" varchar(64) NOT NULL, "userTypeId" integer, CONSTRAINT "FK_acea3e81de70fa86f694093de1f" FOREIGN KEY ("userTypeId") REFERENCES "UserType" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_User"("id", "nick", "pass", "userTypeId") SELECT "id", "nick", "pass", "userTypeId" FROM "User"`);
        await queryRunner.query(`DROP TABLE "User"`);
        await queryRunner.query(`ALTER TABLE "temporary_User" RENAME TO "User"`);
        await queryRunner.query(`CREATE TABLE "temporary_MenuPermission" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "isActive" boolean NOT NULL DEFAULT (1), "userTypeId" integer, "menuId" integer, CONSTRAINT "FK_f8169311232c380f2f2431c899c" FOREIGN KEY ("userTypeId") REFERENCES "UserType" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_88aa6689e7eaba9af95a7fe0982" FOREIGN KEY ("menuId") REFERENCES "Menu" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_MenuPermission"("id", "isActive", "userTypeId", "menuId") SELECT "id", "isActive", "userTypeId", "menuId" FROM "MenuPermission"`);
        await queryRunner.query(`DROP TABLE "MenuPermission"`);
        await queryRunner.query(`ALTER TABLE "temporary_MenuPermission" RENAME TO "MenuPermission"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "MenuPermission" RENAME TO "temporary_MenuPermission"`);
        await queryRunner.query(`CREATE TABLE "MenuPermission" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "isActive" boolean NOT NULL DEFAULT (1), "userTypeId" integer, "menuId" integer)`);
        await queryRunner.query(`INSERT INTO "MenuPermission"("id", "isActive", "userTypeId", "menuId") SELECT "id", "isActive", "userTypeId", "menuId" FROM "temporary_MenuPermission"`);
        await queryRunner.query(`DROP TABLE "temporary_MenuPermission"`);
        await queryRunner.query(`ALTER TABLE "User" RENAME TO "temporary_User"`);
        await queryRunner.query(`CREATE TABLE "User" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "nick" varchar(32) NOT NULL, "pass" varchar(64) NOT NULL, "userTypeId" integer)`);
        await queryRunner.query(`INSERT INTO "User"("id", "nick", "pass", "userTypeId") SELECT "id", "nick", "pass", "userTypeId" FROM "temporary_User"`);
        await queryRunner.query(`DROP TABLE "temporary_User"`);
        await queryRunner.query(`DROP TABLE "MenuPermission"`);
        await queryRunner.query(`DROP TABLE "Menu"`);
        await queryRunner.query(`DROP TABLE "UserType"`);
        await queryRunner.query(`DROP TABLE "User"`);
    }

}
