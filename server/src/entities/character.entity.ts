import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, type Relation } from 'typeorm';
import { Tag } from './tag.entity.js';

@Entity({ name: 'Character' })
export class Character extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'int' })
    id!: number;

    @Column({ type: 'nvarchar', length: 256 })
    name!: string;

    @OneToOne(_ => Tag, r => r.character)
    @JoinColumn()
    tag?: Relation<Tag> | null;
}