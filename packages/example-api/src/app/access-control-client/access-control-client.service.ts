import {
  IAccessControlClientService,
  IJwtPayload,
} from '@invorious/access-control';
import { Injectable } from '@nestjs/common';
import { User } from '../user/user.entity';

@Injectable()
export class AccessControlClientService
  implements IAccessControlClientService<User, IJwtPayload>
{
  parseUser(user: User): IJwtPayload {
    return { id: user.id };
  }
}
