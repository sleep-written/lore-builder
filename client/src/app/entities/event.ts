import { EventDetail } from './event-detail';

export interface Event {
    id: number;
    timestamp: Date;
    name: string;
    description: string;
    details?: EventDetail[] | null;
}