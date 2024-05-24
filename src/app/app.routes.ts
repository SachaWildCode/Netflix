import { Routes } from '@angular/router';
import { LoginPageComponent } from './features/auth/pages/login-page/login-page.component';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },
  {
    path: 'search',
    component: LoginPageComponent,
  },
  // Check if user is logged in, if not, redirect to login page
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
];
