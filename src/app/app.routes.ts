import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },
  // Check if user is logged in, if not, redirect to login page
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
];
