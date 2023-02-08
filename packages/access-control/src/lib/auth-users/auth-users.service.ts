import { Injectable } from '@nestjs/common';
import { AuthUser } from './types/auth-user';

@Injectable()
export class AuthUsersService {
  private readonly users: AuthUser[] = [
    {
      id: 1,
      username: 'miguel',
      password: 'paisa',
    },
    {
      id: 2,
      username: 'jesus',
      password: 'unknown',
    },
    {
      id: 3,
      username: 'fulanito',
      password: '123456',
    },
  ];

  async findOne(username: string): Promise<AuthUser | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
