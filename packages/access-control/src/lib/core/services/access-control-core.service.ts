import { Injectable, Inject } from '@nestjs/common';
import { JwtModuleOptions, JwtService } from '@nestjs/jwt';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { tokenAccessControlClient, tokenJWTConfig } from '../tokens';
import { IAccessControlClientService } from '../types/access-control-client.interface';
import { IJwtToken } from '../types/jwt.interface';

@Injectable()
export class AccessControlCoreService<
  T,
  K extends object,
> extends PassportStrategy(Strategy) {
  constructor(
    @Inject(tokenAccessControlClient)
    private accessControlService: IAccessControlClientService<T, K>,
    @Inject(tokenJWTConfig)
    jwtConfigOptions: JwtModuleOptions,
    private jwtService: JwtService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: !!jwtConfigOptions.verifyOptions?.ignoreExpiration,
      secretOrKey: jwtConfigOptions.secret,
    });
  }

  generateToken(user: T): IJwtToken {
    const payload = this.accessControlService.parseUser(user);
    const token = this.jwtService.sign(payload);
    return { accessToken: token };
  }
}
