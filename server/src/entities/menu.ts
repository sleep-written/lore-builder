import { dataSource } from '@/data-source.js';
import { BaseEntity, Column, Entity, IsNull, PrimaryGeneratedColumn, Tree, TreeChildren, TreeParent, type FindManyOptions, type FindOptionsWhere, type Relation } from 'typeorm';

@Entity({ name: 'Menu' })
@Tree('materialized-path')
export class Menu extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'int' })
    id!: number;

    @Column({ type: 'nvarchar' })
    name!: string;

    @Column({ type: 'varchar', nullable: true })
    icon?: string| null;

    @Column({ type: 'varchar', nullable: true })
    path?: string| null;

    @Column({ type: 'boolean' })
    logged!: boolean;
    
    @Column({ type: 'boolean' })
    visible!: boolean;

    @TreeParent()
    parent?: Relation<Menu> | null;

    @TreeChildren()
    children?: Relation<Menu[]> | null;

    private static async _getChildren(parentId: number, where?: FindOptionsWhere<Menu>): Promise<Menu[]> {
        const children = await Menu.find({
            where: {
                ...(where ?? {}),
                parent: { id: parentId }
            }
        });

        for (const item of children) {
            item.children = await Menu._getChildren(item.id, where);
            if (item.children.length === 0) {
                delete item.children;
            }
        }

        return children;
    }

    static async findTree(where?: FindOptionsWhere<Menu>): Promise<Menu[]> {
        const roots = await Menu.find({
            where: {
                ...(where ?? {}),
                parent: IsNull()
            }
        });

        for (const root of roots) {
            root.children = await Menu._getChildren(root.id, where);
            if (root.children.length === 0) {
                delete root.children;
            }
        }

        return roots;
    }
}