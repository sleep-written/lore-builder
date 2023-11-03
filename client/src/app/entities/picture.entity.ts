import { RelTagPicture } from './rel-tag-picture.entity';

export interface Picture {
    id: number;
    filename: string;
    extension: string;
    tags?: RelTagPicture[] | null;
}