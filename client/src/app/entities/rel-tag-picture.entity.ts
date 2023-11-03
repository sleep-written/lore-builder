import { Picture } from './picture.entity';
import { Tag } from './tag.entity';

export interface RelTagPicture {
    id: number;
    tag?: Tag | null;
    picture?: Picture | null;
}