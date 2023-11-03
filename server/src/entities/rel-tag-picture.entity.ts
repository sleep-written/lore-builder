import { BaseEntity, Entity, ManyToOne, PrimaryGeneratedColumn, type Relation } from 'typeorm';
import { Picture } from './picture.entity.js';
import { Tag } from './tag.entity.js';

@Entity({ name: 'RelTagPicture' })
export class RelTagPicture extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'int' })
    id!: number;

    @ManyToOne(_ => Tag, r => r.pictures)
    tag?: Relation<Tag> | null;

    @ManyToOne(_ => Picture, r => r.tags)
    picture?: Relation<Picture> | null;
}