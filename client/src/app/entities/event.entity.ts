import { EventDetail } from './event-detail.entity';

export interface Event {
    id: number;
    title: string;
    date: Date;
    description: string;
    eventDetails?: EventDetail[] | null;
}
