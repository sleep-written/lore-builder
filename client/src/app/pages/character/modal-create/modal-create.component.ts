import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component } from '@angular/core';

import { CharacterService } from '@services/character';

@Component({
  selector: 'app-modal-create',
  templateUrl: './modal-create.component.html',
  styleUrls: ['./modal-create.component.scss']
})
export class ModalCreateComponent {
  form = new FormBuilder().nonNullable.group({
    tag:          [ '', [ Validators.required, Validators.minLength(1) ] ],
    name:         [ '', [ Validators.required, Validators.minLength(3) ] ],
    description:  [ '', [ Validators.required, Validators.minLength(3) ] ]
  });

  constructor(
    private _characterServ: CharacterService,
    private _dialogRef: MatDialogRef<ModalCreateComponent>,
    private _snackbar: MatSnackBar,
  ) {}

  close(): void {
    this._dialogRef.close();
  }

  async save(): Promise<void> {
    try {
      const data = this.form.getRawValue();
      await this._characterServ.create(data);

      this._dialogRef.close();
      this._snackbar.open(
        'Saved successfully!',
        'OK', { duration: 1500 }
      );
    } catch (err: any) {
      console.error(err?.error);
      this._snackbar.open(
        'An unexpected error has been occurred...',
        'OK', { duration: 1500 }
      );
    }
  }
}
