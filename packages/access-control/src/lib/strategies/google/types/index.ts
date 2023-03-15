import { Profile } from 'passport-google-oauth20';
import { IStrategyService } from '../../../core/types/strategy-service.interface';

export type IProfileResponseGoogle = Profile;

export interface IGoogleAccountUser {
  googleId: string;
  email: string;
}

export interface IGoogleAccountService<T extends IGoogleAccountUser>
  extends IStrategyService<T> {
  findByGoogleId(googleId: string): T;
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
