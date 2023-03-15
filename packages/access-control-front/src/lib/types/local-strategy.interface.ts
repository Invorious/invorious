import { ILoginResponse } from './login-response.interface';

export interface ILocalStrategy {
  login<T extends ILoginResponse>(
    username: string,
    password: string,
  ): Promise<T>;
}
