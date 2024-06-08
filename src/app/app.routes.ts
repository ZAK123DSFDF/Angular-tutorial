import { Routes } from '@angular/router';
import { authGuardGuard } from './guards/auth-guard.guard';

export const routes: Routes = [
  {
    path: 'check',
    loadComponent: async () => {
      const m = await import('./check/check.component');
      return m.CheckComponent;
    },
    canActivate: [authGuardGuard],
  },
  {
    path: 'check/:id',
    loadComponent: async () => {
      const m = await import('./check/check.component');
      return m.CheckComponent;
    },
  },
];
