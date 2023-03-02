import { IAccessControlCoreService } from '@invorious/access-control';
import { Injectable } from '@nestjs/common';

import { User } from '../../users/entities/user.entity';
import { JwtPayload } from '../../users/types/jwt-payload.interface';

@Injectable()
export class AccessControlService
  implements IAccessControlCoreService<User, JwtPayload>
{
  getRolesById(id: number): string[] {
    return [''];
  }

  parseUser(user): JwtPayload {
    return { id: user.id };
  }
}
