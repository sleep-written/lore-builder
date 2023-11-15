import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, type Relation } from 'typeorm';
import { EventDetail } from './event-detail.entity.js';

@Entity({ name: 'Event' })
export class Event extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'int' })
    id!: number;

    @Column({ type: 'nvarchar', length: 256 })
    title!: string;

    @Column({ type: 'date' })
    date!: Date;

    @Column({ type: 'nvarchar', length: 2048 })
    description!: string;

    @OneToMany(_ => EventDetail, r => r.event)
    eventDetails?: Relation<EventDetail[]> | null;
}
