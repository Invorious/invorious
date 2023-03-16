import { RequestError } from '@invorious/http-client-front';

export interface IUserManagement {
  register<T>(data: Partial<T>): Promise<T>;
  update<T>(data: Partial<T>): Promise<T>;
  getProfile<T>(): Promise<T>;
  deleteProfile<T = void>(id: number): Promise<T>;
  requestError: RequestError | undefined;
}
