import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

import { ModalCreateComponent } from './modal-create';
import { CharacterService } from '@services/character';
import { Character } from '@entities/character.entity';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterComponent implements OnInit {
  characters: Character[] = [];

  constructor(
    private _characterServ: CharacterService,
    private _changeDet: ChangeDetectorRef,
    private _snackbar: MatSnackBar,
    private _dialog: MatDialog,
  ) {}

  async ngOnInit(): Promise<void> {
    try {
      this.characters = await this._characterServ.get();

    } catch (err: any) {
      console.error(err.error);
      this._snackbar.open(
        'An unexpected error has been ocurred...',
        'OK!', { duration: 1500 }
      );


    } finally {
      this._changeDet.detectChanges();
    }
  }

  async addCharacter(): Promise<void> {
    const modal = this._dialog.open(ModalCreateComponent, {
      width: 'calc(100vw - 4rem)',
      maxWidth: '1024px',
      maxHeight: 'unset',
      disableClose: true
    });

    await firstValueFrom(modal.afterClosed());
    this._changeDet.detectChanges();
  }
}
