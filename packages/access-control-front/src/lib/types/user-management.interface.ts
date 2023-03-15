import { RequestError } from '@invorious/http-client-front';

export interface IUserManagement {
  register<T>(data: Partial<T>): Promise<T>;
  requestError: RequestError | undefined;
}
