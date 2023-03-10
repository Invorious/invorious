import { DeleteResult } from './delete-result';
import { RequestError } from './request-error';

export interface IHttpClient {
  requestError: RequestError | undefined;
  get<T>(url: string, query?: Record<string, string>): Promise<T>;
  post<T>(url: string, data?: Partial<T>): Promise<T>;
  put<T>(url: string, data?: Partial<T>): Promise<T>;
  delete<T>(url: string, data?: Partial<T>): Promise<DeleteResult>;
}
