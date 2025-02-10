import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterRoutingModule } from './character-routing.module';

import { CharacterComponent } from './character.component';
import { CharacterModalComponent } from './character-modal';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { FlexCardHeaderModule } from '@shared/flex-card-header';

import { CharacterModalService } from './character-modal';

@NgModule({
  declarations: [
    CharacterComponent,
    CharacterModalComponent,
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule,

    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,

    FlexCardHeaderModule,
  ],
  providers: [
    CharacterModalService,
  ]
})
export class CharacterModule { }
