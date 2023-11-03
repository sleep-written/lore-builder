import { RelTagPicture } from './rel-tag-picture.entity';
import { Character } from './character.entity';

export interface Tag {
    id: number;
    cod: string;
    description: string;
    character?: Character | null;
    pictures?: RelTagPicture[] | null;
}