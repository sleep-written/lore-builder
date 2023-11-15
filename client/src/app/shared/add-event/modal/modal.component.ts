import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';

import { EventService } from '@services/event';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent {
  loading = false;
  form = new FormBuilder().nonNullable.group({
    title:        [ '', [ Validators.required, Validators.minLength(3) ] ],
    date:         [ null as any as Date, [ Validators.required ] ],
    description:  [ '', [ Validators.required, Validators.minLength(3) ] ],
    details:      [ '', [ Validators.required, Validators.minLength(3) ] ],
  });

  constructor(
    private _dialogRef: MatDialogRef<ModalComponent>,
    private _changeDet: ChangeDetectorRef,
    private _eventServ: EventService,

    @Inject(MAT_DIALOG_DATA)
    private _tag: string,
  ) {}

  close(): void {
    this._dialogRef.close();
  }

  async onSubmit(): Promise<void> {
    this.loading = true;
    this._changeDet.detectChanges();

    try {
      const value = this.form.getRawValue();
      await this._eventServ.create({
        tag: this._tag,
        ...value
      });

      this._dialogRef.close();
    } catch (err: any) {
      console.error(err?.error);

      this.loading = false;
      this._changeDet.detectChanges();
    }
  }
}
