import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, type Relation } from 'typeorm';
import { Character } from './character.js';

@Entity({ name: 'Universe' })
export class Universe extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'int' })
    id!: number;

    @Column({ type: 'nvarchar' })
    name!: string;

    @Column({ type: 'nvarchar' })
    description!: string;

    @OneToMany(_ => Character, r => r.universe)
    characters?: Relation<Character[]> | null;
}