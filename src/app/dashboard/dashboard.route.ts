import { Routes } from '@angular/router';

const dashboardRoutes: Routes = [
  {
    path: 'servicios',
    loadComponent: () => import('./servicios/pages/service-page'),
  },
];

export default dashboardRoutes;