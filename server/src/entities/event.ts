import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, type Relation } from 'typeorm';
import { EventDetail } from './event-detail.js';

@Entity({ name: 'Event' })
export class Event extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'int' })
    id!: number;

    @Column({ type: 'datetime' })
    timestamp!: Date;

    @Column({ type: 'nvarchar' })
    name!: string;

    @Column({ type: 'nvarchar' })
    description!: string;

    @OneToMany(_ => EventDetail, r => r.event)
    details?: Relation<EventDetail[]> | null;
}