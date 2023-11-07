import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CharacterService } from '@services/character';
import { Character } from '@entities/character.entity';

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
}
