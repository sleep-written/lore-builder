import { Character } from './character';

export interface Gender {
    id: number;
    name: string;
    characters?: Character[] | null;
}