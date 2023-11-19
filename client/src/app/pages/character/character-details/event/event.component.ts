import { Component, Input } from '@angular/core';
import { Character } from '@entities/character.entity';
import { Event } from '@entities/event.entity';
import { format } from 'date-fns/esm';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss'
})
export class EventComponent {
  @Input()
  event!: Event;

  get date(): string {
    return format(this.event.date, 'dd/MM/yyyy');
  }

  get characters(): (Character)[] {
    return (this.event?.eventDetails ?? [])
      .map(x => x.character as Character)
      .filter(x => x != null);
  }
}
