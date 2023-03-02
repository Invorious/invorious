import { IMetamaskService } from '@invorious/access-control';
import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { LOGIN_MESSAGE } from '../interfaces/login-message';
@Injectable()
export class UsersService implements IMetamaskService<User> {
  users: User[] = [];

  findByAddress(address: string): User {
    return this.users.find((user) => user.address === address);
  }

  register(data: Partial<User>) {
    const userId = this.users[this.users.length - 1].id + 1;
    const newUser = {
      id: userId,
      address: data.address,
      loPega: data.loPega ? data.loPega : false,
      nickname: data.nickname ? data.nickname : 'patricio',
    };
    this.users.push(newUser);
    return newUser;
  }

  update(data: Partial<User>) {
    const indexOfUser = this.users.findIndex(
      (user) => user.address === data.address,
    );
    this.users[indexOfUser] = {
      ...this.users[indexOfUser],
      ...data,
    };
    return this.users[indexOfUser];
  }

  get loginMessage() {
    return LOGIN_MESSAGE;
  }
}
