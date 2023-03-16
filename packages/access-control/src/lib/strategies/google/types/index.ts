import { Profile } from 'passport-google-oauth20';
import { IStrategyService } from '../../../core/types/strategy-service.interface';

export type IProfileResponseGoogle = Profile;

export interface IGoogleAccountUser {
  email: string;
  googleId: string | number;
}

export interface IGoogleAccountService<T extends IGoogleAccountUser>
  extends IStrategyService<T> {
  findByGoogleId(googleId: string): Promise<T> | T;
  registerByGoogle(user: IProfileResponseGoogle): Promise<T> | T;
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
