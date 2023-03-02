import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { ACCESS_CONTROL_SERVICE } from '../providers/service.provider';
import { JWT_CONFIG_OPTIONS } from '../providers/service.provider';
import { AccessControlCoreModuleConfig } from '../types/access-control-core-module-config';
import { IAccessControlCoreService } from '../types/access-control-core-service';
import { JwtToken } from '../types/jwt-token';

@Injectable()
export class AccessControlCoreService<
  T,
  K extends object,
> extends PassportStrategy(Strategy) {
  constructor(
    @Inject(ACCESS_CONTROL_SERVICE)
    private accessControlService: IAccessControlCoreService<T, K>,
    @Inject(JWT_CONFIG_OPTIONS)
    jwtConfigOptions: AccessControlCoreModuleConfig,
    private jwtService: JwtService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtConfigOptions.jwtSecret,
      ignoreExpiration: !!jwtConfigOptions.jwtOptions.expiresIn,
    });
  }

  generateToken(user: T): JwtToken {
    const payload = this.accessControlService.parseUser(user);
    const token = this.jwtService.sign(payload);
    return { access_token: token };
  }

  validate(payload: K) {
    return payload;
  }
}
