import { IMetamaskService } from '@invorious/access-control';
import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
@Injectable()
export class UsersService implements IMetamaskService<User> {
  users: User[] = [
    { id: 1, address: '0x1' },
    { id: 2, address: '0x2' },
    { id: 3, address: '0x3' },
    { id: 0, address: '0xEdca6B2e3b5DDDFf53297f3E188C2Ca6D51c587f' },
  ];

  findByAddress(address: string): User {
    return this.users.find((user) => user.address === address);
  }
}
