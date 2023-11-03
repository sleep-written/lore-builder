import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CharacterRoutingModule } from './character-routing.module';

import { CharacterComponent } from './character.component';
import { ModalCreateComponent } from './modal-create';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FlexGridTileModule } from '@shared/flex-grid-tile';

@NgModule({
  declarations: [
    CharacterComponent,
    ModalCreateComponent
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
    MatFormFieldModule,

    FlexGridTileModule,
  ]
})
export class CharacterModule { }
