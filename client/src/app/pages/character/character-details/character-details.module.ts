import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterDetailsRoutingModule } from './character-details-routing.module';

import { CharacterDetailsComponent } from './character-details.component';

import { AddEventModule } from '@shared/add-event';
import { EventPanelModule } from '@shared/event-panel';
import { FlexGridTileModule } from '@shared/flex-grid-tile';

@NgModule({
  declarations: [
    CharacterDetailsComponent
  ],
  imports: [
    CommonModule,
    CharacterDetailsRoutingModule,
    
    AddEventModule,
    EventPanelModule,
    FlexGridTileModule,
  ]
})
export class CharacterDetailsModule { }
