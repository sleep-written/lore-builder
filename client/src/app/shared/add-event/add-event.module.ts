import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ModalComponent } from './modal';
import { AddEventComponent } from './add-event.component';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { CommonInputModule } from '@shared/common-input';
import { FlexGridTileModule } from '@shared/flex-grid-tile';

@NgModule({
  declarations: [
    ModalComponent,
    AddEventComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatDatepickerModule,

    CommonInputModule,
    FlexGridTileModule,
  ],
  exports: [
    AddEventComponent
  ]
})
export class AddEventModule { }
