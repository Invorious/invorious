import { applyDecorators, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthorizationGuard } from '../guards/authorization.guard';
import { IAuthorizationPermission } from '../types';
import { AuthorizationMetadata } from './authorization-metadata.decorator';

export function Authorization<T extends IAuthorizationPermission>(
  ...permissions: string[]
) {
  return applyDecorators(
    AuthorizationMetadata(...permissions),
    UseGuards(AuthorizationGuard<T>),
    // UseGuards(AuthGuard(), AuthorizationGuard<T>),
  );
}
