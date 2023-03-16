import { RequestError } from '@invorious/http-client-front';
import { ILoginResponse } from './login-response.interface';

export interface IMetamaskStrategy {
  login<T extends ILoginResponse>(message: string): Promise<T>;
  requestError: RequestError | undefined;
}
