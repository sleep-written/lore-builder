import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidenavMenuComponent } from './sidenav-menu.component';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    SidenavMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    MatIconModule,
    MatListModule,
    MatButtonModule,
  ],
  exports: [
    SidenavMenuComponent
  ]
})
export class SidenavMenuModule { }
