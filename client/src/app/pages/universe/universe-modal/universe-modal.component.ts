import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';

import { UniverseService } from '@services/universe';
import { ModalService } from '@shared/modal';
import { Universe } from '@entities/universe';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-universe-modal',
    templateUrl: './universe-modal.component.html',
    styleUrl: './universe-modal.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class UniverseModalComponent {
  private _universeServ = inject(UniverseService);
  private _dialogData? = inject<Universe>(MAT_DIALOG_DATA);
  private _modalServ = inject(ModalService);
  private _dialogRef = inject<MatDialogRef<UniverseModalComponent, Universe>>(MatDialogRef);
  private _changeDet = inject(ChangeDetectorRef);
  private _snackbar = inject(MatSnackBar);

  get isNew(): boolean {
    return typeof this._dialogData?.id !== 'number';
  }

  loading = false;
  form = new FormBuilder().nonNullable.group({
    id:           [ this._dialogData?.id ],
    name:         [
      this._dialogData?.name ?? '',
      [ Validators.required, Validators.minLength(3) ]
    ],
    description:  [
      this._dialogData?.description ?? '',
      [ Validators.required, Validators.minLength(3) ]
    ],
  });

  async save(): Promise<void> {
    if (this.form.pristine || this.loading){
      return;
    }

    try {
      this.loading = true;
      this._changeDet.detectChanges();

      const formValue = this.form.getRawValue();
      const universe = await this._universeServ.set(formValue);

      this._dialogRef.close(universe);
      this._snackbar.open(
        'Changes saved sucessfully!',
        'OK', { duration: 1500 }
      );

    } catch (err) {
      this.loading = false;
      this._changeDet.detectChanges();
      await this._modalServ.openError(err);
    }
  }

  cancel(): void {
    this._dialogRef.close();
  }
}
