import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Menu' })
export class Menu extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'int' })
    id!: number;

    @Column({ type: 'varchar', length: 64 })
    icon!: string;

    @Column({ type: 'nvarchar', length: 128 })
    text!: string;

    @Column({ type: 'varchar', length: 128 })
    path!: string;

    @Column({ type: 'boolean', default: false })
    visible!: boolean;
}