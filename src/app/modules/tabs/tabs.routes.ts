import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/entries',
        pathMatch: 'full',
      },
      {
        path: 'entries',
        loadChildren: () => import('../entries/entries.routes').then((m) => m.routes),
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings.routes').then((m) => m.routes),
      },
      {
        path: 'password',
        loadChildren: () => import('../password/password.routes').then((m) => m.routes),
      }
    ],
  },

];
