import { Inject, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, VerifyCallback } from "passport-google-oauth20";
import { IGoogleAccountConfigService, IGoogleAccountService, IGoogleAccountUser } from "../types";

@Injectable()
export class GoogleAccountStrategyService<K> extends PassportStrategy(Strategy, 'google') {
  constructor(
    @Inject('google-account-config') googleAccountConfig: IGoogleAccountConfigService,
    @Inject('user-service') private userService: IGoogleAccountService<IGoogleAccountUser, K>,
    private jwtService: JwtService,
  ) {
    super({
      clientID: googleAccountConfig.GOOGLE_CLIENT_ID,
      clientSecret: googleAccountConfig.GOOGLE_CLIENT_SECRET,
      callbackURL: googleAccountConfig.GOOGLE_REDIRECT,
      scope: ['email', 'profile'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<any> {
    let user = await this.userService.findByGoogleId(profile.id)
    if (!user) {
      await this.userService.registerByGoogle(profile)
      user = await this.userService.findByGoogleId(profile.id)
    }
    const payload = await this.userService.parseUser(user)
    const token = await this.jwtService.sign(payload as Object)
    done(null, { accessToken: token });
  }


}
