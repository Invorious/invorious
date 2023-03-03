import {
  Inject,
  Injectable,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import * as bcrypt from 'bcrypt';

import { IUsernameAndPassword } from '../types/username-and-password.interface';
import { IUsersService } from '../types/user-service';
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
    private userAndPassService: IUsersService<IUsernameAndPassword>,
    private coreService: AccessControlCoreService<IUsernameAndPassword, K>,
  ) {
    super();
  }

  async validate(username: string, password: string) {
    const user = await this.validateUser(username, password);
    if (!user) throw new NotFoundException('User not found');
    return this.coreService.generateToken(user);
  }

  async validateUser(
    username: string,
    pass: string,
  ): Promise<IUsernameAndPassword | null> {
    const user = this.userAndPassService.findByUsername(username);
    if (user && (await this.validatePassword(pass, user))) return user;
    return null;
  }

  async validatePassword(
    pass: string,
    user: IUsernameAndPassword,
  ): Promise<boolean> {
    if (await bcrypt.compare(pass, user.password)) return true;
    throw new UnauthorizedException(
      'User not allowed, please check your credentials',
    );
  }

  async login(credentials: IUsernameAndPassword): Promise<JwtToken> {
    return await this.validate(credentials.username, credentials.password);
  }
}
