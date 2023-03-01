import { IAccessControlCoreService } from '@invorious/access-control';
import { Injectable } from '@nestjs/common';
import { User } from '../../users/entities/user.entity';
import { JwtPayload } from '../../users/interfaces/jwt-payload';

@Injectable()
export class AccessControlService
  implements IAccessControlCoreService<User, JwtPayload>
{
  //placeholder function for authentication
  getRolesById(id: number): string[] {
    return [''];
  }
  parseUser(user): JwtPayload {
    return { id: user.id };
  }
}
