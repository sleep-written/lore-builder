import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterDetailsRoutingModule } from './character-details-routing.module';

import { EventComponent } from './event';
import { CharacterDetailsComponent } from './character-details.component';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';

import { AddEventModule } from '@shared/add-event';
import { FlexGridTileModule } from '@shared/flex-grid-tile';
import { CharacterCardModule } from '@shared/character-card';

@NgModule({
  declarations: [
    EventComponent,
    CharacterDetailsComponent,
  ],
  imports: [
    CommonModule,
    CharacterDetailsRoutingModule,
    
    MatCardModule,
    MatIconModule,
    MatChipsModule,
    MatButtonModule,

    AddEventModule,
    FlexGridTileModule,
    CharacterCardModule,
  ]
})
export class CharacterDetailsModule { }
