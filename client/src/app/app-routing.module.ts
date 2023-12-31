import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/index').then(m => m.IndexModule)
  },
  {
    path: 'stories',
    loadChildren: () => import('./pages/stories').then(m => m.StoriesModule)
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
