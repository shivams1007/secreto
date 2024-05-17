import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./entries.page').then( m => m.EntriesPage)
  },
];
