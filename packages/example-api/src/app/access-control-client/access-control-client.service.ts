import { IAccessControlClientService } from '@invorious/access-control';
import { Injectable } from '@nestjs/common';
import { User } from '../user/user.entity';

interface JwtPayload {
  id: number;
}

@Injectable()
export class AccessControlClientService
  implements IAccessControlClientService<User, JwtPayload>
{
  parseUser(user: User): JwtPayload {
    throw new Error('Method not implemented.');
  }
}
