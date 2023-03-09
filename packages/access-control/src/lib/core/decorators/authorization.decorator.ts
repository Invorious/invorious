import { applyDecorators, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthorizationGuard } from '../guards/authorization.guard';
import { IAuthorizationPermission } from '../types/authorization.interface';
import { AuthorizationMetadata } from './authorization-metadata.decorator';

export function Authorization<T extends IAuthorizationPermission>(
  ...permissions: string[]
) {
  return applyDecorators(
    AuthorizationMetadata(...permissions),
    UseGuards(AuthGuard('jwt'), AuthorizationGuard<T>),
  );
}
