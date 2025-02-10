import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CharacterModalComponent } from './character-modal.component';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterModalService {
  private _dialog = inject(MatDialog);

  open(): Promise<void> {
    const dialog = this._dialog.open(CharacterModalComponent, {

    });

    return firstValueFrom(dialog.afterClosed());
  }
}
