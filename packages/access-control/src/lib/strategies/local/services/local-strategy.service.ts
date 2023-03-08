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
import { IJwtPayload, IJwtToken } from '../../../core/types/jwt.interface';

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
    const payload = await this.validateUser(username, password);
    if (!payload) throw new NotFoundException('User not found');
    return this.coreService.generateToken(payload);
  }

  async validateUser(
    username: string,
    pass: string,
  ): Promise<IUsernameAndPassword | null> {
    const user = await this.usersService.findByUsername(username);
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

  async login(credentials: IUsernameAndPassword): Promise<IJwtToken> {
    return await this.validate(credentials.username, credentials.password);
  }

  async delete(id: number) {
    const user = await this.usersService.findById(id);
    if (user) return await this.usersService.deleteUser(id);
    throw new NotFoundException('User not found');
  }
}
