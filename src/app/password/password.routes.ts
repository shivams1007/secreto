import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../password/password.page').then( m => m.PasswordPage)
  },
];