import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

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
    private _dialogRef: MatDialogRef<ModalCreateComponent>,
  ) {}

  close(): void {
    this._dialogRef.close();
  }
}
