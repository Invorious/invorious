import { Reflector } from '@nestjs/core';
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  BadRequestException,
  ForbiddenException,
  Inject,
} from '@nestjs/common';
import { Observable } from 'rxjs';

import { metaAuthorization } from '../decorators/authorization-metadata.decorator';
import {
  IAuthorizationPermission,
  IAuthorizationService,
  IAuthorizationUser,
} from '../types';
import { tokenUserService } from '../utils';

@Injectable()
export class AuthorizationGuard<T extends IAuthorizationPermission>
  implements CanActivate
{
  constructor(
    private readonly reflector: Reflector,
    @Inject(tokenUserService)
    private readonly usersService: IAuthorizationService<T>,
  ) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const permissionsMetadata: string[] = this.reflector.get(
      metaAuthorization,
      context.getHandler(),
    );

    if (!permissionsMetadata || !permissionsMetadata.length) return true;

    const req = context.switchToHttp().getRequest();
    const user: IAuthorizationUser = { id: 1 };
    // const user = req.user as IAuthorizationUser;

    if (!user) throw new BadRequestException('User not found');

    const permissions = this.usersService.findPermissionsById(user.id);

    for (const permissionMetadata of permissionsMetadata) {
      const existPermission = permissions.find(
        ({ action, feature, possession }) =>
          permissionMetadata.toUpperCase() ===
          `${feature}:${action}:${possession}`.toUpperCase(),
      );
      if (!existPermission) {
        throw new ForbiddenException(
          `The user ${user.id} need this permission ${permissionMetadata}`,
        );
      }
    }
    return true;
  }
}
