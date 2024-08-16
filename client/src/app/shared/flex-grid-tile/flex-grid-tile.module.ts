import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatGridListModule } from '@angular/material/grid-list';
import { FlexGridTileDirective } from './flex-grid-tile.directive';

@NgModule({
  declarations: [
    FlexGridTileDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MatGridListModule,
    FlexGridTileDirective
  ]
})
export class FlexGridTileModule { }
