import { Injectable, Inject } from '@nestjs/common';
import { JwtModuleOptions, JwtService } from '@nestjs/jwt';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import {
  tokenAccessControlClient,
  tokenJWTConfig,
  tokenUserService,
} from '../tokens';
import { IAccessControlClientService } from '../types/access-control-client.interface';
import { IJwtPayload } from '../types/jwt-payload.interface';
import { IJwtToken } from '../types/jwt.interface';
import { IStrategyService } from '../types/strategy-service.interface';

@Injectable()
export class AccessControlCoreService<
  T,
  K extends IJwtPayload,
> extends PassportStrategy(Strategy) {
  constructor(
    @Inject(tokenAccessControlClient)
    private accessControlService: IAccessControlClientService<T, K>,
    @Inject(tokenJWTConfig)
    jwtConfigOptions: JwtModuleOptions,
    @Inject(tokenUserService)
    private userService: IStrategyService<T>,
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

  validate(payload: K) {
    const user = this.userService.findById(payload.id);
    return { ...payload, ...user };
  }
}
