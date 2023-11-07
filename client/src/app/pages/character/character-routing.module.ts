import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './character.component';

const routes: Routes = [
  {
    path: '',
    component: CharacterComponent
  },
  {
    path: ':tag',
    loadChildren: () => import('./character-details').then(m => m.CharacterDetailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule { }
