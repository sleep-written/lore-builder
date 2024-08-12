import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniverseRoutingModule } from './universe-routing.module';
import { UniverseComponent } from './universe.component';


@NgModule({
  declarations: [
    UniverseComponent
  ],
  imports: [
    CommonModule,
    UniverseRoutingModule
  ]
})
export class UniverseModule { }
