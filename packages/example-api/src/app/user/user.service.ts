import { IMetamaskService } from '@invorious/access-control';
import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService implements IMetamaskService<User> {
  users: User[] = [
    { id: 1, address: '0xEdca6B2e3b5DDDFf53297f3E188C2Ca6D51c587f' },
  ];

  findByAddress(address: string): User {
    return this.users.find((user) => user.address === address);
  }

  register(data: Partial<User>) {
    const id = this.users[this.users.length - 1].id + 1;
    const newUser: User = {
      id,
      address: data.address,
      ...data,
    };
    this.users.push(newUser);
    return newUser;
  }

  findById(id: number): User {
    return this.users.find((user) => user.id === id);
  }

  get loginMessage() {
    return 'Welcome back you beatiful bastard, please sign this message to login, xoxo in your butty';
  }
}
