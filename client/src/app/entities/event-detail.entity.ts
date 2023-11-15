import { Character } from './character.entity';
import { Event } from './event.entity';

export interface EventDetail {
    id: number;
    description: string;
    event?: Event | null;
    character?: Character | null;
}