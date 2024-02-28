import { CanActivateFn, Router } from '@angular/router';
import { PermissionService } from '../servies/permission.service';
import { inject } from '@angular/core';

export const pageGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const service = inject(PermissionService);
  return true;
};
