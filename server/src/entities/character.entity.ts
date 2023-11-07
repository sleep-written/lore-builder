import { BaseEntity, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, type Relation } from 'typeorm';
import { EventDetail } from './event-detail.entity.js';
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

    @OneToMany(_ => EventDetail, r => r.character)
    eventDetails?: Relation<EventDetail[]> | null;
}