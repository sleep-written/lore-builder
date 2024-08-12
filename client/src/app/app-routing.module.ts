import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'universe',
    loadChildren: () =>
      import('./pages/universe').then((m) => m.UniverseModule),
  },
  {
    path: 'character',
    loadChildren: () =>
      import('./pages/character').then((m) => m.CharacterModule),
  },
  {
    path: '',
    loadChildren: () => import('./pages/index').then((m) => m.IndexModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./pages/not-found').then((m) => m.NotFoundModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
