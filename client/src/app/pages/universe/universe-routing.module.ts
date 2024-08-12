import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniverseComponent } from './universe.component';

const routes: Routes = [{ path: '', component: UniverseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniverseRoutingModule { }
