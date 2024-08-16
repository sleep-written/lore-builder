import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UniverseRoutingModule } from './universe-routing.module';

import { UniverseComponent } from './universe.component';
import { UniverseModalService } from './universe-modal';
import { UniverseModalComponent } from './universe-modal';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';

import { ModalModule } from '@shared/modal';
import { FlexGridTileModule } from '@shared/flex-grid-tile';

@NgModule({
  declarations: [
    UniverseComponent,
    UniverseModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UniverseRoutingModule,

    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatFormFieldModule,

    ModalModule,
    FlexGridTileModule,
  ],
  providers: [
    UniverseModalService
  ]
})
export class UniverseModule { }
