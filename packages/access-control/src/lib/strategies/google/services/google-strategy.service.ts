import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { AccessControlCoreService } from '../../../core/services/access-control-core.service';

import { tokenUserService } from '../../../core/tokens';
import { IJwtPayload } from '../../../core/types/jwt-payload.interface';
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
  K extends IJwtPayload,
> extends PassportStrategy(Strategy, 'google') {
  constructor(
    @Inject(tokenGoogleConfig)
    configGoogleAccount: IGoogleAccountConfigService,
    @Inject(tokenUserService)
    private userService: IGoogleAccountService<T>,
    private coreService: AccessControlCoreService<T, K>,
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
      await this.userService.register(user);
      user = await this.userService.findByGoogleId(profile.id);
    }
    const token = await this.coreService.generateToken(user);
    done(null, token);
  }
}
