import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EventService } from '@services/event';
import { Event } from '@entities/event.entity';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventComponent implements OnInit {
  event!: Event;
  constructor(
    private _activeRoute: ActivatedRoute,
    private _changeDet: ChangeDetectorRef,
    private _eventServ: EventService,
  ) {}

  async ngOnInit(): Promise<void> {
    const id = parseInt(this._activeRoute.snapshot.params['id']);
    this.event = await this._eventServ.get(id);
    this._changeDet.detectChanges();
  }
}
