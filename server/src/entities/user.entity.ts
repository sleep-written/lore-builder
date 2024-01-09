import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn, type Relation } from 'typeorm';
import { UserType } from './user-type.entity.js';

@Entity({ name: 'User' })
export class User extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'int' })
    id!: number;

    @Column({ type: 'varchar', length: 32 })
    nick!: string;

    @Column({ type: 'varchar', length: 64 })
    pass!: string;

    @ManyToOne(_ => UserType, r => r.users)
    userType?: Relation<UserType> | null;
}
