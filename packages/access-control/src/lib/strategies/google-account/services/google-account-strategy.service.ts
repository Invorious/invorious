import { Inject, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, VerifyCallback } from "passport-google-oauth20";

import { IGoogleAccountConfigService, IGoogleAccountService, IGoogleAccountUser, ProfileResponseGoogle } from "../types";
import { tokenGoogleAccountConfig, tokenUserService } from "../utils";

@Injectable()
export class GoogleAccountStrategyService<K> extends PassportStrategy(Strategy, 'google') {
  constructor(
    @Inject(tokenGoogleAccountConfig) configGoogleAccount: IGoogleAccountConfigService,
    @Inject(tokenUserService) private userService: IGoogleAccountService<IGoogleAccountUser, K>,
    private jwtService: JwtService,
  ) {
    const { clientID, clientSecret, callbackURL, scope } = configGoogleAccount

    super({
      clientID,
      clientSecret,
      callbackURL,
      scope: scope ?? ['email', 'profile'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: ProfileResponseGoogle, done: VerifyCallback): Promise<void> {
    let user = await this.userService.findByGoogleId(profile.id)
    if (!user) {
      await this.userService.registerByGoogle(profile)
      user = await this.userService.findByGoogleId(profile.id)
    }
    const payload = await this.userService.parseUser(user)
    const token = await this.jwtService.sign(payload as Object)
    done(null, token);
  }
}
