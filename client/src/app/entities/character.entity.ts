import { Tag } from './tag.entity';

export interface Character {
    id: number;
    name: string;
    tag?: Tag | null;
}