import { IMetamaskService } from '@invorious/access-control';
import { Injectable } from '@nestjs/common';
import { DeepPartial } from 'typeorm';
import { User } from '../entities/user.entity';
import { LOGIN_MESSAGE } from '../interfaces/login-message';
@Injectable()
export class UsersService implements IMetamaskService<User> {
  users: User[] = [
    { id: 0, address: '0xEdca6B2e3b5DDDFf53297f3E188C2Ca6D51c587f' },
  ];

  findByAddress(address: string): User {
    return this.users.find((user) => user.address === address);
  }

  register(data: DeepPartial<User>) {
    const userId = this.users[this.users.length - 1].id + 1;
    const newUser = {
      id: userId,
      address: data.address,
      ...data,
    };
    this.users.push(newUser);
    return newUser;
  }
  get loginMessage() {
    return LOGIN_MESSAGE;
  }
}
