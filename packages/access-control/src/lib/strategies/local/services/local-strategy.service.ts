import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { IUserAndPass } from '../types/user-and-pass.interface';
import { IUserAndPassService } from '../types/user-and-pass-service';
import { USER_SERVICE } from '../../../core/providers/service.provider';
import { IUserAndPassPayload } from '../types/user-and-pass-payload.interface';

@Injectable()
export class LocalStrategyService<K> extends PassportStrategy(
  Strategy,
  'local',
) {
  constructor(
    @Inject(USER_SERVICE)
    private userAndPassService: IUserAndPassService<IUserAndPass, K>,
    private jwtService: JwtService,
  ) {
    super();
  }

  async validate(username: string, password: string): Promise<K> {
    const user = await this.validateUser(username, password);
    if (!user)
      throw new UnauthorizedException(
        'User not allowed, please check your credentials',
      );
    return this.userAndPassService.parseUser(user);
  }

  async validateUser(
    username: string,
    pass: string,
  ): Promise<IUserAndPass | null> {
    const user = this.userAndPassService.findByUsername(username);
    if (user && pass === user.password) return user;
    return null;
  }

  async login(user: IUserAndPass) {
    const payload = await this.validate(user.username, user.password);
    return {
      access_token: this.jwtService.sign(payload as IUserAndPassPayload),
    };
  }
}
