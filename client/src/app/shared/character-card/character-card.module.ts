import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CharacterCardComponent } from './character-card.component';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    CharacterCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    MatCardModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    CharacterCardComponent
  ]
})
export class CharacterCardModule { }
