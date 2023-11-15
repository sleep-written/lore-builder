import { FormBuilder, Validators } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { Event } from '@entities/event.entity';

@Component({
  selector: 'app-event-panel',
  templateUrl: './event-panel.component.html',
  styleUrl: './event-panel.component.scss'
})
export class EventPanelComponent {
  @Input()
  set event(v: Event) {
    this.form.setValue({
      title: v?.title ?? '',
      date: v?.date ?? null as any,
      description: v?.description ?? ''
    });
  }

  form = new FormBuilder().nonNullable.group({
    title:        [ '',                   [ Validators.minLength(3) ] ],
    date:         [ null as any as Date,  [ Validators.required ] ],
    description:  [ '',                   [ Validators.minLength(3) ] ]
  });
}
