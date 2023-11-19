import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventRoutingModule } from './event-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { EventComponent } from './event.component';
import { MainEventComponent } from './main-event';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { CommonInputModule } from '@shared/common-input';
import { FlexGridTileModule } from '@shared/flex-grid-tile';

@NgModule({
  declarations: [
    EventComponent,
    MainEventComponent,
  ],
  imports: [
    CommonModule,
    EventRoutingModule,
    ReactiveFormsModule,

    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,

    CommonInputModule,
    FlexGridTileModule,
  ]
})
export class EventModule { }
