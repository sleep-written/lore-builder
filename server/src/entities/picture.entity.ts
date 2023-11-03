import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, type Relation } from 'typeorm';
import { RelTagPicture } from './rel-tag-picture.entity.js';

@Entity({ name: 'Picture' })
export class Picture extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'int' })
    id!: number;

    @Column({ type: 'varchar', length: 256 })
    filename!: string;

    @Column({ type: 'varchar', length: 4 })
    extension!: string;

    @OneToMany(_ => RelTagPicture, r => r.picture)
    tags?: Relation<RelTagPicture[]> | null;
}