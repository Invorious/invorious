import { IMetamaskService } from '@invorious/access-control';
import { Injectable } from '@nestjs/common';
import { DeepPartial } from 'typeorm';
import { User } from '../entities/user.entity';
@Injectable()
export class UsersService implements IMetamaskService<User> {
  users: User[] = [];

  findByAddress(address: string): User {
    return this.users.find((user) => user.address === address);
  }

  register(data: DeepPartial<User>) {
    const userId =
      this.users.length > 0 ? this.users[this.users.length - 1].id + 1 : 0;
    const newUser: User = {
      id: userId,
      address: data.address,
      loPega: data.loPega ? data.loPega : false,
      nickname: data.nickname ? data.nickname : 'patricio',
    };
    this.users.push(newUser);
    return newUser;
  }
  update(data: DeepPartial<User>) {
    const indexOfUser = this.users.findIndex(
      (user) => user.address === data.address
    );
    this.users[indexOfUser] = {
      ...this.users[indexOfUser],
      ...data,
    };
    return this.users[indexOfUser];
  }
}
