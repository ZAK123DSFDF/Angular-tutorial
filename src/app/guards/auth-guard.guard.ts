import { inject, signal } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuardGuard = () => {
  const auth = signal<boolean>(false);
  const router = inject(Router);
  if (auth()) {
    return true;
  }
  return router.navigate(['/']);
};
