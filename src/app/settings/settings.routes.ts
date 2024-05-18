import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../settings/settings.page').then( m => m.SettingsPage)
  },
];