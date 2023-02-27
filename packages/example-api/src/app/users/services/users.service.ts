import { IMetamaskService } from '@invorious/access-control';
import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { JwtPayload } from '../interfaces/jwt-payload';
@Injectable()
export class UsersService implements IMetamaskService<User, JwtPayload> {
  users: User[] = [
    { id: 1, address: '0x1', name: 'Miguel', loPega: true },
    { id: 2, address: '0x2', name: 'Angel', loPega: false },
    { id: 3, address: '0x3', name: 'Andres', loPega: false },
  ];

  findByAddress(address: string): User {
    return this.users.find((user) => user.address === address);
  }

  parseUser(user): JwtPayload {
    return { id: user.id };
  }
}
