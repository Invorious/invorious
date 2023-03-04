import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';

import { tokenUserService } from '../../../core/tokens';
import { IAccessControlClientService } from '../../../core/types/access-control-client.interface';
import { tokenGoogleConfig } from '../tokens';

import {
  IGoogleAccountConfigService,
  IGoogleAccountService,
  IGoogleAccountUser,
  IProfileResponseGoogle,
} from '../types';

@Injectable()
export class GoogleStrategyService<
  T extends IGoogleAccountUser,
  K extends object,
> extends PassportStrategy(Strategy, 'google') {
  constructor(
    @Inject(tokenGoogleConfig)
    configGoogleAccount: IGoogleAccountConfigService,
    @Inject(tokenUserService)
    private userService: IGoogleAccountService<T>,
    private coreService: IAccessControlClientService<T, K>,
  ) {
    const { clientID, clientSecret, callbackURL, scope } = configGoogleAccount;

    super({
      clientID,
      clientSecret,
      callbackURL,
      scope: scope ?? ['email', 'profile'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: IProfileResponseGoogle,
    done: VerifyCallback,
  ): Promise<void> {
    let user = await this.userService.findByGoogleId(profile.id);
    if (!user) {
      await this.userService.registerByGoogle(profile);
      user = await this.userService.findByGoogleId(profile.id);
    }
    const payload = await this.coreService.parseUser(user);
    const token = await this.coreService.sign(payload);
    done(null, token);
  }
}
