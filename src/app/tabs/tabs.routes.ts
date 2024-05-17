import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/entries',
        pathMatch: 'full',
      },
      {
        path: 'entries',
        loadChildren: () => import('../entries/entries.routes').then((m) => m.routes),
      },
    ],
  },
  {
    path: '',
    redirectTo: '/entries',
    pathMatch: 'full',
  },
];
