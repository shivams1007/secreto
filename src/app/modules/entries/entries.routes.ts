import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../entries/entries.page').then( m => m.EntriesPage)
  },
];