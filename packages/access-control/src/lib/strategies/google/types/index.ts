import { Profile } from 'passport-google-oauth20';

export type IProfileResponseGoogle = Profile;

export interface IGoogleAccountUser {
  googleId: string;
  email: string;
}

export interface IGoogleAccountService<T extends IGoogleAccountUser> {
  findByGoogleId(googleId: string): T;
  registerByGoogle(user: IProfileResponseGoogle): void;
}

export interface IGoogleAccountBuildController {
  routeGoogle: string;
  routeToRedirect: string;
}

export interface IGoogleAccountConfigService {
  clientID: string;
  clientSecret: string;
  callbackURL: string;
  scope?: string[];
}

export interface IGoogleAccountStrategy
  extends IGoogleAccountBuildController,
    IGoogleAccountConfigService {}
