import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Event } from '@entities/event.entity';

@Component({
  selector: 'app-main-event',
  templateUrl: './main-event.component.html',
  styleUrl: './main-event.component.scss'
})
export class MainEventComponent {
  @Output()
  reset = new EventEmitter<void>();

  @Input()
  set event(v: Event) {
    this.form.setValue({
      title:        v?.title ?? '',
      date:         v?.date ?? null as any,
      description:  v?.description ?? ''
    });
  }

  form = new FormBuilder().nonNullable.group({
    title:        [ '', [ Validators.required, Validators.minLength(3) ] ],
    date:         [ null as any as Date, [ Validators.required ] ],
    description:  [ '', [ Validators.required, Validators.minLength(3) ] ],
  });
}
