import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { AuthUser } from './entities/auth-user.entity';
// import { AuthUser } from './types/auth-user';
import { IRegisterUserDto } from '../auth/types/auth.interfaces';

@Injectable()
export class AuthUsersService {
  constructor(
    @InjectRepository(AuthUser)
    private readonly authUserRepository: Repository<AuthUser>,
  ) {}

  private readonly users: any[] = [
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

  async findByUsername(username: string): Promise<AuthUser | null> {
    return this.users.find(
      (authUser: { username: string }) =>
        authUser.username === username.toLowerCase().trim(),
    );
  }

  async create(authUserDto: IRegisterUserDto): Promise<AuthUser> {
    const authUser = new AuthUser(authUserDto.username, authUserDto.password);

    authUserDto.encryptedPassword
      ? authUser.setEncryptedPassword(authUserDto.password)
      : authUser.setEncryptedPassword(this.createHash(authUserDto.password));

    const authUserCreated = await this.authUserRepository.save(authUser);

    return authUserCreated;
  }

  private createHash = (value: string) => bcrypt.hashSync(value, 12);
}
