import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

import { UniverseModalComponent } from './universe-modal.component';
import { Universe } from '@entities/universe';

@Injectable({
  providedIn: 'root'
})
export class UniverseModalService {
  private _dialog = inject(MatDialog);

  open(data?: Universe): Promise<Universe | undefined> {
    const dialog = this._dialog.open<
      UniverseModalComponent,
      Universe,
      Universe
    >(UniverseModalComponent, {
      data,
      disableClose: true,
      width: `calc(100dvw - 2rem)`,
      height: 'unset',
      maxWidth: '640px',
      maxHeight: 'unset',
    });

    return firstValueFrom(dialog.afterClosed());
  }
}
