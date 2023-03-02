import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ACCESS_CONTROL_SERVICE } from '../providers/access-control-service';
import { JWT_CONFIG_OPTIONS } from '../providers/jwt-config-service';
import { AccessControlCoreModuleConfig } from '../types/acces-control-core-module-config';
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
    return { accessToken: token };
  }
}
