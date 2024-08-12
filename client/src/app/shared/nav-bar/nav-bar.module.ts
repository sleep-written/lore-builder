import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

import { NavBarComponent } from './nav-bar.component';
import { ChildNodeComponent } from './child-node';
import { NestedContainerComponent } from './nested-container';

@NgModule({
  declarations: [
    NavBarComponent,
    ChildNodeComponent,
    NestedContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    MatButtonModule,
    MatExpansionModule,
  ],
  exports:[
    NavBarComponent,
  ]
})
export class NavBarModule { }
