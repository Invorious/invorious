import {
  IMetamaskService,
  IMetamaskUser,
  IUserAndPassService,
} from '@invorious/access-control';
import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { JwtPayload } from '../types/jwt-payload';

@Injectable()
export class UsersService
  implements IMetamaskService, IUserAndPassService<User, JwtPayload>
{
  users: User[] = [
    {
      id: 1,
      username: 'fulanito',
      password: '123456',
      address: 'la de pizza',
    },
    {
      id: 2,
      username: 'sutanito',
      password: '123456',
      address: 'que nos dice cosas',
    },
    {
      id: 3,
      username: 'pereseo',
      password: '123456',
      address: 'en los console.logs',
    },
  ];

  parseUser<T>(user: T): JwtPayload {
    const userParsed = user as unknown as User;
    return { id: userParsed.id };
  }

  findByAddress(address: string): IMetamaskUser {
    throw new Error('Method not implemented.');
  }

  findByUsername(username: string): User | null {
    return this.users.find(
      (user) => user.username === username.toLowerCase().trim(),
    );
  }
}
