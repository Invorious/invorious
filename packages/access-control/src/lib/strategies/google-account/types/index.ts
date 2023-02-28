import { JwtParser } from "../../../core/types/access-control-module-config";

export interface IGoogleAccountUser {
  googleId: string;
  email: string;
}

export interface IGoogleAccountService<T extends IGoogleAccountUser, K> extends JwtParser<K> {
  findByGoogleId(googleId: string): T;
  registerByGoogle(user: IGoogleAccountResponse): void;
}

export interface IGoogleAccountBuildController {
  routeController: string;
}

export interface IGoogleAccountConfigService {
  GOOGLE_CLIENT_ID: string;
  GOOGLE_CLIENT_SECRET: string;
  GOOGLE_REDIRECT: string;
}

export interface IGoogleAccountStrategy extends IGoogleAccountBuildController, IGoogleAccountConfigService { }

export interface IGoogleAccountResponse {
  id: string;
  displayName: string;
  name: IGoogleAccountResponseName;
  emails: IGoogleAccountResponseEmail[];
  photos: IGoogleAccountResponsePhoto[];
  provider: string;
  _raw: string;
  _json: IGoogleAccountResponseJson;
}

interface IGoogleAccountResponseJson {
  sub: string;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
  email: string;
  email_verified: boolean;
  locale: string;
  hd: string;
}

interface IGoogleAccountResponsePhoto {
  value: string;
}

interface IGoogleAccountResponseEmail {
  value: string;
  verified: boolean;
}

interface IGoogleAccountResponseName {
  familyName: string;
  givenName: string;
}