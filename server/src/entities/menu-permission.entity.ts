import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn, type Relation } from 'typeorm';
import { UserType } from './user-type.entity.js';
import { Menu } from './menu.entity.js';

@Entity({ name: 'MenuPermission' })
export class MenuPermission extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'int' })
    id!: number;

    @Column({ type: 'boolean', default: true })
    isActive!: boolean;

    @ManyToOne(_=> UserType, r => r.menus)
    userType?: Relation<UserType> | null;

    @ManyToOne(_ => Menu, r => r.userTypes)
    menu?: Relation<Menu> | null;
}