import type { Relation } from 'typeorm';

import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { EventDetail } from './event-detail.js';
import { Universe } from './universe.js';
import { Gender } from './gender.js';

@Entity({ name: 'Character' })
export class Character extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'int' })
    id!: number;

    @Column({ type: 'nvarchar' })
    name!: string;

    @Column({ type: 'nvarchar' })
    description!: string;

    @ManyToOne(_ => Gender, r => r.characters)
    gender?: Relation<Gender> | null;

    @ManyToOne(_ => Universe, r => r.characters)
    universe?: Relation<Universe> | null;

    @OneToMany(_ => EventDetail, r => r.character)
    eventDetails?: Relation<EventDetail[]> | null;
}