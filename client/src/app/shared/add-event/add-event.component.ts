import { Component, EventEmitter, Input, Output } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

import { ModalComponent } from './modal';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent {
  @Input()
  tag!: string;
  
  @Output()
  createdEvent = new EventEmitter<void>();

  constructor(
    private _dialog: MatDialog,
  ) {}

  async click(): Promise<void> {
    const modal = this._dialog.open(ModalComponent, {
      data: this.tag,
      width: 'calc(100vw - 4rem)',
      maxWidth: '1024px',
      maxHeight: 'unset',
      disableClose: true
    });

    await firstValueFrom(modal.afterClosed());
    this.createdEvent.emit();
  }
}
