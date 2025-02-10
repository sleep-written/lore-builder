import { Character } from './character';
import { Event } from './event';

export interface EventDetail {
    id: number;
    description?: string | null;
    event?: Event | null;
    character?: Character | null;
}