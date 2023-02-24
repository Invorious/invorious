import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { AuthUser } from './entities/auth-user.entity';
import { IRegisterUserDto } from '../auth/types/auth.interfaces';

@Injectable()
export class AuthUsersService {
  constructor(
    @InjectRepository(AuthUser)
    private readonly authUserRepository: Repository<AuthUser>,
  ) {}

  async findByUsername(username: string): Promise<AuthUser | null> {
    return this.authUserRepository.findOneBy({
      username: username.toLowerCase().trim(),
    });
  }

  async create(authUserDto: IRegisterUserDto): Promise<AuthUser> {
    const authUser = new AuthUser(
      authUserDto.username.trim(),
      authUserDto.password.trim(),
    );

    authUserDto.encryptedPassword
      ? authUser.setEncryptedPassword(authUserDto.password)
      : authUser.setEncryptedPassword(this.createHash(authUserDto.password));

    const authUserCreated = await this.authUserRepository.save(authUser);

    return authUserCreated;
  }

  private createHash = (value: string) => bcrypt.hashSync(value, 12);
}
