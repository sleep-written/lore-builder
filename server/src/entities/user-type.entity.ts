import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, type Relation } from 'typeorm';
import { MenuPermission } from './menu-permission.entity.js';
import { User } from './user.entity.js';

@Entity({ name: 'UserType' })
export class UserType extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'int' })
    id!: number;

    @Column({ type: 'varchar', length: 64 })
    code!: string;

    @Column({ type: 'nvarchar', length: 128 })
    description!: string;

    @OneToMany(_ => User, r => r.userType)
    users?: Relation<User[]> | null;

    @OneToMany(_ => MenuPermission, r => r.userType)
    menus?: Relation<MenuPermission[]> | null;
}