import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, type Relation } from 'typeorm';
import { MenuPermission } from './menu-permission.entity.js';

@Entity({ name: 'Menu' })
export class Menu extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'int' })
    id!: number;

    @Column({ type: 'varchar', length: 512 })
    url!: string;

    @Column({ type: 'nvarchar', length: 1024 })
    text!: string;
    
    @Column({ type: 'varchar', length: 128 })
    icon!: string;

    @OneToMany(_ => MenuPermission, r => r.menu)
    userTypes?: Relation<MenuPermission[]> | null;
}