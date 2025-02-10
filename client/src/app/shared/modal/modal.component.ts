import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';

import { ModalData } from './interfaces';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
    standalone: false
})
export class ModalComponent {
  constructor(
    private _dialogRef: MatDialogRef<ModalComponent>,

    @Inject(MAT_DIALOG_DATA)
    public modalData: Required<ModalData>,
  ) {
    if (this.modalData.buttons.length === 0) {
      this.modalData.buttons.push({
        dissmiss: true,
        faicon: 'fa-solid fa-xmark',
        color: 'primary',
        text: 'Cerrar'
      });
    }
  }

  async triggerAction(
    dissmiss?: boolean,
    action?: () => (void | Promise<void>)
  ): Promise<void> {
    if (action) {
      await action();
    }

    if (dissmiss) {
      this._dialogRef.close();
    }
  }
}
