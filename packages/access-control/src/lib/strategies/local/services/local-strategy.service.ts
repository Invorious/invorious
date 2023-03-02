import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import * as bcrypt from 'bcrypt';

import { IUserAndPass } from '../types/user-and-pass.interface';
import { IUserAndPassService } from '../types/user-and-pass-service';
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
    private userAndPassService: IUserAndPassService<IUserAndPass>,
    private coreService: AccessControlCoreService<IUserAndPass, K>,
  ) {
    super();
  }

  async validate(username: string, password: string) {
    const user = await this.validateUser(username, password);
    if (!user)
      throw new UnauthorizedException(
        'User not allowed, please check your credentials',
      );
    return this.coreService.generateToken(user);
  }

  async validateUser(
    username: string,
    pass: string,
  ): Promise<IUserAndPass | null> {
    const user = this.userAndPassService.findByUsername(username);
    if (user && (await this.validatePassword(pass, user))) return user;
    return null;
  }

  async validatePassword(pass: string, user: IUserAndPass): Promise<boolean> {
    return await bcrypt.compare(pass, user.password);
  }

  async login(credentials: IUserAndPass): Promise<JwtToken> {
    return await this.validate(credentials.username, credentials.password);
  }
}
