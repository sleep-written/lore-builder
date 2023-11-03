import type { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePictureAndRelation1698977656892 implements MigrationInterface {
    name = 'CreatePictureAndRelation1698977656892'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Picture" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "filename" varchar(256) NOT NULL, "extension" varchar(4) NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "Character" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" nvarchar(256) NOT NULL, "tagId" integer, CONSTRAINT "REL_9ce45f03b2996404447b0d7b35" UNIQUE ("tagId"))`);
        await queryRunner.query(`CREATE TABLE "Tag" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "cod" varchar(128) NOT NULL, "description" nvarchar(1024) NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "RelTagPicture" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "tagId" integer, "pictureId" integer)`);
        await queryRunner.query(`CREATE TABLE "temporary_Character" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" nvarchar(256) NOT NULL, "tagId" integer, CONSTRAINT "REL_9ce45f03b2996404447b0d7b35" UNIQUE ("tagId"), CONSTRAINT "FK_9ce45f03b2996404447b0d7b35d" FOREIGN KEY ("tagId") REFERENCES "Tag" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_Character"("id", "name", "tagId") SELECT "id", "name", "tagId" FROM "Character"`);
        await queryRunner.query(`DROP TABLE "Character"`);
        await queryRunner.query(`ALTER TABLE "temporary_Character" RENAME TO "Character"`);
        await queryRunner.query(`CREATE TABLE "temporary_RelTagPicture" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "tagId" integer, "pictureId" integer, CONSTRAINT "FK_2f7628a21dc376f418102f7eaeb" FOREIGN KEY ("tagId") REFERENCES "Tag" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_66f1c2c602630e31cfe044803d9" FOREIGN KEY ("pictureId") REFERENCES "Picture" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_RelTagPicture"("id", "tagId", "pictureId") SELECT "id", "tagId", "pictureId" FROM "RelTagPicture"`);
        await queryRunner.query(`DROP TABLE "RelTagPicture"`);
        await queryRunner.query(`ALTER TABLE "temporary_RelTagPicture" RENAME TO "RelTagPicture"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "RelTagPicture" RENAME TO "temporary_RelTagPicture"`);
        await queryRunner.query(`CREATE TABLE "RelTagPicture" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "tagId" integer, "pictureId" integer)`);
        await queryRunner.query(`INSERT INTO "RelTagPicture"("id", "tagId", "pictureId") SELECT "id", "tagId", "pictureId" FROM "temporary_RelTagPicture"`);
        await queryRunner.query(`DROP TABLE "temporary_RelTagPicture"`);
        await queryRunner.query(`ALTER TABLE "Character" RENAME TO "temporary_Character"`);
        await queryRunner.query(`CREATE TABLE "Character" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" nvarchar(256) NOT NULL, "tagId" integer, CONSTRAINT "REL_9ce45f03b2996404447b0d7b35" UNIQUE ("tagId"))`);
        await queryRunner.query(`INSERT INTO "Character"("id", "name", "tagId") SELECT "id", "name", "tagId" FROM "temporary_Character"`);
        await queryRunner.query(`DROP TABLE "temporary_Character"`);
        await queryRunner.query(`DROP TABLE "RelTagPicture"`);
        await queryRunner.query(`DROP TABLE "Tag"`);
        await queryRunner.query(`DROP TABLE "Character"`);
        await queryRunner.query(`DROP TABLE "Picture"`);
    }

}
