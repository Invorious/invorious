import { IMetamaskService } from '@invorious/access-control';
import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { LOGIN_MESSAGE } from '../interfaces/login-message';
@Injectable()
export class UsersService implements IMetamaskService<User> {
  users: User[] = [
    { id: 1, address: '0xEdca6B2e3b5DDDFf53297f3E188C2Ca6D51c587f' },
  ];

  findByAddress(address: string): User {
    return this.users.find((user) => user.address === address);
  }

  get loginMessage() {
    return LOGIN_MESSAGE;
  }
}
