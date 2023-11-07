import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CharacterRoutingModule } from './character-routing.module';

import { CharacterComponent } from './character.component';
import { ModalCreateComponent } from './character-create/modal-create';
import { CharacterCardComponent } from './character-card';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';

import { CommonInputModule } from '@shared/common-input';
import { FlexGridTileModule } from '@shared/flex-grid-tile';
import { CharacterCreateComponent } from './character-create/character-create.component';

@NgModule({
  declarations: [
    CharacterComponent,
    ModalCreateComponent,
    CharacterCardComponent,
    CharacterCreateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CharacterRoutingModule,

    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatFormFieldModule,

    CommonInputModule,
    FlexGridTileModule,
  ]
})
export class CharacterModule { }
