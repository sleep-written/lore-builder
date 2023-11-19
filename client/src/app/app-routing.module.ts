import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/index').then(m => m.IndexModule)
  },
  {
    path: 'character',
    loadChildren: () => import('./pages/character').then(m => m.CharacterModule)
  },
  {
    path: 'event/:id',
    loadChildren: () => import('./pages/event').then(m => m.EventModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/not-found').then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
