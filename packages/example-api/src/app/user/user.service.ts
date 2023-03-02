import { IAuthorizationService } from '@invorious/authorization';
import { Injectable } from '@nestjs/common';
import { Permission } from '../permission/permission.entity';
import { User } from './user.entity';

@Injectable()
export class UserService implements IAuthorizationService<Permission> {
  users: User[] = [
    {
      id: 1,
      name: 'Jesus',
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
}
