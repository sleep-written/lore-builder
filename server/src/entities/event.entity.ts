import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Event' })
export class Event extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'int' })
    id!: number;

    @Column({ type: 'nvarchar', length: 256 })
    title!: string;

    @Column({ type: 'nvarchar', length: 2048 })
    description!: string;
}