import { MatDialog, MatDialogState } from '@angular/material/dialog';
import { firstValueFrom } from 'rxjs';
import { Injectable } from '@angular/core';

import { ModalData, ModalType } from './interfaces';
import { ModalComponent } from './modal.component';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    private _matDialog: MatDialog,
  ) { }

  async open(options: ModalData, ms?: number): Promise<void> {
    const dialog = this._matDialog.open(ModalComponent, {
      data: {
        type:     options.type    ?? 'info',
        title:    options.title   ?? 'Aviso',
        content:  options.content,
        buttons:  options.buttons ?? []
      } as Required<ModalData>,
      width: 'calc(100vw - 2rem)',
      maxWidth: '512px',
      disableClose: true,
    });

    if (typeof ms === 'number') {
      setTimeout(() => {
        const state = dialog?.getState();
        if (state === MatDialogState.OPEN) {
          dialog.close();
        }
      }, ms);
    }

    await firstValueFrom(dialog.afterClosed());
    await new Promise(r => setTimeout(r, 250));
  }

  async openConfirm(message: string, type?: ModalType): Promise<boolean> {
    let response: boolean = false;
    await this.open({
      type: type ?? 'info',
      title: 'Antes de continuar...',
      content: message,
      buttons: [
        {
          action: () => { response = true },
          dissmiss: true,
          faicon: 'fa-solid fa-thumbs-up',
          color: 'primary',
          text: 'Aceptar',
        },
        {
          dissmiss: true,
          faicon: 'fa-solid fa-thumbs-down',
          color: 'warn',
          text: 'Cancelar',
        }
      ]
    });

    return response;
  }

  openSuccess(message: string, ms?: number): Promise<void> {
    return this.open({
      content: message,
      title: 'Completado',
      type: 'success'
    }, ms);
  }

  openError(error: any, ms?: number): Promise<void> {
    const data: ModalData = {
      content: 'Error not identified',
      title: 'Failure',
      type: 'danger'
    }

    if (error instanceof HttpErrorResponse) {
      const html = Document.parseHTMLUnsafe(error.error);
      const title = html.querySelector('h2')?.textContent;
      const content = html.querySelector('p')?.textContent;
      data.title = title ?? `HTTP Fetch error ${error.status}`;
      data.content = content ?? error.message;

    } else if (error instanceof Error) {
      data.content = error.message;

    }

    return this.open(data, ms);
  }
}
