import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, Inject } from '@nestjs/common';
import { tokenAccessControlClient } from '../tokens';
import { tokenJWTConfig } from '../tokens';
import { JwtModuleOptions, JwtService } from '@nestjs/jwt';
import { JwtToken } from '../types/jwt.interface';
import { IAccessControlClientService } from '../types/access-control.interface';

@Injectable()
export class JwtStrategy<T, K extends object> extends PassportStrategy(
  Strategy,
) {
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

  generateToken(user: T): JwtToken {
    const payload = this.accessControlService.parseUser(user);
    const token = this.jwtService.sign(payload);
    return { accessToken: token };
  }
}
