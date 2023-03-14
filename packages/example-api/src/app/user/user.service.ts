import {
  IAuthorizationService,
  IGoogleAccountService,
  IMetamaskService,
  IUsersService,
} from '@invorious/access-control';

import { Permission } from '../permission/permission.entity';
import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService
  implements
    IAuthorizationService<Permission>,
    IGoogleAccountService<User>,
    IMetamaskService<User>,
    IUsersService<User>
{
  users: User[] = [
    {
      id: 1,
      name: 'Jesus',
      address: 'aaa',
      password: 'aaa',
      username: 'aaaa',
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

  findByAddress(address: string): User {
    return this.users.find((user) => user.address === address);
  }

  update(id: number, data: Partial<User>) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, username: data.username };
      }
      return user;
    });
    return this.findById(id);
  }

  register(data: Partial<User>) {
    const id = this.users[this.users.length - 1].id + 1;
    const newUser: User = {
      id,
      address: data.address,
      username: data.username,
      name: data.name,
      permissions: data.permissions,
      password: data.password,
      email: data.email,
      googleId: data.googleId,
    };
    this.users.push(newUser);
    return newUser;
  }

  findById(id: number): User {
    return this.users.find((user) => user.id === id);
  }

  async findByUsername(username: string) {
    return this.users.find(
      (user) => user.username === username.toLowerCase().trim(),
    );
  }

  async deleteUser(id: number) {
    return this.users.filter((user) => user.id !== id);
  }

  findByGoogleId(googleId: string): User {
    return this.users.find((user) => user.googleId === googleId);
  }

  get loginMessage() {
    return 'Welcome back you beatiful bastard, please sign this message to login, xoxo in your butty';
  }
}
