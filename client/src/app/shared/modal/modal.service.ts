import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ModalComponent } from './modal.component';
import { ModalOptions } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor(
    private _dialog: MatDialog,
  ) {}

  deploy(options: ModalOptions): Promise<void> {
    const dialog = this._dialog.open(ModalComponent, {
      data: options,
      disableClose: true,
      width: 'calc(100% - 2rem)',
      maxWidth: '640px',
      maxHeight: 'unset'
    });
    
    return new Promise<void>(resolve => {
      const clock = typeof options.timeout === 'number'
      ? setTimeout(() => dialog.close(), options.timeout)
      : null;

      const subsc = dialog.afterClosed().subscribe(() => {
        if (clock) { clearTimeout(clock); }
        subsc.unsubscribe();
        resolve();
      });
    });
  }

  onError(err: any, timeout?: number): Promise<void> {
    let text = 'Error not idetified';
    if (err instanceof Error) {
      text = err.message;
    } else if (typeof err === 'string') {
      text = err;
    }

    return this.deploy({
      title: 'Error',
      icon: 'error',
      text,
      timeout,
      buttons: [
        {
          icon:  'thumb_up',
          text:  'Ok',
          color: 'primary'
        }
      ]
    });
  }

  onSuccess(text: string, timeout?: number): Promise<void> {
    return this.deploy({
      title: 'Success',
      icon: 'check_circle',
      text,
      timeout,
      buttons: [
        {
          icon:  'thumb_up',
          text:  'Ok',
          color: 'primary'
        }
      ]
    });
  }
}
