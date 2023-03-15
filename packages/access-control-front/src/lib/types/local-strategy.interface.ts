import { RequestError } from '@invorious/http-client-front';
import { ILoginResponse } from './login-response.interface';

export interface ILocalStrategy {
  login<T extends ILoginResponse>(
    username: string,
    password: string,
  ): Promise<T>;
  requestError: RequestError | undefined;
}
