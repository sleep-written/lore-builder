import { Character } from './character.entity';

export interface EventDetail {
    id: number;
    description: string;
    character?: Character | null;
}