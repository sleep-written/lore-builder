import { EventDetail } from './event-detail';
import { Universe } from './universe';
import { Gender } from './gender';

export interface Character {
    id: number;
    name: string;
    description: string;
    gender?: Gender | null;
    universe?: Universe | null;
    eventDetails?: EventDetail[] | null;
}