import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EventPanelComponent } from './event-panel.component';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { CommonInputModule } from '@shared/common-input';
import { FlexGridTileModule } from '@shared/flex-grid-tile';

@NgModule({
  declarations: [
    EventPanelComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,

    CommonInputModule,
    FlexGridTileModule,
  ],
  exports: [
    EventPanelComponent
  ]
})
export class EventPanelModule { }
