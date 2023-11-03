import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalCreateComponent } from './modal-create';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterComponent {
  constructor(
    private _changeDet: ChangeDetectorRef,
    private _dialog: MatDialog,
  ) {}

  async addCharacter(): Promise<void> {
    const modal = this._dialog.open(ModalCreateComponent, {
      width: 'calc(100vw - 4rem)',
      maxWidth: '1024px'
    });

    await firstValueFrom(modal.afterClosed());
    this._changeDet.detectChanges();
  }
}
