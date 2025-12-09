import { Routes } from '@angular/router';
import { LoginPage } from './auth/page/login-page';
import { DashboardLayout } from './shared/layouts/dashboard-layout';

export const routes: Routes = [
  {
    path: '',
    component: LoginPage,
  },
  {
    path: 'dashboard',
    component: DashboardLayout,
    loadChildren: () => import('./dashboard/dashboard.route'),
  },
];
