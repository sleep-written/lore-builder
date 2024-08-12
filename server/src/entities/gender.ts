import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, type Relation } from 'typeorm';
import { Character } from './character.js';

@Entity({ name: 'Gender' })
export class Gender extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'int' })
    id!: number;

    @Column({ type: 'nvarchar' })
    name!: string;

    @OneToMany(_ => Character, r => r.gender)
    characters?: Relation<Character[]> | null;
}