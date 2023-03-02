import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import * as bcrypt from 'bcrypt';

import { IUserAndPass } from '../types/user-and-pass.interface';
import { IUsersService } from '../types/users-service';
import { AccessControlCoreService } from '../../../core/services/access-control-core.service';
import { USER_SERVICE } from '../../../core/providers/service.provider';
import { JwtToken } from '../../../core/types/jwt-token';

@Injectable()
export class LocalStrategyService<K extends object> extends PassportStrategy(
  Strategy,
  'local',
) {
  constructor(
    @Inject(USER_SERVICE)
    private usersService: IUsersService<IUserAndPass>,
    private coreService: AccessControlCoreService<IUserAndPass, K>,
  ) {
    super();
  }

  async validate(username: string, password: string): Promise<JwtToken> {
    const payload = await this.validateUser(username, password);
    if (!payload)
      throw new UnauthorizedException(
        'User not allowed, please check your credentials',
      );
    return this.coreService.generateToken(payload);
  }

  async validateUser(
    username: string,
    pass: string,
  ): Promise<IUserAndPass | null> {
    const user = await this.usersService.findByUsername(username);
    if (user && (await this.validatePassword(pass, user))) return user;
    return null;
  }

  async validatePassword(pass: string, user: IUserAndPass): Promise<boolean> {
    return await bcrypt.compare(pass, user.password);
  }

  async login(credentials: IUserAndPass): Promise<JwtToken> {
    return await this.validate(credentials.username, credentials.password);
  }

  async delete(id: number) {
    return await this.usersService.deleteUser(id);
  }
}
