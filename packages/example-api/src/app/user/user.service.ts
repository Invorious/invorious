import {
  IAuthorizationService,
  IGoogleAccountService,
} from '@invorious/access-control';
import { Injectable } from '@nestjs/common';
import { Permission } from '../permission/permission.entity';
import { User } from './user.entity';
import { Profile } from 'passport-google-oauth20';

@Injectable()
export class UserService
  implements IAuthorizationService<Permission>, IGoogleAccountService<User>
{
  users: User[] = [
    {
      id: 1,
      name: 'Jesus',
      email: 'aaa@asdsaasd.ad',
      googleId: '22222',
      permissions: [
        {
          feature: 'USER',
          action: 'READ',
          possession: 'ANY',
        },
      ],
    },
  ];

  findPermissionsById(id: number) {
    const user = this.users.find((user) => user.id == id);
    return user.permissions;
  }

  findByGoogleId(googleId: string): User {
    return this.users.find((user) => user.googleId === googleId);
  }
  registerByGoogle(user: Profile): void {
    this.users.push({
      name: 'aaa',
      permissions: [],
      email: user.emails[0].value,
      googleId: user.id,
      id: Date.now(),
    });
  }
}
