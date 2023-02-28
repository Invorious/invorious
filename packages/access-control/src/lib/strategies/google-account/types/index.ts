import { Profile } from "passport-google-oauth20";

import { JwtParser } from "../../../core/types/jwt.interface";

export type ProfileResponseGoogle = Profile

export interface IGoogleAccountUser {
  googleId: string;
  email: string;
}

export interface IGoogleAccountService<T extends IGoogleAccountUser, K> extends JwtParser<T, K> {
  findByGoogleId(googleId: string): T;
  registerByGoogle(user: ProfileResponseGoogle): void;
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

export interface IGoogleAccountStrategy extends IGoogleAccountBuildController, IGoogleAccountConfigService { }