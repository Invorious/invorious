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
import { tokenUserService } from '../../../core/tokens';
import { IJwtToken } from '../../../core/types/jwt.interface';
import { IJwtPayload } from '../../../core/types/jwt-payload.interface';

@Injectable()
export class LocalStrategyService<
  K extends IJwtPayload,
> extends PassportStrategy(Strategy, 'local') {
  constructor(
    @Inject(tokenUserService)
    private usersService: IUsersService<IUsernameAndPassword>,
    private coreService: AccessControlCoreService<IUsernameAndPassword, K>,
  ) {
    super();
  }

  async validate(username: string, password: string): Promise<IJwtToken> {
    const user = await this.validateUser(username, password);
    if (!user) throw new NotFoundException('User not found');
    return this.coreService.generateToken(user);
  }

  async validateUser(
    username: string,
    pass: string,
  ): Promise<IUsernameAndPassword | null> {
    const validUser = await this.usersService.findByUsername(username);
    if (validUser && (await this.validatePassword(pass, validUser)))
      return validUser;
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

  async login(credentials: IUsernameAndPassword): Promise<IJwtToken> {
    return await this.validate(credentials.username, credentials.password);
  }
}
