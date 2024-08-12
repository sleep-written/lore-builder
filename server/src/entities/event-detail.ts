import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn, type Relation } from 'typeorm';

import { Character } from './character.js';
import { Event } from './event.js';

@Entity({ name: 'EventDetail' })
export class EventDetail extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'int' })
    id!: number;

    @Column({ type: 'nvarchar', nullable: true })
    description?: string | null;

    @ManyToOne(_ => Event, r => r.details)
    event?: Relation<Event> | null;

    @ManyToOne(_ => Character, r => r.eventDetails)
    character?: Relation<Character> | null;
}