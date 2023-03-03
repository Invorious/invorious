import { IMetamaskService } from '@invorious/access-control';
import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { LOGIN_MESSAGE } from '../interfaces/login-message';
import { REQUEST_MESSAGE } from '../interfaces/request-message';
@Injectable()
export class UsersService implements IMetamaskService<User> {
  users: User[] = [];

  findByAddress(address: string): User {
    return this.users.find((user) => user.address === address);
  }

  findById(id: number) {
    return this.users.find((user) => user.id === id);
  }

  register(data: Partial<User>) {
    const userId =
      this.users.length > 0 ? this.users[this.users.length - 1].id + 1 : 0;
    const newUser = {
      id: userId,
      address: data.address,
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
  get requestMessage() {
    return REQUEST_MESSAGE;
  }
}
