import { Component, Inject } from '@angular/core';
import { ModalButton, ModalOptions } from './interfaces';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  constructor(
    private _dialogRef: MatDialogRef<ModalComponent>,

    @Inject(MAT_DIALOG_DATA)
    public options: ModalOptions,
  ) {}

  async onButtonClick(button: ModalButton): Promise<void> {
    try {
      // Launch action
      if (button.action) {
        await button.action();
      }

    } catch (err) {
      // Unhandled error
      console.error(err);

    } finally {
      // Close modal
      if (!button.hold) {
        this._dialogRef.close();
      }

    }
  }
}
