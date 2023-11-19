import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ModalCreateComponent } from './modal-create';
import { AddCharacterComponent } from './add-character.component';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { CommonInputModule } from '@shared/common-input';
import { FlexGridTileModule } from '@shared/flex-grid-tile';

@NgModule({
  declarations: [
    ModalCreateComponent,
    AddCharacterComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,

    CommonInputModule,
    FlexGridTileModule,
  ],
  exports: [
    AddCharacterComponent,
  ]
})
export class AddCharacterModule { }
