import { BaseEntity, Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, type Relation } from 'typeorm';
import { RelTagPicture } from './rel-tag-picture.entity.js';
import { Character } from './character.entity.js';

@Entity({ name: 'Tag' })
export class Tag extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'int' })
    id!: number;

    @Column({ type: 'varchar', length: 128 })
    cod!: string;

    @Column({ type: 'nvarchar', length: 1024 })
    description!: string;

    @OneToOne(_ => Character, r => r.tag, { nullable: true })
    character?: Relation<Character> | null;

    @OneToMany(_ => RelTagPicture, r => r.tag)
    pictures?: Relation<RelTagPicture[]> | null;
}