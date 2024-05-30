import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./modules/home/home.page').then(m => m.HomePage)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./modules/tabs/tabs.routes').then((m) => m.routes),
  },
];
