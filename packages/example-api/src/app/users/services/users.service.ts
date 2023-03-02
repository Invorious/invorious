import { IUsersService } from '@invorious/access-control';
import { Injectable } from '@nestjs/common';

import { User } from '../entities/user.entity';

@Injectable()
export class UsersService implements IUsersService<User> {
  users: User[] = [
    {
      id: 1,
      username: 'fulanito',
      password: '$2a$12$R1Zbqq6F9mRmIoMJGjtbw.qHTccLdOS99RrPrXiUthd1ub4.Y6t6i',
      address: 'la de pizza',
    },
    {
      id: 2,
      username: 'sutanito',
      password: '$2a$12$R1Zbqq6F9mRmIoMJGjtbw.qHTccLdOS99RrPrXiUthd1ub4.Y6t6i',
      address: 'que nos dice cosas',
    },
    {
      id: 3,
      username: 'pereseo',
      password: '$2a$12$R1Zbqq6F9mRmIoMJGjtbw.qHTccLdOS99RrPrXiUthd1ub4.Y6t6i',
      address: 'en los console.logs',
    },
  ];

  async findByUsername(username: string): Promise<User | null> {
    return this.users.find(
      (user) => user.username === username.toLowerCase().trim(),
    );
  }

  async deleteUser(id: number): Promise<User[]> {
    return this.users.filter((user) => user.id !== id);
  }
}
