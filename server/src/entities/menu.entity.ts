import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Menu' })
export class Menu extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'int' })
    id!: number;

    @Column({ type: 'varchar', length: 50 })
    icon!: string;

    @Column({ type: 'varchar', length: 100 })
    text!: string;

    @Column({ type: 'varchar', length: 100 })
    path!: string;

    @Column({ type: 'boolean', default: false })
    visible!: boolean;
}