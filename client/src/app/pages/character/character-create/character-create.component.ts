import { firstValueFrom } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Component, EventEmitter, Output } from '@angular/core';

import { ModalCreateComponent } from './modal-create';

@Component({
  selector: 'app-character-create',
  templateUrl: './character-create.component.html',
  styleUrls: ['./character-create.component.scss']
})
export class CharacterCreateComponent {
  @Output()
  created = new EventEmitter<void>();

  constructor(
    private _dialog: MatDialog,
  ) {}

  async addCharacter(): Promise<void> {
    const modal = this._dialog.open(ModalCreateComponent, {
      width: 'calc(100vw - 4rem)',
      maxWidth: '1024px',
      maxHeight: 'unset',
      disableClose: true
    });

    await firstValueFrom(modal.afterClosed());
    this.created.emit();
  }
}
